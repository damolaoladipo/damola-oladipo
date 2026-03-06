import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/_data/site-config";

export default function IntroSection() {
  return (
    <section className="">
      <div className="w-full max-w-6xl mx-auto px-8 md:px-14 lg:px-20 pt-32 md:pt-48 flex flex-col gap-12 lg:gap-16">

        {/* ── Large headline ── */}
        {/* <h2 className="text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.06]">
          Product &amp; Design Engineer, exploring ML and NLP research, currently based in Nigeria.
        </h2> */}

        {/* ── Profile card + contact row ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-6">

          {/* Left: portrait photo + bio */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/blocks/damola.png"
                alt="Damola Oladipo"
                width={110}
                height={140}
                className="w-[110px] h-[140px] object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-light text-neutral-900 dark:text-neutral-100 leading-snug">
                Hey, I&apos;m Damola Oladipo
              </p>
              <p className="text-[0.75rem] text-neutral-500 dark:text-neutral-400 mt-0.5">
                Product &amp; Design Engineer
              </p>
              <p className="mt-3 text-[0.85rem] text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[280px]">
                From ideation to launch, I blend product thinking with design
                craft — helping teams build digital experiences that are
                intuitive, performant, and built to last.
              </p>
              <Link
                href={siteConfig.baseLinks.about}
                className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-900 dark:text-neutral-100 inline-flex items-center gap-1 hover:opacity-50 transition-opacity"
              >
                More about me
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right: contact + social */}
          <div className="flex flex-col gap-2 md:items-end md:text-right flex-shrink-0">
            <p className="text-[0.6rem] uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
              Let&apos;s Create Something Amazing
            </p>
            <Link
              href={siteConfig.baseLinks.sociaLlinks.email}
              className="text-[0.85rem] text-neutral-900 dark:text-neutral-100 hover:opacity-50 transition-opacity"
            >
              iam@damolaoladipo.com
            </Link>

            <p className="text-[0.6rem] uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500 mt-2">
              Social Profile:
            </p>
            <div className="flex items-center gap-2 md:justify-end">
              <Link
                href={siteConfig.baseLinks.sociaLlinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={siteConfig.baseLinks.sociaLlinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={siteConfig.baseLinks.sociaLlinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-neutral-300 dark:border-neutral-700" />

    
      </div>
    </section>
  );
}
