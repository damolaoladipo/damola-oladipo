const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL as string;

export const siteConfig = {
  name: "Damola Oladipo - Product and Design Engineer exploring ML and NLP research.",
  author: "Damola Oladipo",
  url: siteUrl,
  description:
    "Damola is product and design engineer from Nigeria. I design and build beautiful, intuitive, and responsive web and mobile applications. Let’s work together.",
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

export type siteConfig = typeof siteConfig;
