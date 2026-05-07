/**
 * Returns a valid absolute origin for metadataBase and canonical URLs.
 * Never returns empty, the literal "undefined", or other values that break `new URL()`.
 */
function getCanonicalSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof explicit === "string") {
    const trimmed = explicit.trim();
    if (trimmed && trimmed !== "undefined") {
      const candidate = trimmed.replace(/\/$/, "");
      const withProtocol = /^https?:\/\//i.test(candidate)
        ? candidate
        : `https://${candidate}`;
      try {
        return new URL(withProtocol).origin;
      } catch {
        /* fall through */
      }
    }
  }

  const vercel = process.env.VERCEL_URL;
  if (typeof vercel === "string") {
    const host = vercel.replace(/^https?:\/\//, "").trim();
    if (host && host !== "undefined") {
      try {
        return new URL(`https://${host}`).origin;
      } catch {
        /* fall through */
      }
    }
  }

  return "http://localhost:3000";
}

const siteUrl = getCanonicalSiteUrl();

export const siteConfig = {
  name: "Damola Oladipo - Growth Engineer exploring ML and NLP research.",
  author: "Damola Oladipo",
  url: siteUrl,
  description:
    "Damola is a software engineer and growth operator. I publish deeply researched pieces that simplify concepts around system design, building products, driving growth, and advancing your career.",
  ogImage: "/blocks/og.png",
  baseLinks: {
    home: "/",
    resume: "/resume",
    about: "/about",
    essays: "/essays",
    playground: "/playground",
    projects: "/projects",
    books: "/books",
    newsletter: "/newsletter",
    guides: "/guides",
    sociaLlinks: {
      twitter: "https://www.x.com/damolaoladipo",
      github: "https://github.com/damolaoladipo",
      bluesky: "https://bsky.app/profile/madebydamola.tngl.sh",
      linkedin: "https://www.linkedin.com/in/damolaoladipo",
      email: "mailto:mail@damolaoladipo.com",
    },
  },
};

/** Absolute URL for default OG/Twitter card image (`siteConfig.ogImage`). */
export function absoluteOgImageUrl(): string {
  const path = siteConfig.ogImage;
  const base = siteConfig.url.replace(/\/$/, "");
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export type siteConfig = typeof siteConfig;
