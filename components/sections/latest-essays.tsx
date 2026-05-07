import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { EssayPage } from '@/types/essay';
import { siteConfig } from '@/_data/site-config';

const mdxSource = createMDXSource(docs, meta);
const essaySource = loader({
    baseUrl: '/essays',
    source: {
        get files() {
            return (mdxSource as unknown as { files(): unknown[] }).files();
        },
    } as Parameters<typeof loader>[0]['source'],
});

const formatDate = (date: Date): string =>
    date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

export default async function LatestEssays() {
    const allPages = essaySource.getPages() as unknown as EssayPage[];
    const recentEssays = allPages
        .sort(
            (a, b) =>
                new Date(b.data.date).getTime() -
                new Date(a.data.date).getTime(),
        )
        .slice(0, 6);

    return (
        <div className="w-full max-w-6xl mx-auto px-8 md:px-14 lg:px-20 py-16 md:py-20 lg:py-24 flex flex-col gap-10">
            {/* ── My latest writing row ── */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-md">
                    <p className="text-3xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight">
                        My latest writing
                    </p>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        I write about how things actually work under the hood.
                        Whatever I&apos;m currently learning and building, so you can build better products of your own.

                    </p>
                </div>

                <div className="flex">
                    <Link
                        href={siteConfig.baseLinks.essays}
                        className="self-start flex-shrink-0 inline-flex items-center gap-2 h-9 px-6 text-[0.7rem] font-bold uppercase tracking-[0.1em] bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-80 transition-opacity"
                    >
                        All Essays
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* ── 3-column card grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentEssays.map((essay) => {
                    const tag = essay.data.tags?.[0] ?? '';
                    const formattedDate = formatDate(new Date(essay.data.date));

                    return (
                        <Link
                            key={essay.url}
                            href={essay.url}
                            className="group flex flex-col gap-4"
                        >
                            {/* Thumbnail */}
                            <div className="w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                                {essay.data.thumbnail && (
                                    <Image
                                        src={essay.data.thumbnail}
                                        alt={essay.data.title}
                                        width={1200}
                                        height={800}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </div>

                            {/* Meta + title */}
                            <div className="flex flex-col gap-1.5">
                                <p className="text-base text-neutral-400 dark:text-neutral-500">
                                    {tag && <>{tag} &bull; </>}
                                    {formattedDate}
                                </p>
                                <p className="text-lg md:text-base font-semibold leading-snug text-neutral-900 dark:text-neutral-100 group-hover:opacity-60 transition-opacity">
                                    {essay.data.title}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
