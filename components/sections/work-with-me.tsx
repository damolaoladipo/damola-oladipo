import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/_data/site-config';

const services = [
    {
        title: 'Product Design',
        price: 'Starting at $3,000 per project',
        description:
            'Creating innovative and user-centric products that solve real problems. This service includes research, wireframing, prototyping, and high-fidelity design.',
        images: [
            '/images/projects/projectlist/project1-cover.png',
            '/images/troott.png',
            '/images/pacepard.png',
            '/images/projects/projectlist/project2-cover.png',
        ],
    },
    {
        title: 'Web Design & Engineering',
        price: 'Starting at $2,500 per project',
        description:
            'Designing and engineering visually stunning, performant websites. This service covers responsive design, UI/UX, React/Next.js development, and CMS integration.',
        images: [
            '/images/ennovatelab.png',
            '/images/projects/projectlist/project2-cover.png',
            '/images/troott.png',
            '/images/projects/projectlist/project1-cover.png',
        ],
    },
    {
        title: 'Mobile App Development',
        price: 'Starting at $4,000 per project',
        description:
            "Crafting intuitive and engaging mobile applications for iOS and Android. This service includes user research, wireframing, React Native development, and App Store deployment.",
        images: [
            '/images/troott-mobile.png',
            '/images/pacepard.png',
            '/images/projects/projectlist/project1-cover.png',
            '/images/ennovatelab.png',
        ],
    },
    {
        title: 'UX & Design Systems',
        price: 'Starting at $3,500 per project',
        description:
            'Enhancing the overall user experience and establishing scalable design systems. This service covers user research, usability testing, interaction design, and component libraries.',
        images: [
            '/images/projects/projectlist/project2-cover.png',
            '/images/troott.png',
            '/images/ennovatelab.png',
            '/images/pacepard.png',
        ],
    },
];

export default function WorkWithMe() {
    return (
        <section className="w-full bg-[#F2F0ED] dark:bg-neutral-900 py-20 md:py-28">
            <div className="max-w-[1280px] mx-auto px-6 md:px-14 lg:px-20">
                {/* Header */}
                <div className="mb-10 md:mb-14 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
                        Work with Me
                    </h2>
                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Partnering with me means embarking on a journey of
                        creativity, innovation, and excellence. With years of
                        experience in product design, web design, and
                        engineering, I bring a unique blend of skills and
                        insights to every project.
                    </p>
                </div>

                {/* Service cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-neutral-300 dark:border-neutral-700 pt-8">
                    <div className="flex flex-col gap-1">
                        <p className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                            Can&apos;t decide or custom request?
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            I&apos;m flexible and probably have a plan for you.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Link
                            href={siteConfig.baseLinks.sociaLlinks.email}
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-white transition-colors"
                        >
                            Email Me
                        </Link>
                        <Link
                            href={siteConfig.baseLinks.sociaLlinks.email}
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold border border-neutral-400 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({
    service,
}: {
    service: (typeof services)[number];
}) {
    const col1 = [service.images[0], service.images[2]];
    const col2 = [service.images[1], service.images[3]];

    return (
        <div className="bg-white dark:bg-neutral-800 p-6 flex flex-col gap-5">
            {/* Top: text + vertical marquee */}
            <div className="flex gap-4">
                {/* Text content */}
                <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                        {service.title}
                    </h3>
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {service.price}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                        {service.description}
                    </p>
                </div>

                {/* Dual vertical marquee */}
                <div className="flex-shrink-0 flex gap-1.5 w-[96px] h-[140px] overflow-hidden self-start">
                    {/* Column 1: scrolls up */}
                    <div className="flex-1 overflow-hidden">
                        <div className="animate-marquee-up flex flex-col gap-1.5">
                            {[...col1, ...col1].map((src, i) => (
                                <div
                                    key={i}
                                    className="relative w-full h-[64px] flex-shrink-0 overflow-hidden bg-neutral-100 dark:bg-neutral-700"
                                >
                                    <Image
                                        src={src}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="48px"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: scrolls down */}
                    <div className="flex-1 overflow-hidden">
                        <div className="animate-marquee-down flex flex-col gap-1.5">
                            {[...col2, ...col2].map((src, i) => (
                                <div
                                    key={i}
                                    className="relative w-full h-[64px] flex-shrink-0 overflow-hidden bg-neutral-100 dark:bg-neutral-700"
                                >
                                    <Image
                                        src={src}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="48px"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA button */}
            <div>
                <Link
                    href={siteConfig.baseLinks.sociaLlinks.email}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-white transition-colors"
                >
                    More Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
            </div>
        </div>
    );
}
