import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import React from "react";
import Image from "next/image";
import {
  MediaViewer,
  ImageViewer,
  VideoViewer,
} from "@/components/media-viewer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AuthorCard } from "@/components/author-card";
import { getAuthor, type AuthorKey } from "@/_data/authors";
import { CopyHeader } from "@/components/copy-header";
import { CopyButton } from "@/components/copy-button";

/* ── Custom heading with copy-link support ── */
const createHeading = (level: number) => {
  const Heading = ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <CopyHeader level={level} {...props}>
      {children as React.ReactNode}
    </CopyHeader>
  );
  Heading.displayName = `Heading${level}`;
  return Heading;
};

/* ── Recursively extract plain text from React nodes (for copy button) ── */
function extractText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node) && node.props) {
    return extractText((node.props as { children?: React.ReactNode }).children);
  }
  return "";
}

/* ── Code block (pre) — matches Figma design ── */
function Pre({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement> & {
  "data-language"?: string;
  "data-meta"?: string;
}) {
  const language = props["data-language"] ?? "";
  const meta = props["data-meta"] ?? "";
  const filenameMatch = meta.match(/filename="([^"]+)"/);
  const label = filenameMatch ? filenameMatch[1] : language;
  const code = extractText(children);

  return (
    <div className="not-prose my-8  overflow-hidden border border-neutral-200 dark:border-neutral-800">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#161b22]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 dark:bg-neutral-400 flex-shrink-0" />
          {label && (
            <span className="text-[0.7rem] font-mono text-neutral-500 dark:text-neutral-400 select-none">
              {label}
            </span>
          )}
        </div>
        <CopyButton code={code} />
      </div>

      {/* Code body — bg matches github-light (#fff) / github-dark (#0d1117) */}
      <pre
        {...props}
        className="overflow-x-auto py-4 m-0 px-4 bg-white dark:bg-[#0d1117] text-[0.82rem]"
        style={{ tabSize: 2 }}
      >
        {children}
      </pre>
    </div>
  );
}

/* ── Inline code ── */
function InlineCode({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      {...props}
      className="px-1.5 py-0.5 text-neutral-800 dark:text-neutral-200 text-[0.85em] font-mono before:content-none after:content-none"
    >
      {children}
    </code>
  );
}

/* ── Table ── */
function Table({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="my-6 w-full overflow-x-auto border border-border">
      <table {...props} className="w-full text-sm">
        {children}
      </table>
    </div>
  );
}

function Th({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      {...props}
      className="px-4 py-3 text-left text-[0.72rem] font-semibold uppercase tracking-wider text-muted-foreground bg-muted/60 border-b border-border"
    >
      {children}
    </th>
  );
}

function Td({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      {...props}
      className="px-4 py-3 text-foreground/80 border-b border-border last:border-0 align-top"
    >
      {children}
    </td>
  );
}

/* ── Paragraph ── */
function P({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className="text-[1.0625rem] leading-[1.8] text-neutral-700 dark:text-neutral-300 mb-6 mt-0"
    >
      {children}
    </p>
  );
}

/* ── Lists ── */
function Ul({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul {...props} className="my-6 pl-5 space-y-2 list-disc marker:text-neutral-400">
      {children}
    </ul>
  );
}

function Ol({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol {...props} className="my-6 pl-5 space-y-2 list-decimal marker:text-neutral-400">
      {children}
    </ol>
  );
}

function Li({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li {...props} className="text-[1.0625rem] leading-[1.8] text-neutral-700 dark:text-neutral-300 pl-1">
      {children}
    </li>
  );
}

/* ── Image ──
   fumadocs-mdx uses rehype-mdx-import-media which converts image paths to
   static imports. The `src` prop arrives as a StaticImageData object
   { src, width, height } rather than a plain string. We unwrap it. */
function Img({
  src,
  alt,
  width,
  height,
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  type StaticImageData = { src: string; width: number; height: number };
  const resolved: StaticImageData | null =
    typeof src === "string"
      ? { src, width: Number(width) || 0, height: Number(height) || 0 }
      : src
      ? (src as unknown as StaticImageData)
      : null;

  if (!resolved?.src) return null;

  return (
    <Image
      src={resolved.src}
      alt={alt ?? ""}
      width={resolved.width || 1200}
      height={resolved.height || 630}
      className="w-full border border-neutral-200 dark:border-neutral-800 my-8 h-auto"
    />
  );
}

/* ── Horizontal rule ── */
function Hr(props: React.HTMLAttributes<HTMLHRElement>) {
  return <hr {...props} className="my-12 border-0 border-t border-neutral-200 dark:border-neutral-800" />;
}

/* ── Blockquote ── */
function Blockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      {...props}
      className="my-8 pl-5 border-l-2 border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 not-italic leading-[1.8]"
    >
      {children}
    </blockquote>
  );
}

/* ── Author MDX component ── */
interface AuthorProps {
  id: AuthorKey;
}
function Author({ id }: AuthorProps) {
  const author = getAuthor(id);
  return <AuthorCard author={author} className="my-8" />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    MediaViewer,
    ImageViewer,
    VideoViewer,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Author,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    pre: Pre,
    code: InlineCode,
    img: Img,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    hr: Hr,
    table: Table,
    th: Th,
    td: Td,
    blockquote: Blockquote,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
