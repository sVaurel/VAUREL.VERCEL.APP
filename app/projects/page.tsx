import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected VAUREL projects across Saint Vaurel, EmberDeep, video edits, photo edits, vfx, sfx, music, and brand design.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
