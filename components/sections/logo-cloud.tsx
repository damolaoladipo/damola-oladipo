/* eslint-disable @next/next/no-img-element */
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const LOGOS = [
    { src: './blocks/typescript.svg', alt: 'Typescript Logo' },
    { src: './blocks/go.png', alt: 'Go Logo' },
    { src: './blocks/rust.png', alt: 'Rust Logo' },
    { src: './blocks/node-js.svg', alt: 'Node.js Logo' },
    { src: './blocks/react.svg', alt: 'React Logo' },
    { src: './blocks/tailwind-css.svg', alt: 'Tailwind CSS Logo' },
    { src: './blocks/canva.svg', alt: 'Canva Logo' },
    { src: './blocks/figma.svg', alt: 'Figma Logo' },
    { src: './blocks/notion.svg', alt: 'Notion Logo' },
    { src: './blocks/mongodb.svg', alt: 'MongoDB Logo' },
    { src: './blocks/express-js.svg', alt: 'Express JS Logo' },


] as const;

function LogoImg({ src, alt }: { src: string; alt: string }) {
    return (
        <img
            className="mx-auto h-10 w-fit dark:invert"
            src={src}
            alt={alt}
            height={40}
            width="auto"
        />
    );
}

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-28 md:py-24">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col md:items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-left text-lg md:text-end md:text-sm">
                            Toolkit I build with, from concept to deployment
                        </p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 md:hidden">
                            {LOGOS.map((logo) => (
                                <div key={logo.src} className="flex shrink-0">
                                    <LogoImg {...logo} />
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:block">
                            <InfiniteSlider
                                speedOnHover={50}
                                speed={160}
                                gap={24}
                            >
                                {LOGOS.map((logo) => (
                                    <div
                                        key={logo.src}
                                        className="flex shrink-0"
                                    >
                                        <LogoImg {...logo} />
                                    </div>
                                ))}
                            </InfiniteSlider>

                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20" />
                            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20" />
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
