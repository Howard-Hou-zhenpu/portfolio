import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "subtle" | "outline" | "tech";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const styles = {
    default: "border border-line bg-canvas text-ink-soft",
    subtle: "border border-line-soft bg-canvas-soft/60 text-muted",
    outline: "border border-ink-soft text-ink-soft",
    tech: "border border-line-soft bg-transparent text-muted font-mono normal-case tracking-tightish",
  } as const;

  // tech variant: smaller chip, normal-case, more restrained
  const sizeClass =
    variant === "tech"
      ? "px-2.5 py-[3px] text-[10.5px]"
      : "px-3 py-1 text-[10.5px] tracking-widish uppercase";

  return (
    <span
      className={`inline-flex items-center font-sans whitespace-nowrap rounded-sm ${sizeClass} ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
