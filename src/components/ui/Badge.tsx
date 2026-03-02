type Status = "live" | "building" | "coming-soon";

const colors: Record<Status, string> = {
  live: "bg-emerald-50 text-emerald-700 border-emerald-200",
  building: "bg-amber-50 text-amber-700 border-amber-200",
  "coming-soon": "bg-neutral-100 text-neutral-500 border-neutral-200",
};

const labels: Record<Status, string> = {
  live: "Live",
  building: "Building",
  "coming-soon": "Coming Soon",
};

export function Badge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors[status]}`}
    >
      {status === "live" && (
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
      )}
      {labels[status]}
    </span>
  );
}
