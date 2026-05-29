import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "canvas" | "soft";
  width?: "prose" | "content";
}

export function Section({
  id,
  children,
  className = "",
  bg = "canvas",
  width = "content",
}: SectionProps) {
  const bgClass = bg === "soft" ? "bg-canvas-soft" : "bg-canvas";
  const widthClass = width === "prose" ? "max-w-prose" : "max-w-content";

  return (
    <section id={id} className={`${bgClass} py-24 md:py-32 px-6 md:px-10 ${className}`}>
      <div className={`${widthClass} mx-auto`}>{children}</div>
    </section>
  );
}
