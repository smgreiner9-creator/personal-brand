#!/usr/bin/env bash
# Start activity API server + Cloudflare tunnel for production.
# The tunnel URL changes on restart — update Vercel env var if it does:
#   npx vercel env rm NEXT_PUBLIC_ACTIVITY_API production
#   echo "https://<new-url>.trycloudflare.com" | npx vercel env add NEXT_PUBLIC_ACTIVITY_API production
#   npx vercel --prod
#
# Requires: ACTIVITY_API_TOKEN in ~/.openclaw/.env

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Source credentials
if [ -f "$HOME/.openclaw/.env" ]; then
  set -a
  source "$HOME/.openclaw/.env"
  set +a
fi

if [ -z "$ACTIVITY_API_TOKEN" ]; then
  echo "[start-production] WARNING: ACTIVITY_API_TOKEN not set, POST endpoint will be open" >&2
fi

# Start activity server
echo "[start-production] starting activity server on :3007"
python3 "$SCRIPT_DIR/activity_server.py" 3007 &
API_PID=$!
sleep 1

# Start Cloudflare tunnel
echo "[start-production] starting cloudflare tunnel..."
cloudflared tunnel --url http://localhost:3007 &>/tmp/cloudflared-activity.log &
TUNNEL_PID=$!
sleep 8

TUNNEL_URL=$(grep -o 'https://[a-z0-9-]*\.trycloudflare\.com' /tmp/cloudflared-activity.log | head -1)
if [ -n "$TUNNEL_URL" ]; then
  echo "[start-production] tunnel live at: $TUNNEL_URL"
  echo "[start-production] if this URL changed, update Vercel env var"
else
  echo "[start-production] WARNING: could not detect tunnel URL. Check /tmp/cloudflared-activity.log" >&2
fi

echo "[start-production] running (API pid=$API_PID, tunnel pid=$TUNNEL_PID)"
echo "[start-production] press Ctrl+C to stop"

trap "kill $API_PID $TUNNEL_PID 2>/dev/null; echo '[start-production] stopped'" EXIT
wait
