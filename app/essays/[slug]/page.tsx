import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { TableOfContents } from '@/components/table-of-contents';
import { MobileTableOfContents } from '@/components/mobile-toc';
import { AuthorCard } from '@/components/author-card';
import { ReadMoreSection } from '@/components/read-more-section';
import { PromoContent } from '@/components/promo-content';
import { getAuthor, isValidAuthor } from '@/_data/authors';
import { siteConfig } from '@/_data/site-config';
import { HashScrollHandler } from '@/components/hash-scroll-handler';
import { EssayShareButtons } from '@/components/essay-share-buttons';
import type { EssayPageData } from '@/types/essay';

export { generateMetadata } from './metadata';

interface PageProps {
    params: Promise<{ slug: string }>;
}

const mdxSource = createMDXSource(docs, meta);
const essaySource = loader({
    baseUrl: '/essays',
    source: {
        get files() {
            return (mdxSource as unknown as { files(): unknown[] }).files();
        },
    } as Parameters<typeof loader>[0]['source'],
});

const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export default async function EssayPost({ params }: PageProps) {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
        notFound();
    }

    const page = essaySource.getPage([slug]);

    if (!page) {
        notFound();
    }

    const data = page.data as EssayPageData;
    const MDX = data.body;
    const date = new Date(data.date);
    const formattedDate = formatDate(date);

    return (
        <div className="min-h-screen bg-background">
            <HashScrollHandler />

            {/* ── Hero header ── */}
            <header className="">
                <div className="max-w-5xl mx-auto px-6 pt-36 pb-10 flex flex-col gap-6">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-[0.72rem] text-neutral-400 dark:text-neutral-500">
                        <Link
                            href="/"
                            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <Link
                            href="/essays"
                            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                        >
                            Essays
                        </Link>
                    </nav>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                        {data.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        {/* Written by */}
                        <div className="flex items-center gap-2">
                            {(() => {
                                const author =
                                    data.author && isValidAuthor(data.author)
                                        ? getAuthor(data.author)
                                        : getAuthor('dillion');
                                return (
                                    <>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                                            {/* Written by{' '} */}
                                            <span className="font-medium text-foreground">
                                                {author.name}
                                            </span>
                                        </span>
                                    </>
                                );
                            })()}
                        </div>

                        <span className="text-muted-foreground/40 text-sm">·</span>

                        <time className="text-sm text-muted-foreground whitespace-nowrap">
                            {formattedDate}
                        </time>
                        {data.readTime && (
                            <>
                                <span className="text-muted-foreground/40 text-sm">·</span>
                                <span className="text-sm text-muted-foreground whitespace-nowrap">
                                    {data.readTime}
                                </span>
                            </>
                        )}
                    </div>

                    <EssayShareButtons
                        title={data.title}
                        url={`${siteConfig.url}/essays/${slug}`}
                    />

                    {/* Description */}
                    {data.description && (
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                            {data.description}
                        </p>
                    )}

                    {/* Tags */}
                    {data.tags && data.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {data.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider bg-muted text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            {/* ── Thumbnail ── */}
            {data.thumbnail && (
                <div className="max-w-5xl mx-auto px-6 pt-8">
                    <div className="relative w-full aspect-[2/1] overflow-hidden">
                        <Image
                            src={data.thumbnail}
                            alt={data.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* ── Body + sidebar ── */}
            <div className="max-w-5xl mx-auto px-6 py-10 flex gap-12 items-start">
                <main className="flex-1 min-w-0">
                    <div
                        className="
            prose dark:prose-invert max-w-none

            prose-p:text-lg md:prose-p:text-[1.0625rem] prose-p:leading-[1.8] prose-p:text-neutral-700 dark:prose-p:text-neutral-300
            prose-p:mt-0 prose-p:mb-6

            prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-neutral-900 dark:prose-headings:text-neutral-50
            prose-h2:text-[1.4rem] prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-[1.15rem] prose-h3:mt-9 prose-h3:mb-3

            prose-a:text-neutral-900 dark:prose-a:text-neutral-100 prose-a:font-medium prose-a:underline prose-a:underline-offset-[3px] prose-a:decoration-neutral-400 dark:prose-a:decoration-neutral-600 hover:prose-a:decoration-neutral-900 dark:hover:prose-a:decoration-neutral-100

            prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100 prose-strong:font-semibold

            prose-ul:my-6 prose-ul:pl-5 prose-ol:my-6 prose-ol:pl-5
            prose-li:text-lg md:prose-li:text-[1.0625rem] prose-li:leading-[1.8] prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-li:my-2

            prose-hr:border-neutral-200 dark:prose-hr:border-neutral-800 prose-hr:my-12

            prose-code:before:content-none prose-code:after:content-none
            prose-img:rounded-xl
          "
                    >
                        <MDX />
                    </div>

                    <EssayShareButtons
                        title={data.title}
                        url={`${siteConfig.url}/essays/${slug}`}
                    />

                    <div className="mt-16">
                        <ReadMoreSection
                            currentSlug={[slug]}
                            currentTags={data.tags}
                        />
                    </div>
                </main>

                <aside className="hidden lg:flex flex-col gap-6 w-64 flex-shrink-0 sticky top-24">
                    {data.author && isValidAuthor(data.author) && (
                        <AuthorCard author={getAuthor(data.author)} />
                    )}
                    <div className="border border-border bg-card p-5 max-h-[calc(100vh-8rem)] overflow-y-auto">
                        <TableOfContents />
                    </div>
                    <PromoContent variant="desktop" />
                </aside>
            </div>

            <MobileTableOfContents />
        </div>
    );
}
