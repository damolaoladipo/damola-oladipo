import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
    return (
        <section className=" dark:bg-neutral-900 min-h-screen">
            <div className="max-w-6xl mx-auto px-8 md:px-14 lg:px-20 pt-32 md:pt-40 pb-20">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-[0.72rem] text-neutral-400 dark:text-neutral-500 mb-12 md:mb-16">
                    <Link
                        href="/"
                        className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                        About
                    </span>
                </nav>

                {/* Large intro paragraph */}
                <p className="text-xl md:text-2xl lg:text-[1.65rem] font-medium text-neutral-900 dark:text-neutral-100 leading-[1.45] max-w-4xl mb-14 md:mb-20">
                    Hello, I am Damola, a product and design engineer based in
                    Nigeria. I have a deep passion for all aspects of digital
                    product design and engineering. I take pleasure in
                    collaborating with teams and like-minded individuals who are
                    driven to tackle challenges through the creation of stunning
                    designs and exceptional experiences.
                </p>

                {/* Image + content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-4">
                    {/* Left: tall portrait photo */}
                    <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:min-h-[600px] overflow-hidden">
                        <Image
                            src="/blocks/damola.png"
                            alt="Damola Oladipo"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            priority
                        />
                    </div>

                    {/* Right: stacked rows */}
                    <div className="flex flex-col gap-4">
                        {/* Top row: small image + text */}
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-4 flex-1">
                            {/* Top-right image */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-auto overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                                <Image
                                    src="/blocks/dml.png"
                                    alt="Project"
                                    fill
                                    className="object-cover object-[center_5%] md:object-center"
                                    sizes="(max-width: 640px) 100vw, 20vw"
                                />
                            </div>

                            {/* Text block */}
                            <div className="flex flex-col justify-center gap-5 py-2">
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    I&apos;m passionate about designing and
                                    building memorable digital experiences. 
                                    digital products that solve real problems.
                                </p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    I&apos;m able to work on projects from the
                                    very first research &amp; design stages all
                                    the way to pushing it live.
                                </p>
                            </div>
                        </div>

                        {/* Bottom row: wide photo */}
                        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden  bg-neutral-200 dark:bg-neutral-800">
                            <Image
                                src="/blocks/nn.png"
                                alt="Work"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 58vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
