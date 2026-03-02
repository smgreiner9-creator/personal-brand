import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm",
  secondary:
    "border border-border text-text hover:bg-bg-alt",
  ghost:
    "text-body hover:text-text",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
