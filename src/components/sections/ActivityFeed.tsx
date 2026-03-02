"use client";

import { useEffect, useRef, useState } from "react";

interface ActivityEntry {
  id: string;
  action: string;
  type: string;
  timestamp: string;
}

interface ActivityData {
  entries: ActivityEntry[];
  total_count: number;
  server_status: string;
  last_activity_at: string | null;
}

const API_URL = process.env.NEXT_PUBLIC_ACTIVITY_API ?? "http://localhost:3007";
const POLL_INTERVAL = 60_000;

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function ActivityFeed() {
  const [data, setData] = useState<ActivityData | null>(null);
  const [status, setStatus] = useState<"loading" | "online" | "offline">("loading");
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchActivity() {
      try {
        const res = await fetch(`${API_URL}/activity`);
        if (!res.ok) throw new Error(`${res.status}`);
        const json: ActivityData = await res.json();
        if (mounted) {
          setData(json);
          setStatus("online");
        }
      } catch {
        if (mounted) setStatus("offline");
      }
    }

    fetchActivity();
    const interval = setInterval(fetchActivity, POLL_INTERVAL);
    return () => { mounted = false; clearInterval(interval); };
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Don't render anything until we know the status
  if (status === "loading") return null;

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-40">
      {/* Expandable panel */}
      <div
        className={`absolute bottom-14 right-0 w-72 origin-bottom-right rounded-xl border border-border bg-surface p-4 shadow-lg transition-all duration-200 ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              status === "online" ? "bg-emerald-500 pulse-dot" : "bg-neutral-400"
            }`}
          />
          <span className="font-mono text-xs text-muted">
            {status === "online" ? "aiden is online" : "aiden is offline"}
          </span>
        </div>

        {/* Entries */}
        <div className="mt-3 space-y-2">
          {status === "online" && data?.entries.length === 0 && (
            <p className="text-xs text-muted">no recent activity</p>
          )}

          {status === "online" &&
            data?.entries.map((entry) => (
              <div key={entry.id} className="flex items-baseline gap-3">
                <span className="shrink-0 font-mono text-[11px] text-muted">
                  {timeAgo(entry.timestamp)}
                </span>
                <span className="text-sm leading-snug text-body">
                  {entry.action}
                </span>
              </div>
            ))}

          {status === "offline" && (
            <p className="text-xs text-muted">activity feed unavailable</p>
          )}
        </div>

        {/* Total count */}
        {status === "online" && data && data.total_count > 0 && (
          <div className="mt-3 border-t border-border pt-2">
            <span className="font-mono text-[11px] text-muted">
              {data.total_count.toLocaleString()} tasks completed
            </span>
          </div>
        )}
      </div>

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close activity feed" : "View Aiden activity"}
        className="group flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 shadow-md transition-all duration-200 hover:shadow-lg"
      >
        <span
          className={`inline-block h-2.5 w-2.5 rounded-full transition-colors ${
            status === "online" ? "bg-emerald-500 pulse-dot" : "bg-neutral-400"
          }`}
        />
        <span className="font-mono text-xs text-muted transition-colors group-hover:text-body">
          aiden
        </span>
      </button>
    </div>
  );
}
