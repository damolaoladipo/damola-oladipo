import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { siteConfig } from '@/_data/site-config';
import type { EssayPage } from '@/types/essay';

const mdxSource = createMDXSource(docs, meta);
const essaySource = loader({
    baseUrl: '/essays',
    source: {
        get files() {
            return (mdxSource as unknown as { files(): unknown[] }).files();
        },
    } as Parameters<typeof loader>[0]['source'],
});

function escapeXml(unsafe: string): string {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function toRfc822Date(date: Date): string {
    return date.toUTCString();
}

export async function GET() {
    const baseUrl = siteConfig.url.replace(/\/$/, '');
    const allPages = essaySource.getPages() as unknown as EssayPage[];
    const sorted = [...allPages].sort(
        (a, b) =>
            new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );

    const items = sorted
        .map((page) => {
            const link = `${baseUrl}${page.url}`;
            const pubDate = toRfc822Date(new Date(page.data.date));
            const title = escapeXml(page.data.title);
            const desc = escapeXml(
                page.data.description ?? page.data.title ?? '',
            );
            return `<item>
  <title>${title}</title>
  <link>${escapeXml(link)}</link>
  <description>${desc}</description>
  <pubDate>${pubDate}</pubDate>
  <guid isPermaLink="true">${escapeXml(link)}</guid>
</item>`;
        })
        .join('\n');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} — Essays</title>
    <link>${baseUrl}/essays</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>
    <lastBuildDate>${toRfc822Date(new Date())}</lastBuildDate>
    <atom:link href="${baseUrl}/essays/feed" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
