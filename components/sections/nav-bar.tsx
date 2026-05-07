'use client';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/containers/theme-toggle';
import { Avatar } from '@/components/containers/pic-avatar';
import { siteConfig } from '@/_data/site-config';

function XIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn('shrink-0', className)}
            aria-hidden
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function BlueskyIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn('shrink-0', className)}
            aria-hidden
        >
            <path d="M5.34 4.5c2.18 1.64 4.52 4.96 5.66 7.22 1.14-2.26 3.48-5.58 5.66-7.22 1.58-1.19 4.14-2.1 4.14.82 0 .58-.33 4.9-.53 5.6-.69 2.44-3.2 3.07-5.43 2.69 3.89.66 4.88 2.84 2.75 5.02-4.05 4.15-5.82-1.04-6.27-2.37-.08-.24-.12-.35-.12-.25 0-.1-.04.01-.12.25-.45 1.33-2.22 6.52-6.27 2.37-2.13-2.18-1.14-4.36 2.75-5.02-2.23.38-4.74-.25-5.43-2.69-.2-.7-.53-5.02-.53-5.6 0-2.92 2.56-2.01 4.14-.82z" />
        </svg>
    );
}

const menuItems = [
    { name: 'Essays', href: siteConfig.baseLinks.essays },
    // { name: 'Projects', href: siteConfig.baseLinks.projects },
    // { name: 'Playground', href: siteConfig.baseLinks.playground },
    // { name: 'Books', href: siteConfig.baseLinks.books },
    // { name: 'Newsletter', href: siteConfig.baseLinks.newsletter },
    // { name: 'Guides', href: siteConfig.baseLinks.guides },
    //{ name: 'Projects', href: siteConfig.baseLinks.projects },
    { name: 'About', href: siteConfig.baseLinks.about },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setMenuOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        window.dispatchEvent(
            new CustomEvent('mobilemenuchange', { detail: { open: menuOpen } }),
        );
    }, [menuOpen]);

    React.useEffect(() => {
        if (!menuOpen) return;
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [menuOpen]);

    React.useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <header>
            <nav
                data-state={menuOpen ? 'active' : undefined}
                className="fixed top-0 left-0 w-full z-20"
            >
                <div
                    className={cn(
                        'mx-auto w-full px-3 lg:px-6 transition-all duration-300',
                        'lg:z-auto z-20',
                        isScrolled &&
                            'bg-background/80 backdrop-blur-md border-b border-border',
                        menuOpen &&
                            'lg:hidden bg-background border-b border-border',
                    )}
                >
                    <div className="flex items-center justify-between h-14">
                        {/* Logo — always above overlay on mobile */}
                        <Link
                            href="/"
                            aria-label="Home"
                            className="flex items-center shrink-0 relative z-20"
                        >
                            <Avatar />
                        </Link>

                        {/* Desktop right side */}
                        <div className="hidden lg:flex items-center gap-6">
                            <ul className="flex items-center gap-6">
                                {menuItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors duration-150"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <ThemeToggle />

                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.email}
                                className="inline-flex items-center gap-2 justify-center h-[38px] px-5 text-base font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
                            >
                                Work with me
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Mobile right side */}
                        <div className="flex items-center gap-3 lg:hidden">
                            <ThemeToggle />
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label={
                                    menuOpen ? 'Close menu' : 'Open menu'
                                }
                                className="relative z-20 p-1 cursor-pointer text-foreground"
                            >
                                <Menu
                                    className={cn(
                                        'size-6 transition-all duration-200',
                                        menuOpen &&
                                            'rotate-180 scale-0 opacity-0 absolute',
                                    )}
                                />
                                <X
                                    className={cn(
                                        'size-6 transition-all duration-200',
                                        !menuOpen &&
                                            '-rotate-180 scale-0 opacity-0 absolute',
                                    )}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu — full screen overlay; click backdrop to close */}
                <div
                    aria-hidden={!menuOpen}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                        'lg:hidden fixed inset-0 z-10 bg-background flex flex-col transition-all duration-300',
                        menuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none',
                    )}
                >
                    <div
                        className="flex flex-col h-full px-6 pt-24 pb-12 gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col gap-2">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block text-4xl font-semibold tracking-tight text-foreground hover:opacity-70 active:opacity-50 transition-opacity py-2 rounded-lg active:scale-[0.98]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-left">
                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.email}
                                onClick={() => setMenuOpen(false)}
                                className="inline-flex items-center gap-2 h-12 px-6 text-sm font-medium bg-foreground text-background hover:opacity-90 active:opacity-80 transition-opacity active:scale-[0.98]"
                            >
                                Work with me
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-6 mt-auto">
                            <span className="text-lg font-medium text-foreground/80 -mb-4">
                                @damola - simplyfing systems design
                            </span>

                            <div className="border-t border-border" />

                            <div className="flex flex-wrap items-center -mt-4 gap-1">
                                <span className="text-lg font-medium text-foreground/80 pr-2">
                                    Follow me:
                                </span>
                                <Link
                                    href={
                                        siteConfig.baseLinks.sociaLlinks.twitter
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                                    aria-label="X"
                                >
                                    <XIcon className="w-3.5 h-3.5" />
                                </Link>
                                <Link
                                    href={
                                        siteConfig.baseLinks.sociaLlinks
                                            .bluesky
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                                    aria-label="Bluesky"
                                >
                                    <BlueskyIcon className="w-3.5 h-3.5" />
                                </Link>
                                <Link
                                    href={
                                        siteConfig.baseLinks.sociaLlinks
                                            .linkedin
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-3.5 h-3.5" />
                                </Link>
                                <Link
                                    href={
                                        siteConfig.baseLinks.sociaLlinks.github
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/20 dark:hover:bg-neutral-100/20 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

Header.displayName = 'Header';
export default Header;
