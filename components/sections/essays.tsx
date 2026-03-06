import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { Suspense } from "react";
import { EssayCard } from "@/components/essay-card";
import { TagFilter } from "@/components/tag-filter";
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

export default async function Essays({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const allPages = essaySource.getPages() as unknown as EssayPage[];
  const sortedEssays = allPages.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });

  const allTags = [
    "All",
    ...Array.from(
      new Set(sortedEssays.flatMap((essay) => essay.data.tags || []))
    ).sort(),
  ];

  const selectedTag = resolvedSearchParams.tag || "All";
  const filteredEssays =
    selectedTag === "All"
      ? sortedEssays
      : sortedEssays.filter((essay) =>
          essay.data.tags?.includes(selectedTag)
        );

  const tagCounts = allTags.reduce(
    (acc, tag) => {
      if (tag === "All") {
        acc[tag] = sortedEssays.length;
      } else {
        acc[tag] = sortedEssays.filter((essay) =>
          essay.data.tags?.includes(tag)
        ).length;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto w-full px-6 py-24 md:py-36">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-3xl md:text-4xl tracking-tight text-foreground">
                Essays
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Essays, tips, and tutorials on design engineering,
                React, and building great products.
              </p>
            </div>
          </div>

          {allTags.length > 0 && (
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              tagCounts={tagCounts}
            />
          )}

          <Suspense fallback={<div className="text-muted-foreground text-sm">Loading essays...</div>}>
            <div className="flex flex-col">
              {filteredEssays.map((essay) => {
                const date = new Date(essay.data.date);
                const formattedDate = formatDate(date);

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
          </Suspense>
        </div>
      </div>
    </div>
  );
}
