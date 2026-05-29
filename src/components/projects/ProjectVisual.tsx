import type { Project } from "../../data/projects";
import { ImageFrame } from "../ui/ImageFrame";
import type { ImageFrameVariant } from "../ui/ImageFrame";
import { ProjectPlaceholderVisual } from "./ProjectPlaceholderVisual";

interface ProjectVisualProps {
  project: Project;
  index: number;
  variant?: ImageFrameVariant;
  ratio?: "16/10" | "16/9" | "4/3" | "1/1" | "4/5" | "auto";
  objectFit?: "cover" | "contain";
}

/**
 * Decides between cover image and editorial placeholder.
 * - cover present and loads → ImageFrame
 * - cover missing → ProjectPlaceholderVisual (editorial fallback)
 * - cover present but file 404 → ImageFrame catches onError and swaps to
 *   the editorial placeholder via its `fallback` prop
 *
 * Result: the page stays coherent before real images are added,
 * and degrades gracefully if a path is wrong.
 */
export function ProjectVisual({
  project,
  index,
  variant = "project",
  ratio = "16/10",
  objectFit = "cover",
}: ProjectVisualProps) {
  if (!project.cover) {
    return <ProjectPlaceholderVisual project={project} index={index} />;
  }

  return (
    <ImageFrame
      src={project.cover}
      alt={project.coverAlt ?? project.titleEn}
      variant={variant}
      ratio={ratio}
      objectFit={objectFit}
      fallback={<ProjectPlaceholderVisual project={project} index={index} />}
    />
  );
}
