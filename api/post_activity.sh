#!/usr/bin/env bash
# Post an activity event to the activity feed API.
# Usage: ./post_activity.sh <type> <action>
# Example: ./post_activity.sh chart-scan "scanned 4 pairs + generated content idea"
#
# Requires ACTIVITY_API_TOKEN env var in production.
# Non-fatal: logs errors to stderr but always exits 0.

API_URL="${ACTIVITY_API_URL:-http://localhost:3007}"
API_TOKEN="${ACTIVITY_API_TOKEN:-}"
TYPE="${1:-general}"
ACTION="${2}"

if [ -z "$ACTION" ]; then
  echo "[post_activity] usage: $0 <type> <action>" >&2
  exit 0
fi

python3 -c "
import json, os, urllib.request, sys
data = json.dumps({'type': '$TYPE', 'action': '''${ACTION}'''}).encode()
headers = {'Content-Type': 'application/json'}
token = os.environ.get('ACTIVITY_API_TOKEN', '')
if token:
    headers['Authorization'] = f'Bearer {token}'
req = urllib.request.Request('${API_URL}/activity', data=data, headers=headers, method='POST')
try:
    resp = urllib.request.urlopen(req, timeout=5)
    print(f'[post_activity] ok: {resp.read().decode()}')
except Exception as e:
    print(f'[post_activity] failed: {e}', file=sys.stderr)
" 2>&1 || true
