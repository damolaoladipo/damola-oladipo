import { siteConfig } from '@/_data/site-config';
import { XIcon } from '@/constantz/social-icons';
import Link from 'next/link';
import { BlueskyIcon } from './intro-section';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="mx-auto max-w-6xl w-full relative">
            <div className="  px-6 py-12 border-t border-neutral-300 dark:border-neutral-700 mt-3 pt-8 ">
                <div className="flex mt-6 flex-col md:flex-row md:flex-wrap lg:flex-row lg:justify-between gap-10 lg:gap-24">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-[#a3f443] flex items-center justify-center">
                                <span className="text-neutral-900 font-medium text-lg">
                                    d
                                </span>
                            </div>
                            <span className="text-xl font-semibold text-black dark:text-white">
                                Damola.
                            </span>
                        </div>

                        <p className="text-lg text-neutral-400 leading-relaxed max-w-lg">
                            Damola is a software engineer and growth operator. I
                            publish deeply researched pieces that simplify
                            concepts around system design, building products,
                            driving growth, and advancing your career.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                            >
                                <XIcon className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.bluesky}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                            >
                                <BlueskyIcon className="w-3.5 h-3.5" />
                            </Link>

                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                            >
                                <Linkedin className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                            >
                                <Github className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Wrapped the last two sections in a new flex div */}
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-24">
                        {/* 1 Section */}
                        <div className="space-y-4">
                            <h3 className="text-neutral-400  font-semibold">
                                Madebydamola
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/essays"
                                        className="text-lg text-neutral-400 hover:text-[#a3f443] transition-colors"
                                    >
                                        Essays
                                        <span className="ml-1.5 rounded-sm inline-flex items-center px-1.5 py-0.5 text-[10px] font-light uppercase tracking-wide bg-[#a3f443] text-neutral-900 leading-none">
                                            New
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#playground"
                                        className="text-lg text-neutral-400 hover:text-[#a3f443] transition-colors"
                                    >
                                        About me
                                    </Link>
                                </li>
                                {/* <li>
                                    <a
                                        href="#playground"
                                        className="text-lg text-neutral-400 hover:text-[#a3f443] transition-colors"
                                    >
                                        My playground
                                    </a>
                                </li> */}
                            </ul>
                        </div>

                        {/* Pages Section */}
                        <div className="space-y-4">
                            <h3 className="text-neutral-400  font-semibold">
                                Coming soon!
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-lg text-neutral-400 hover:text-[#a3f443] transition-colors"
                                    >
                                        My playground
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-lg text-neutral-400 hover:text-[#a3f443] transition-colors"
                                    >
                                        Online classes
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-lg text-neutral-400 hover:text-[#a3f443] transition-colors"
                                    >
                                        Speaking
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-lg text-neutral-400 hover:text-[#a3f443] transition-colors"
                                    >
                                        Newsletter
                                        <span className="ml-1.5 rounded-sm inline-flex items-center px-1.5 py-0.5 text-[10px] font-light uppercase tracking-wide bg-blue-100 text-neutral-900 leading-none">
                                            Coming soon
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 w-full overflow-hidden flex justify-center">
                    <span className="text-[6.2rem] md:text-[12rem] lg:text-[18.5rem] font-bold select-none leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 whitespace-nowrap">
                        Damola.
                    </span>
                </div>

                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row mt-10 md:mt32 border-t border-neutral-300 dark:border-neutral-700 pt-8">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-lg font-medium text-neutral-800 dark:text-neutral-200">
                        <p className="text-lg md:text-lg text-neutral-500">
                            {' '}
                            Made with ❤️ from Nigeria
                        </p>
                    </div>
                    <p className="text-lg md:text-lg text-neutral-500 dark:text-neutral-500">
                        &copy; {new Date().getFullYear()}{' '}
                        <a
                            href="https://github.com/damolaoladipo"
                            className=" text-neutral-400 hover:text-[#a3f443] transition-colors"
                        >
                            Damola Oladipo
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
