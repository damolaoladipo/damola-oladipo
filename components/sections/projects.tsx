import Link from 'next/link';
import Image from 'next/image';

interface Project {
    name: string;
    url: string;
    image: string;
    dateRange: string;
}

const projects: Project[] = [
    {
        name: 'Troott — Social Audio Platform',
        url: '/projects/troott',
        image: '/images/troott.png',
        dateRange: 'Aug 2023 - Present',
    },
    {
        name: 'eLab API — Developer Platform',
        url: '/projects/elab-api',
        image: '/images/ennovatelab.png',
        dateRange: 'Jan 2023 - Jun 2023',
    },
    {
        name: 'Pacepard — Productivity App',
        url: '/projects/pacepard',
        image: '/images/pacepard.png',
        dateRange: 'Jun 2022 - Dec 2022',
    },
    {
        name: 'Troott Mobile App',
        url: '/projects/troott-mobile',
        image: '/images/troott-mobile.png',
        dateRange: 'Mar 2022 - Aug 2022',
    },
];

const Projects = () => {
    return (
        <div
            id="projects"
            className="w-full px-6 py-16 md:py-24 mx-auto max-w-[1280px]"
        >
            <div className="max-w-[1248px] mx-auto flex flex-col gap-12">
                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight text-foreground max-w-3xl">
                    I design and build beautiful, intuitive, and responsive web
                    and mobile applications.
                </h2>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-0">
                        <hr className="border-t border-[#e9e9e7] dark:border-border" />
                        <p className="mt-4 text-lg md:text-base font-medium text-[#787673] dark:text-muted-foreground uppercase tracking-wide">
                            My Works
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {projects.map((project) => (
                            <Link
                                key={project.url}
                                href={project.url}
                                className="group flex flex-col gap-4"
                            >
                                <div className="relative w-full aspect-square rounded-[11px] overflow-hidden bg-muted">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="text-lg md:text-base font-medium text-[#787673] dark:text-muted-foreground">
                                        {project.dateRange}
                                    </p>
                                    <h3 className="text-2xl md:text-[30px] font-semibold leading-snug text-foreground/70 group-hover:text-foreground transition-colors underline underline-offset-4 decoration-foreground/30 group-hover:decoration-foreground/70">
                                        {project.name}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
