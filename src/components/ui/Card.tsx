export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card-tilt rounded-xl border border-border bg-surface p-6 ${className}`}
    >
      {children}
    </div>
  );
}
