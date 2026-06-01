// DeviceFrame: wraps a portrait iOS screenshot in a minimal, editorial iPhone-class
// device shell so the image reads as a real product rather than a loose screenshot.

import type { CSSProperties } from 'react';

export interface DeviceFrameProps {
  src: string;
  alt: string;
  className?: string;
  scale?: 'sm' | 'md';
}

type Dims = {
  outerW: number;
  outerH: number;
  screenW: number;
  screenH: number;
  pad: number;
  shellRadius: number;
  screenRadius: number;
  notchW: number;
  notchH: number;
  notchTop: number;
  homeW: number;
  homeH: number;
  homeBottom: number;
};

const SCREEN_RATIO = 19.5 / 9; // height / width for a modern iPhone screen

function getDims(scale: 'sm' | 'md'): Dims {
  if (scale === 'sm') {
    const outerW = 220;
    const pad = 8;
    const screenW = outerW - pad * 2; // 204
    const screenH = Math.round(screenW * SCREEN_RATIO); // ~442
    const outerH = screenH + pad * 2; // ~458
    return {
      outerW,
      outerH,
      screenW,
      screenH,
      pad,
      shellRadius: 36,
      screenRadius: 30,
      notchW: 64,
      notchH: 18,
      notchTop: 8,
      homeW: 80,
      homeH: 3,
      homeBottom: 6,
    };
  }
  const outerW = 280;
  const pad = 10;
  const screenW = outerW - pad * 2; // 260
  const screenH = Math.round(screenW * SCREEN_RATIO); // ~563
  const outerH = screenH + pad * 2; // ~583
  return {
    outerW,
    outerH,
    screenW,
    screenH,
    pad,
    shellRadius: 44,
    screenRadius: 36,
    notchW: 80,
    notchH: 22,
    notchTop: 10,
    homeW: 100,
    homeH: 4,
    homeBottom: 8,
  };
}

export function DeviceFrame({ src, alt, className, scale = 'md' }: DeviceFrameProps) {
  const d = getDims(scale);

  const shellStyle: CSSProperties = {
    width: d.outerW,
    height: d.outerH,
    padding: d.pad,
    borderRadius: d.shellRadius,
  };

  const screenStyle: CSSProperties = {
    width: d.screenW,
    height: d.screenH,
    borderRadius: d.screenRadius,
  };

  const notchStyle: CSSProperties = {
    width: d.notchW,
    height: d.notchH,
    top: d.notchTop,
    borderRadius: d.notchH / 2,
  };

  const homeStyle: CSSProperties = {
    width: d.homeW,
    height: d.homeH,
    bottom: d.homeBottom,
    borderRadius: d.homeH / 2,
  };

  const wrapperClasses = [
    'relative',
    'mx-auto',
    'bg-neutral-900',
    'ring-1',
    'ring-inset',
    'ring-white/5',
    'shadow-xl',
    'shadow-black/10',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses} style={shellStyle}>
      <div
        className="relative overflow-hidden bg-canvas-soft"
        style={screenStyle}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover object-top"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bg-black"
          style={notchStyle}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bg-white/55"
          style={homeStyle}
        />
      </div>
    </div>
  );
}

export default DeviceFrame;
