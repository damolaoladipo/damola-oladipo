import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/_data/site-config';

const skills = [
    'Product Engineering',
    'UI / UX Design',
    'React & Next.js',
    'Mobile Apps',
    'API Design',
    'NLP Research',
];

const workedWith = [
    'Troott',
    'Ennovate Lab',
    'Pacepard',
    'React Native',
    'Next.js',
    'TypeScript',
];

export default function CallToAction() {
    return (
        <section className="relative w-full bg-neutral-950 overflow-hidden">
            {/* Photo — absolutely fills right half, bleeds to edge */}
            <div className="absolute right-0 top-0 bottom-[72px] w-1/2 md:w-[45%] hidden md:block">
                <Image
                    src="/blocks/dee.png"
                    alt="Damola Oladipo"
                    fill
                    className="object-cover object-[center_top] scale-105"
                    priority
                    sizes="45vw"
                />
                {/* Gradient: fades photo into the dark bg from left */}
                <div className="absolute inset-0 " />
                {/* Subtle top fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col gap-8 pt-16 pb-8 lg:pt-24 lg:pb-10 max-w-xl">
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight text-white">
                        Let&apos;s build your best product yet.
                    </h2>

                    <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-md">
                        {siteConfig.description}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white/80 border border-white/20 bg-white/5"
                            >
                                <span className="w-3 h-3 border border-white/40 inline-block flex-shrink-0" />
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-2">
                        <Link
                            href={siteConfig.baseLinks.sociaLlinks.email}
                            className="inline-flex items-center gap-2 w-fit h-[42px] px-6 text-base font-medium bg-white text-neutral-950 hover:bg-white/90 transition-opacity"
                        >
                            Start a project
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <span className="text-xs text-white/40">
                            No commitment needed. Let&apos;s talk first.
                        </span>
                    </div>
                </div>

                {/* Bottom — worked with strip */}
                <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                    <span className="text-sm font-medium text-white/40 whitespace-nowrap flex-shrink-0">
                        Worked with:
                    </span>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                        {workedWith.map((name) => (
                            <span
                                key={name}
                                className="text-base font-semibold text-white/50 hover:text-white/80 transition-colors tracking-tight"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
