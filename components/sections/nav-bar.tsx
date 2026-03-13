'use client';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/containers/theme-toggle';
import { Avatar } from '@/components/containers/pic-avatar';
import { siteConfig } from '@/_data/site-config';

const menuItems = [
    { name: 'Essays', href: siteConfig.baseLinks.essays },
    // { name: 'Projects', href: siteConfig.baseLinks.projects },
    // { name: 'Playground', href: siteConfig.baseLinks.playground },
    // { name: 'Books', href: siteConfig.baseLinks.books },
    // { name: 'Newsletter', href: siteConfig.baseLinks.newsletter },
    { name: 'Guides', href: siteConfig.baseLinks.guides },
    
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

    return (
        <header>
            <nav
                data-state={menuOpen ? 'active' : undefined}
                className="fixed top-0 left-0 w-full z-20"
            >
                <div
                    className={cn(
                        'mx-auto w-full px-6 transition-all duration-300',
                        isScrolled &&
                            'bg-background/80 backdrop-blur-md border-b border-border',
                        menuOpen &&
                            'lg:hidden z-20 bg-background border-b border-border',
                    )}
                >
                    <div className="flex items-center justify-between h-14">
                        {/* Logo — stays visible above overlay when menu open */}
                        <Link
                            href="/"
                            aria-label="Home"
                            className={cn(
                                'flex items-center shrink-0',
                                menuOpen && 'lg:hidden relative z-20',
                            )}
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

                {/* Mobile menu — full screen overlay */}
                <div
                    className={cn(
                        'lg:hidden fixed inset-0 z-10 bg-background flex flex-col transition-all duration-300',
                        menuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none',
                    )}
                >
                    <div className="flex flex-col justify-between h-full px-6 pt-24 pb-12">
                        <ul className="flex flex-col gap-2">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block text-4xl font-semibold tracking-tight text-foreground hover:opacity-50 transition-opacity py-2"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-6">
                            <div className="border-t border-border" />
                            <Link
                                href={siteConfig.baseLinks.sociaLlinks.email}
                                onClick={() => setMenuOpen(false)}
                                className="inline-flex items-center gap-2 h-12 px-6 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity w-fit"
                            >
                                Work with me
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

Header.displayName = 'Header';
export default Header;
