#!/usr/bin/env python3
"""Activity feed API server for byforge.dev — stdlib only, zero deps."""

import json
import os
import sys
import uuid
from datetime import datetime, timezone
from http.server import HTTPServer, BaseHTTPRequestHandler

DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "activity.json")
MAX_ENTRIES = 50
API_TOKEN = os.environ.get("ACTIVITY_API_TOKEN", "")

VALID_TYPES = {
    "morning-brief", "evening-wrap", "chart-scan", "prediction-market",
    "cron-health", "weekly-builder", "weekly-opportunity", "idea-pipeline",
    "ambient-context", "heartbeat", "general",
}

entries: list[dict] = []
total_count: int = 0


def load_data():
    global entries, total_count
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, "r") as f:
                data = json.load(f)
            entries = data.get("entries", [])
            total_count = data.get("total_count", len(entries))
        except (json.JSONDecodeError, KeyError):
            entries = []
            total_count = 0


def save_data():
    with open(DATA_FILE, "w") as f:
        json.dump({"entries": entries, "total_count": total_count}, f, indent=2)


def cors_headers():
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }


class ActivityHandler(BaseHTTPRequestHandler):
    def _send(self, code: int, body: dict):
        raw = json.dumps(body).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_OPTIONS(self):
        self.send_response(204)
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()

    def do_GET(self):
        if self.path == "/health":
            self._send(200, {"status": "ok"})
            return

        if self.path == "/activity":
            last_at = entries[0]["timestamp"] if entries else None
            self._send(200, {
                "entries": entries[:5],
                "total_count": total_count,
                "server_status": "online",
                "last_activity_at": last_at,
            })
            return

        self._send(404, {"error": "not found"})

    def _check_auth(self) -> bool:
        if not API_TOKEN:
            return True  # no token configured = open (local dev)
        auth = self.headers.get("Authorization", "")
        return auth == f"Bearer {API_TOKEN}"

    def do_POST(self):
        global total_count

        if self.path != "/activity":
            self._send(404, {"error": "not found"})
            return

        if not self._check_auth():
            self._send(401, {"error": "unauthorized"})
            return

        length = int(self.headers.get("Content-Length", 0))
        if length == 0:
            self._send(400, {"error": "empty body"})
            return

        try:
            body = json.loads(self.rfile.read(length))
        except json.JSONDecodeError:
            self._send(400, {"error": "invalid JSON"})
            return

        action = body.get("action", "").strip()
        etype = body.get("type", "general").strip()

        if not action:
            self._send(400, {"error": "action is required"})
            return

        if etype not in VALID_TYPES:
            self._send(400, {"error": f"invalid type, must be one of: {', '.join(sorted(VALID_TYPES))}"})
            return

        entry_id = uuid.uuid4().hex[:8]
        timestamp = datetime.now(timezone.utc).isoformat()

        entry = {"id": entry_id, "action": action, "type": etype, "timestamp": timestamp}
        entries.insert(0, entry)
        if len(entries) > MAX_ENTRIES:
            entries[:] = entries[:MAX_ENTRIES]

        total_count += 1
        save_data()

        self._send(201, {"status": "ok", "id": entry_id, "timestamp": timestamp})

    def log_message(self, format, *args):
        print(f"[activity] {args[0]}" if args else "")


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3007
    load_data()
    print(f"[activity] loaded {len(entries)} entries, {total_count} total")
    server = HTTPServer(("0.0.0.0", port), ActivityHandler)
    print(f"[activity] listening on :{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[activity] shutting down")
        save_data()


if __name__ == "__main__":
    main()
