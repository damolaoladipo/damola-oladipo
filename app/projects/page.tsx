import { Metadata } from "next";
import Projects from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects — Damola Oladipo",
  description: "A showcase of web, mobile, and API projects I've designed and built.",
};

export default function ProjectsPage() {
  return <Projects />;
}
