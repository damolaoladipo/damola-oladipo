// source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
import remarkGfm from "remark-gfm";
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    providerImportSource: "@/mdx-components",
    remarkPlugins: [remarkGfm]
  }
});
var { docs, meta } = defineDocs({
  dir: "essays/content",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().optional().default(false),
      readTime: z.string().optional(),
      author: z.string().optional(),
      thumbnail: z.string().optional()
    })
  }
});
export {
  source_config_default as default,
  docs,
  meta
};
