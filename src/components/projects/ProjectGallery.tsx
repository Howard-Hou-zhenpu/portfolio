import type { ProjectGalleryItem } from "../../data/projects";
import { ImageFrame } from "../ui/ImageFrame";

interface ProjectGalleryProps {
  items?: ProjectGalleryItem[];
  className?: string;
  showFallback?: boolean;
}

/**
 * Project gallery — 1 lead image + 2-column secondary grid.
 * Reserved for future detail pages or expanded primary cards.
 * Renders nothing when items is empty (and showFallback is false).
 */
export function ProjectGallery({
  items,
  className = "",
  showFallback = false,
}: ProjectGalleryProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const [lead, ...rest] = items;

  return (
    <div className={`flex flex-col gap-6 md:gap-8 ${className}`}>
      <ImageFrame
        src={showFallback ? null : lead.src}
        alt={lead.alt}
        caption={lead.caption}
        variant="gallery"
        ratio="16/9"
      />

      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {rest.map((item) => (
            <ImageFrame
              key={item.src}
              src={showFallback ? null : item.src}
              alt={item.alt}
              caption={item.caption}
              variant="gallery"
              ratio="4/3"
            />
          ))}
        </div>
      )}
    </div>
  );
}
