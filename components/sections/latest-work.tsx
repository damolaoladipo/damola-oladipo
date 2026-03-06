import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/_data/site-config';

const featuredProjects = [
    {
        name: 'Troott — Social Audio Platform',
        url: '/projects/troott',
        image: '/images/troott.png',
        description:
            'A social audio platform built to connect people through voice. Designed and engineered the product end-to-end — from research and prototyping to shipping on iOS and the web.',
        category: 'Product Design & Engineering',
        date: 'Aug 2023 – Present',
        accent: false,
        cardBg: 'bg-blue-50 dark:bg-blue-950/20',
    },
    {
        name: 'eLab API — Developer Platform',
        url: '/projects/elab-api',
        image: '/images/ennovatelab.png',
        description:
            "A developer-facing API platform enabling third-party integrations for Ennovate Lab's suite of products. Led UX design and front-end engineering across the full lifecycle.",
        category: 'Web Design & Engineering',
        date: 'Jan 2023 – Jun 2023',
        accent: true,
        cardBg: 'bg-neutral-100 dark:bg-neutral-800/40',
    },
];

export default function LatestWork() {
    return (
        <section className="w-full bg-[#F2F0ED] dark:bg-neutral-900 py-20 md:py-28">
            <div className="max-w-[1280px] mx-auto px-6 md:px-14 lg:px-20">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 md:mb-14">
                    <div className="max-w-md">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
                            My latest work
                        </h2>
                        <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            I present my top-tier projects, meticulously crafted
                            with unwavering passion, simplicity, boundless
                            creativity, and unparalleled attention to detail.
                        </p>
                    </div>

                    <Link
                        href={siteConfig.baseLinks.projects}
                        className="inline-flex items-center gap-1.5 self-start sm:self-auto flex-shrink-0 px-5 py-2.5 text-sm font-bold uppercase tracking-wider bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-white transition-colors"
                    >
                        All Works
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* 2-column featured project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {featuredProjects.map((project) => (
                        <Link
                            key={project.url}
                            href={project.url}
                            className="group flex flex-col overflow-hidden border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800 hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Image area with tinted background */}
                            <div
                                className={`relative w-full aspect-[16/10] overflow-hidden ${project.cardBg}`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col gap-2 p-6">
                                <h3
                                    className={`text-lg md:text-xl font-bold leading-snug transition-colors ${
                                        project.accent
                                            ? 'text-orange-500 group-hover:text-orange-400'
                                            : 'text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300'
                                    }`}
                                >
                                    {project.name}
                                </h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                    {project.description}
                                </p>
                                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-medium">
                                    {project.category}&nbsp;&bull;&nbsp;
                                    {project.date}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
