import { useEffect, useRef, useState } from "react";
import type p5 from "p5";

/**
 * A sketch factory receives the container element (for responsive sizing)
 * and returns a p5 instance-mode closure.
 */
export type SketchFactory = (container: HTMLElement) => (p: p5) => void;

interface P5CanvasProps {
  /** Instance-mode sketch factory. */
  sketch: SketchFactory;
  /** Extra classes for the container (size, positioning). */
  className?: string;
  /** aria-hidden decorative canvas by default; set a label to expose it. */
  ariaLabel?: string;
  /**
   * Disable on small screens (default true). P5 physics is battery/CPU heavy
   * on phones, and these are decorative.
   */
  disableOnMobile?: boolean;
  /** Breakpoint (px) below which the canvas is skipped. Default 768. */
  mobileBreakpoint?: number;
}

/**
 * Wraps a p5 instance-mode sketch with the guardrails a real site needs:
 *  - only runs while the container is in (or near) the viewport
 *  - never runs when the user prefers reduced motion
 *  - skips small screens entirely (opt-out via disableOnMobile)
 *  - tears the instance down on unmount
 */
export function P5Canvas({
  sketch,
  className = "",
  ariaLabel,
  disableOnMobile = true,
  mobileBreakpoint = 768,
}: P5CanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<p5 | null>(null);
  const [enabled, setEnabled] = useState(false);

  // Decide up front whether this environment should animate at all.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const tooSmall =
      disableOnMobile && window.innerWidth < mobileBreakpoint;
    setEnabled(!reduceMotion && !tooSmall);
  }, [disableOnMobile, mobileBreakpoint]);

  // Create / destroy the p5 instance based on viewport visibility.
  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const start = async () => {
      if (instanceRef.current || cancelled) return;
      const p5mod = (await import("p5")).default;
      if (cancelled) return;
      instanceRef.current = new p5mod(sketch(container), container);
    };

    const stop = () => {
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) start();
          else stop();
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      stop();
    };
  }, [enabled, sketch]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    />
  );
}
