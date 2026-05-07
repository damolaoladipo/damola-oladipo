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
    date,
    thumbnail,
    readTime,
}: EssayCardProps) {
    return (
        <Link
            href={url}
            className="group flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6 md:gap-8 py-6 border-b border-border transition-colors"
        >
    

            <div className="flex flex-col justify-between flex-1 min-w-0">
                <div className="flex flex-col gap-2">
                    <p className="text-xs text-muted-foreground">{date}</p>
                    <h3 className="font-semibold text-base md:text-lg text-foreground group-hover:underline underline-offset-4 leading-snug">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-lg md:text-sm line-clamp-2 md:line-clamp-3 leading-relaxed">
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

            {thumbnail && (
                <div className="flex-shrink-0 w-full sm:w-52 md:w-64 overflow-hidden bg-muted rounded-xs">
                    <Image
                        src={thumbnail}
                        alt={title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 13rem, 16rem"
                    />
                </div>
            )}
        </Link>
    );
}
