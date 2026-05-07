import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/_data/site-config';

export function XIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn('shrink-0', className)}
            aria-hidden
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

export function BlueskyIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn('shrink-0', className)}
            aria-hidden
        >
            <path d="M5.34 4.5c2.18 1.64 4.52 4.96 5.66 7.22 1.14-2.26 3.48-5.58 5.66-7.22 1.58-1.19 4.14-2.1 4.14.82 0 .58-.33 4.9-.53 5.6-.69 2.44-3.2 3.07-5.43 2.69 3.89.66 4.88 2.84 2.75 5.02-4.05 4.15-5.82-1.04-6.27-2.37-.08-.24-.12-.35-.12-.25 0-.1-.04.01-.12.25-.45 1.33-2.22 6.52-6.27 2.37-2.13-2.18-1.14-4.36 2.75-5.02-2.23.38-4.74-.25-5.43-2.69-.2-.7-.53-5.02-.53-5.6 0-2.92 2.56-2.01 4.14-.82z" />
        </svg>
    );
}

export default function IntroSection() {
    return (
        <section className="">
            <div className="w-full max-w-6xl mx-auto px-8 md:px-14 lg:px-20 pt-32 md:pt-48 flex flex-col gap-12 lg:gap-16">
                {/* ── Large headline ── */}
                {/* <h2 className="text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.06]">
          Product &amp; Design Engineer, exploring ML and NLP research, currently based in Nigeria.
        </h2> */}

                {/* ── Profile card + contact row ── */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-6">
                    {/* Left: portrait photo + bio */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                            <Image
                                src="/blocks/damola.png"
                                alt="Damola Oladipo"
                                width={170}
                                height={216}
                                className="w-[160px] h-[204px] md:w-[170px] md:h-[216px] object-cover object-top"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-2xl font-light text-neutral-900 dark:text-neutral-100 leading-snug">
                                Hey, I&apos;m Damola Oladipo
                            </p>
                            {/* <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                                Software Engineer (Product &amp; Growth)
                            </p> */}
                            <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
                                A software engineer and growth operator. I
                                publish deeply researched pieces that simplify
                                concepts around system design, building
                                products, driving growth, and advancing your
                                career.
                            </p>

                            {/* My
                                name is Elena Verna. I’m a growth and B2B SaaS
                                growth operator with over 15 years of experience
                                in scaling companies through product-led
                                strategies. I’ve held leadership roles at
                                companies like Lovable, Miro, SurveyMonkey,
                                Amplitude, and Dropbox, across product-led
                                growth, marketing, and analytics roles. I’ve
                                also advised dozens of companies like
                                Superhuman, Sanity, Veed, and MongoDB. I’m an
                                avid learner and Reforge lover (and course
                                creator). I write this newsletter to help you:
                                Become successful at work Pass the system design
                                interview Learn system design through simplified
                                concepts 
                                
                                 You’d enjoy this if you like long form essays on
                                startups, user growth, product development, and
                                engineering. 
                                
                                Damola is a Growth Engineer. He
                                delights in work where things are at infancy, as
                                it sets the stage to establish best practices
                                that shape the long-term outcomes we want. He is
                                a master at finding opportunities and
                                engineering implementations that help users
                                complete important tasks and brings them back
                                every day. He writes TypeScript, Go, and Rust.
                                He builds web, mobile and desktop apps. */}
                            <Link
                                href={siteConfig.baseLinks.about}
                                className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-900 dark:text-neutral-100 inline-flex items-center gap-1 hover:opacity-50 transition-opacity"
                            >
                                More about me
                                <ArrowUpRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: contact + social */}
                    <div className="flex flex-col gap-2 md:items-end md:text-right flex-shrink-0">
                        <p className="text-sm uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
                            Let&apos;s create something amazing together
                        </p>
                        <Link
                            href={siteConfig.baseLinks.sociaLlinks.email}
                            className="text-[0.85rem] text-neutral-900 dark:text-neutral-100 hover:opacity-50 transition-opacity"
                        >
                            mail@damolaoladipo.com
                        </Link>

                        <p className="text-[0.6rem] uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500 mt-2">
                            Social Profile:
                        </p>
                        <div className="flex items-center gap-2 md:justify-end">
                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                            >
                                <XIcon className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.bluesky}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                            >
                                <BlueskyIcon className="w-3.5 h-3.5" />
                            </Link>

                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                            >
                                <Linkedin className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                            >
                                <Github className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="border-t border-neutral-300 dark:border-neutral-700" />
            </div>
        </section>
    );
}
