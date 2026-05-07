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

                {/* My
                                name is Elena Verna. I’m a growth and B2B SaaS
                                growth operator with over 15 years of experience
                                in scaling companies through product-led
                                strategies. I’ve held leadership roles at
                                companies like Lovable, Miro, SurveyMonkey,
                                Amplitude, and Dropbox, across product-led
                                growth, marketing, and analytics roles. I’ve
                                also advised dozens of companies like
                                Superhuman, Sanity, Veed, and MongoDB. I’m an
                                avid learner and Reforge lover (and course
                                creator). I write this newsletter to help you:
                                Become successful at work Pass the system design
                                interview Learn system design through simplified
                                concepts 
                                
                                 You’d enjoy this if you like long form essays on
                                startups, user growth, product development, and
                                engineering. 
                                
                                Damola is a Growth Engineer. He
                                delights in work where things are at infancy, as
                                it sets the stage to establish best practices
                                that shape the long-term outcomes we want. He is
                                a master at finding opportunities and
                                engineering implementations that help users
                                complete important tasks and brings them back
                                every day. He writes TypeScript, Go, and Rust.
                                He builds web, mobile and desktop apps. */}

                {/* Large intro paragraph */}
                <p className="text-2xl font-light text-neutral-900 dark:text-neutral-100 leading-snug py-4">
                    Hey, I&apos;m Damola Oladipo
                </p>

                <p className="text-xl md:text-2xl lg:text-[1.65rem] text-neutral-900 dark:text-neutral-200 leading-[1.45] max-w-4xl mb-4">
                    A software engineer and growth operator. I publish deeply
                    researched pieces that simplify concepts around system
                    design, building products, driving growth, and advancing
                    your career.
                </p>

                <p className="text-xl md:text-2xl lg:text-[1.65rem] text-neutral-900 dark:text-neutral-200 leading-[1.45] max-w-4xl mb-14 md:mb-20">
                    I transitioned from product management to software
                    engineering in 2024 after 5 years. I come from an arts background. If I can do it, you can too.
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
                                <p className="text-lg text-neutral-600 dark:text-neutral-200 leading-relaxed">
                                    I delight in work where things are at
                                    infancy, as it sets the stage to establish
                                    best practices that shape the long-term
                                    outcomes we want.
                                </p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-200 leading-relaxed">
                                    I&apos;m a master at finding opportunities
                                    and engineering implementations that help
                                    users complete important tasks and brings
                                    them back every day.
                                </p>

                                <p className="text-lg text-neutral-600 dark:text-neutral-200 leading-relaxed">
                                    I write TypeScript, Go, and Rust. I builds
                                    web, mobile and desktop apps.
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
