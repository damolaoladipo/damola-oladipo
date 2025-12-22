import Herobanner from "@/components/containers/hero-banner";
import ProjectList from "@/components/containers/project-list";
import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Projects | Studiova",
};

export default function Page() {
    const projects = getAllProjects();
    return (
        <>
            <Herobanner
                bannerimage="/images/"
                heading="Projects"
                desc="A <span>showcase of creativity</span>, strategy, and results explore the projects that define us." />
            <ProjectList />    
        </>
    );
};
