import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EssayCard } from "@/components/essay-card";
import type { EssayPage } from "@/types/essay";

const mdxSource = createMDXSource(docs, meta);
const essaySource = loader({
  baseUrl: "/essays",
  source: {
    get files() {
      return (mdxSource as unknown as { files(): unknown[] }).files();
    },
  } as Parameters<typeof loader>[0]["source"],
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function EssaysPreview() {
  const allPages = essaySource.getPages() as unknown as EssayPage[];
  const recentEssays = allPages
    .sort((a, b) => {
      const dateA = new Date(a.data.date).getTime();
      const dateB = new Date(b.data.date).getTime();
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <div className="max-w-[824px] mx-auto w-full px-6 py-16 md:py-24">

      {/* Heading row */}
      <div className="flex items-end justify-between gap-4 mb-0">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Writing
        </h2>
        <Link
          href="/essays"
          className="inline-flex items-center gap-2 h-[38px] px-5 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Read all essays
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-0">
        {recentEssays.map((essay) => {
          const formattedDate = formatDate(new Date(essay.data.date));
          return (
            <EssayCard
              key={essay.url}
              url={essay.url}
              title={essay.data.title}
              description={essay.data.description ?? ""}
              date={formattedDate}
              thumbnail={essay.data.thumbnail}
              readTime={essay.data.readTime}
            />
          );
        })}
      </div>
    </div>
  );
}
