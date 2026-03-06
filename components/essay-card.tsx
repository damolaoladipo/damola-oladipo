import Link from 'next/link';
import Image from 'next/image';

interface EssayCardProps {
    url: string;
    title: string;
    description: string;
    date: string;
    thumbnail?: string;
    readTime?: string;
}

export function EssayCard({
    url,
    title,
    description,
    thumbnail,
    readTime,
}: EssayCardProps) {
    return (
        <Link
            href={url}
            className="group flex gap-5 md:gap-8 py-6 border-b border-border transition-colors"
        >
            {thumbnail && (
                <div className="relative flex-shrink-0 w-24 h-24 md:w-36 md:h-36 overflow-hidden bg-muted">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 144px"
                    />
                </div>
            )}

            <div className="flex flex-col justify-between flex-1 min-w-0">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-base md:text-lg text-foreground group-hover:underline underline-offset-4 leading-snug">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 md:line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex items-center gap-3 mt-4">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium border border-border bg-background group-hover:bg-muted transition-colors">
                        Read essay
                    </span>
                    {readTime && (
                        <span className="text-xs text-muted-foreground">
                            {readTime}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
