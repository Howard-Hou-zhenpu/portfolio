// Resolve a `/images/...` style path against vite's BASE_URL so the same
// data file works under `/`, under `/portfolio/` (GitHub Pages subpath),
// and under any future custom domain.
export function assetUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (/^(?:https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  const base = import.meta.env.BASE_URL || "/";
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}
