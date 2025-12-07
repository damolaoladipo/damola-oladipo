"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CompanySlide {
  name: string;
  website: string;
  url: string;
  image: string;
}

const companies: CompanySlide[] = [
  {
    name: "Troott ",
    website: "www.troott.com",
    url: "https://troott.com",
    image: "./images/troott.png",
  },
  {
    name: "eLab API",
    website: "www.ennovatelab.com",
    url: "https://www.ennovatelab.com/",
    image: "./images/ennovatelab.png",
  },
  {
    name: "Pacepard",
    website: "www.pacepard.com",
    url: "https://www.pacepard.com/",
    image: "./images/pacepard.png",
  },

  {
    name: "Troott mobile app",
    website: "www.troott.com",
    url: "https://troott.com",
    image: "./images/troott-mobile.png",
  },
];

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <>
      <div id="projects" className="w-full px-6 md:py-16 relative mx-auto max-w-4xl">
        <div className="text-left mb-10">
          <h1 className="text-balance text-4xl font-semibold lg:text-5xl text-foreground mb-4">
            Project Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-md">
            Highlights of web, mobile, API projects and product experiences I've
            worked on.
          </p>
        </div>

        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-0">
          <div className="relative w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="min-w-0 shrink-0 grow-0 flex basis-2/3 ">
                {companies.map((company, index) => (
                  <CarouselItem
                    key={index}
                    className="min-w-0 shrink-0 grow-0 flex basis-2/3 pl-4"
                  >
                    <div className="glass-3 group text-card-foreground relative flex flex-col overflow-hidden rounded-xl shadow-xl transition-all bg-background/100 grow">
                      <a
                        target="_blank"
                        href={company.url}
                        rel="noopener noreferrer"
                      >
                        <div className="flex transition-opacity duration-300 opacity-100 fade-bottom-lg min-h-[250px] items-start overflow-hidden md:min-h-[400px]">
                          <div className="h-full max-h-[250px] w-full opacity-50 grayscale invert transition-transform duration-300 group-hover:scale-[1.1] group-hover:opacity-100 md:max-h-[100px] dark:opacity-70 dark:invert-0">
                            <img
                              alt={`${company.name} website`}
                              loading="lazy"
                              width="900"
                              height="600"
                              decoding="async"
                              src={company.image || "/placeholder.svg"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="glow absolute w-full top-[50%] scale-[2.5] opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                            <div className="from-brand-background/50 to-[#a3f443]/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100 -translate-y-1/2"></div>
                            <div className="from-brand-backgr/90 to-[#a3f443]/5 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100 -translate-y-1/2"></div>
                          </div>
                        </div>

                        <button className="bg-accent/50 pointer-events-none absolute right-6 bottom-6 z-10 block rounded-full p-4 hover:bg-[#a3f443] dark:hover:bg-[#a3f443]">
                          <ArrowUpRight className="size-4 " />
                        </button>

                        <div className="flex flex-col gap-2 p-6 transition-opacity duration-300 opacity-100">
                          <p className="text-muted-foreground text-sm text-balance">
                            {company.website}
                          </p>
                          <h3 className="text-lg font-semibold tracking-tight text-balance">
                            {company.name}
                          </h3>
                        </div>
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute top-full mt-6 left-4 flex gap-3 z-20 ">
              <button
                onClick={() => api?.scrollPrev()}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-200 hover:bg-[#a3f443] hover:scale-105 hover:shadow-xl cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 dark:hover:text-black" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-200 hover:bg-[#a3f443] hover:scale-105 hover:shadow-xl cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5   dark:hover:text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
