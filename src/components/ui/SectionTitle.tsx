interface SectionTitleProps {
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  index,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`mb-14 md:mb-20 ${alignClass}`}>
      <div className="flex items-baseline gap-3 mb-4">
        {index && (
          <span className="font-mono text-[11px] tracking-widish text-muted">
            {index}
          </span>
        )}
        {eyebrow && (
          <span className="text-[11px] tracking-widish uppercase text-muted font-sans">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] tracking-tightish max-w-prose">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-prose">
          {description}
        </p>
      )}
    </div>
  );
}
