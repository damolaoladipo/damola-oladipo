/* eslint-disable @next/next/no-img-element */
import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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

const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

interface ReadMoreSectionProps {
    currentSlug: string[];
    currentTags?: string[];
}

export function ReadMoreSection({
    currentSlug,
    currentTags = [],
}: ReadMoreSectionProps) {
    const allPages = essaySource.getPages() as unknown as EssayPage[];

    const currentUrl = `/essays/${currentSlug.join('/')}`;

    const otherPosts = allPages
        .filter((page) => page.url !== currentUrl)
        .map((page) => {
            const tagOverlap = currentTags.filter((tag) =>
                page.data.tags?.includes(tag),
            ).length;

            return {
                ...page,
                relevanceScore: tagOverlap,
                date: new Date(page.data.date),
            };
        })
        .sort((a, b) => {
            if (a.relevanceScore !== b.relevanceScore) {
                return b.relevanceScore - a.relevanceScore;
            }
            return b.date.getTime() - a.date.getTime();
        })
        .slice(0, 3);

    if (otherPosts.length === 0) {
        return null;
    }

    return (
        <section className="py-12">
            {/* Header row */}
            <div className="flex items-center justify-between gap-4 mb-8">
                <h2 className="text-[1.4rem] font-semibold text-foreground">
                    More essays
                </h2>
                <Link
                    href={siteConfig.baseLinks.essays}
                    className="inline-flex items-center gap-1 text-[1.0625rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    View all
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post) => {
                    const formattedDate = formatDate(post.date);
                    const tag = post.data.tags?.[0] ?? '';

                    return (
                        <Link
                            key={post.url}
                            href={post.url}
                            className="group flex flex-col gap-3"
                        >
                            {post.data.thumbnail && (
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
                                    <img
                                        src={post.data.thumbnail}
                                        alt={post.data.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col gap-1.5">
                                <p className="text-lg md:text-sm text-muted-foreground">
                                    {tag && <>{tag} &bull; </>}
                                    {formattedDate}
                                </p>
                                <h3 className="text-[1.0625rem] font-semibold text-foreground leading-snug group-hover:opacity-60 transition-opacity line-clamp-2">
                                    {post.data.title}
                                </h3>
                                {post.data.description && (
                                    <p className="text-[1.0625rem] text-muted-foreground line-clamp-2 leading-[1.8]">
                                        {post.data.description}
                                    </p>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
