import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, BookmarkSimple } from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/_data/site-config';

export default function PromoBanner() {
    return (
        <section className="w-full bg-[#F2F0ED] dark:bg-neutral-900 py-10 md:py-14">
            <div className="max-w-[1280px] mx-auto px-6 md:px-14 lg:px-20">
                <div className="flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/50 p-5 md:p-6">
                    {/* Image */}
                    <div className="relative flex-shrink-0 w-full sm:w-[180px] h-[120px] sm:h-[100px] overflow-hidden bg-neutral-100 dark:bg-neutral-700">
                        <Image
                            src="/images/troott.png"
                            alt="Essays"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 100vw, 180px"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                            <BookmarkSimple size={13} weight="fill" />
                            Essays
                        </div>
                        <p className="text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                            Thoughts on product, design, and engineering.
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            I write about building digital products — the
                            process, the decisions, the tradeoffs, and the
                            lessons learned shipping real things with real
                            users.
                        </p>
                    </div>

                    {/* CTA */}
                    <Link
                        href={siteConfig.baseLinks.essays}
                        className="inline-flex items-center gap-1.5 flex-shrink-0 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-white transition-colors whitespace-nowrap"
                    >
                        Read Now
                        <ArrowUpRight size={13} weight="bold" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
