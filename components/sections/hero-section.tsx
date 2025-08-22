import GooeyButton from "@/components/containers/gooey-button";
import { HexagonBackground } from "@/components/ui/hexagon";
import { DotIcon } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <>
    <div className="relative m-auto max-w-4xl px-6 md:px-0">
       <div className="py-36 md:py-20 lg:py-32 relative">
  
        <HexagonBackground className="bg-linear-to-b absolute inset-0 z-[-10] w-full mt-80 flex items-center justify-center rounded-xl dark:block dark:to-[color-mix(in_oklab,var(--color-neutral-900)_75%,var(--color-background))]" />
        
        <div className="flex flex-col">
          <div className="flex-1">
            <div className="flex mt-0 items-center text-sm text-neutral-700 dark:text-neutral-400">
              <DotIcon className="h-10 w-10 -ml-3" /> Hi, I’m Damola Oladipo 👋
            </div>

            <div className="max-w-[600px] mt-2">
              <h1 className="text-balance text-4xl font-semibold lg:text-5xl tracking-tight text-neutral-800 dark:text-neutral-100">
                A Product and Design Engineer exploring ML and NLP research.
              </h1>

              <div className="mt-6 flex gap-4">
                <GooeyButton variant="default" href="mailto:iam@damolaoladipo.com">
                  Start a project
                </GooeyButton>
                <GooeyButton variant="secondary" href="#playground">
                  My playground
                </GooeyButton>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>

      <div className="mt-32 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-16 md:gap-24 lg:gap-36 xl:gap-72">
        <div className="flex items-center pt-1 text-sm text-neutral-700 dark:text-neutral-400 whitespace-nowrap">
          <DotIcon className="h-10 w-10 -ml-4 align-middle inline-block" />
          Who I am
        </div>

        <p className="text-balance text-3xl leading-relaxed font-medium sm:text-3xl text-neutral-800 dark:text-neutral-200">
          I build products with useful features that help people get important
          things done everday. My work is across scalable modular monolithic and
          microservice applications. My curiosity keeps me going.
        </p>
      </div>


    </div>
     
    </>
  );
}

export default HeroSection;
