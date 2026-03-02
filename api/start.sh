#!/usr/bin/env bash
# Launch the activity feed API server.
# Usage: ./start.sh [port]

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${1:-3007}"

echo "[activity] starting server on port $PORT"
exec python3 "$SCRIPT_DIR/activity_server.py" "$PORT"
