import { useState, type ReactNode } from "react";
import { assetUrl } from "../../lib/assetUrl";

export type ImageFrameVariant =
  | "project"
  | "primary"
  | "research"
  | "gallery"
  | "subtle";

interface ImageFrameProps {
  src?: string | null;
  alt: string;
  caption?: string;
  className?: string;
  variant?: ImageFrameVariant;
  ratio?: "16/10" | "16/9" | "4/3" | "1/1" | "4/5" | "auto";
  fallback?: ReactNode;
  hover?: boolean;
  objectFit?: "cover" | "contain";
}

const variantStyles: Record<
  ImageFrameVariant,
  { border: string; bg: string }
> = {
  project: { border: "border-line", bg: "bg-canvas-soft/40" },
  primary: { border: "border-line", bg: "bg-canvas-soft/60" },
  research: { border: "border-line-soft", bg: "bg-canvas-soft/30" },
  gallery: { border: "border-line-soft", bg: "bg-canvas-soft/40" },
  subtle: { border: "border-line-soft", bg: "bg-canvas-soft/20" },
};

const ratioClass: Record<NonNullable<ImageFrameProps["ratio"]>, string> = {
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "auto": "",
};

export function ImageFrame({
  src,
  alt,
  caption,
  className = "",
  variant = "project",
  ratio = "16/10",
  fallback,
  hover = true,
  objectFit = "cover",
}: ImageFrameProps) {
  const [errored, setErrored] = useState(false);
  const resolvedSrc = assetUrl(src);
  const showImage = Boolean(resolvedSrc) && !errored;
  const style = variantStyles[variant];

  const isAutoRatio = ratio === "auto";
  const containerClass = isAutoRatio
    ? "relative w-full overflow-hidden rounded-sm border"
    : `relative w-full overflow-hidden rounded-sm border ${ratioClass[ratio]}`;

  const imgObjectFit = objectFit === "contain" ? "object-contain" : "object-cover";

  return (
    <figure className={className}>
      <div className={`${containerClass} ${style.border} ${style.bg}`}>
        {showImage ? (
          <img
            src={resolvedSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setErrored(true)}
            className={`${isAutoRatio ? "w-full h-auto max-h-[560px]" : "absolute inset-0 w-full h-full"} ${imgObjectFit} ${
              hover
                ? "transition-transform duration-700 ease-editorial hover:scale-[1.015]"
                : ""
            }`}
            style={isAutoRatio ? { display: "block" } : undefined}
          />
        ) : (
          <div className="absolute inset-0">
            {fallback ?? <DefaultFallback alt={alt} />}
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[10.5px] tracking-widish text-muted uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function DefaultFallback({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
      <div className="font-mono text-[9.5px] tracking-widish text-muted uppercase mb-2">
        — image pending —
      </div>
      <div className="font-serif italic text-[12.5px] text-muted-soft leading-relaxed max-w-[28ch]">
        {alt}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="h-px w-6 bg-line" />
        <span className="font-mono text-[9px] text-muted-soft">FIG</span>
        <span className="h-px w-6 bg-line" />
      </div>
    </div>
  );
}
