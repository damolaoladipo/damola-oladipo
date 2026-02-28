import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { Suspense } from "react";
import { ArticleCard } from "@/components/article-card";
import { TagFilter } from "@/components/tag-filter";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

interface ArticleData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  authorImage?: string;
  thumbnail?: string;
}

interface ArticlePage {
  url: string;
  data: ArticleData;
}

const mdxSource = createMDXSource(docs, meta);
const articleSource = loader({
  baseUrl: "/articles",
  source: {
    get files() {
      return mdxSource.files();
    },
  },
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function Articles({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  
  const resolvedSearchParams = await searchParams;
  const allPages = articleSource.getPages() as ArticlePage[];
  const sortedArticles = allPages.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });

  const allTags = [
    "All",
    ...Array.from(
      new Set(sortedArticles.flatMap((article) => article.data.tags || []))
    ).sort(),
  ];

  const selectedTag = resolvedSearchParams.tag || "All";
  const filteredArticles =
    selectedTag === "All"
      ? sortedArticles
      : sortedArticles.filter((article) => article.data.tags?.includes(selectedTag));

  const tagCounts = allTags.reduce((acc, tag) => {
    if (tag === "All") {
      acc[tag] = sortedArticles.length;
    } else {
      acc[tag] = sortedArticles.filter((article) =>
        article.data.tags?.includes(tag)
      ).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-0 left-0 z-0 w-full h-[200px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>
      <div className="p-6 border-b border-border flex flex-col gap-6 min-h-[250px] justify-center relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-4xl md:text-5xl tracking-tighter">
              Magic UI Articles
            </h1>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Latest news and updates from Magic UI.
            </p>
          </div>
        </div>
        {allTags.length > 0 && (
          <div className="max-w-7xl mx-auto w-full">
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              tagCounts={tagCounts}
            />
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-0">
        <Suspense fallback={<div>Loading articles...</div>}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative overflow-hidden border-x border-border ${
              filteredArticles.length < 4 ? "border-b" : "border-b-0"
            }`}
          >
            {filteredArticles.map((article) => {
              const date = new Date(article.data.date);
              const formattedDate = formatDate(date);

              return (
                <ArticleCard
                  key={article.url}
                  url={article.url}
                  title={article.data.title}
                  description={article.data.description}
                  date={formattedDate}
                  thumbnail={article.data.thumbnail}
                  showRightBorder={filteredArticles.length < 3}
                />
              );
            })}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
