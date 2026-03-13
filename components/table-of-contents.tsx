'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    className?: string;
    /** Re-run heading detection after this delay (ms). Use when mounting inside a drawer so DOM is ready. */
    refreshDelay?: number;
}

function isInFootnotes(element: Element | null): boolean {
    if (!element) return false;
    return !!(
        element.closest('.footnotes') ||
        element.closest('[class*="footnote"]')
    );
}

function isFootnoteHeading(element: Element): boolean {
    if (element.closest('.footnotes')) return true;
    if (element.closest('[class*="footnote"]')) return true;
    const id = element.id.toLowerCase();
    if (id === 'footnotes') return true;
    if (id.startsWith('fn-') || id.startsWith('user-content-fn')) return true;
    return false;
}

/** Returns the viewport top of the heading for active detection, or Infinity if in footnotes (so it is never selected). */
function getHeadingTop(id: string): number {
    const el = document.getElementById(id);
    if (!el) return Infinity;
    if (isInFootnotes(el)) return Infinity;
    return el.getBoundingClientRect().top;
}

function getHeadingsFromDOM(): Heading[] {
    const headingElements = document.querySelectorAll('h1, h2');
    const headingsArray: Heading[] = [];

    headingElements.forEach((element) => {
        if (!element.id) return;
        if (isFootnoteHeading(element)) return;
        headingsArray.push({
            id: element.id,
            text: element.textContent || '',
            level: parseInt(element.tagName.charAt(1)),
        });
    });

    return headingsArray;
}

export function TableOfContents({
    className,
    refreshDelay = 150,
}: TableOfContentsProps) {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        setHeadings(getHeadingsFromDOM());
    }, []);

    useEffect(() => {
        if (refreshDelay <= 0) return;
        const t = setTimeout(() => {
            const next = getHeadingsFromDOM();
            setHeadings((prev) => (next.length > 0 ? next : prev));
        }, refreshDelay);
        return () => clearTimeout(t);
    }, [refreshDelay]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            () => {
                const headingPositions = headings.map((heading) => ({
                    id: heading.id,
                    top: getHeadingTop(heading.id),
                }));

                let activeHeading = headingPositions.find(
                    (heading) => heading.top >= 0 && heading.top <= 100,
                );

                if (!activeHeading) {
                    const headingsAbove = headingPositions
                        .filter((heading) => heading.top < 0)
                        .sort((a, b) => b.top - a.top);

                    activeHeading = headingsAbove[0];
                }

                if (!activeHeading) {
                    const headingsBelow = headingPositions
                        .filter((heading) => heading.top > 100)
                        .sort((a, b) => a.top - b.top);

                    activeHeading = headingsBelow[0];
                }

                if (activeHeading && activeHeading.id !== activeId) {
                    setActiveId(activeHeading.id);
                }
            },
            {
                root: null,
                rootMargin: '-100px',
                threshold: 0,
            },
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        const handleScroll = () => {
            const headingPositions = headings.map((heading) => ({
                id: heading.id,
                top: getHeadingTop(heading.id),
            }));

            let activeHeading = headingPositions.find(
                (heading) => heading.top >= -50 && heading.top <= 100,
            );

            if (!activeHeading) {
                const headingsAbove = headingPositions
                    .filter((heading) => heading.top < -50)
                    .sort((a, b) => b.top - a.top);

                activeHeading = headingsAbove[0];
            }

            if (activeHeading && activeHeading.id !== activeId) {
                setActiveId(activeHeading.id);
            }
        };

        let scrollTimeout: NodeJS.Timeout;
        const throttledScroll = () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleScroll, 10);
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });

        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', throttledScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [headings, activeId]);

    const handleClick = async (id: string) => {
        const url = `${window.location.origin}${window.location.pathname}#${id}`;

        window.history.pushState({}, '', `#${id}`);

        try {
            await navigator.clipboard.writeText(url);
        } catch (err) {
            console.error(err);
            const textArea = document.createElement('textarea');
            textArea.value = url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }

        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={cn('space-y-2', className)}>
            <h4 className="text-sm font-semibold text-foreground mb-4">
                On this page
            </h4>
            {headings.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                    No sections in this essay.
                </p>
            ) : (
                <nav>
                    <ul className="space-y-2">
                        {headings.map((heading) => (
                            <li key={heading.id}>
                                <button
                                    onClick={() => handleClick(heading.id)}
                                    className={cn(
                                        'block w-full text-left text-sm transition-colors hover:text-foreground text-muted-foreground',
                                        {
                                            'text-primary font-medium underline underline-offset-4':
                                                activeId === heading.id,
                                        },
                                    )}
                                >
                                    {heading.text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
