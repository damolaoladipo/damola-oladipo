import type { ComponentType } from "react";

/** Essay frontmatter + body as returned by the essays source (fumadocs-mdx). */
export interface EssayPageData {
  title: string;
  description?: string;
  body: ComponentType;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  thumbnail?: string;
}

export interface EssayPage {
  url: string;
  data: EssayPageData;
}
