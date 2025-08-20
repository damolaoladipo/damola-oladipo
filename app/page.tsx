import { Container } from "@/components/containers/container";
import GooeyButton from "@/components/containers/gooey-button";
import LogoCloud from "@/components/containers/logo-cloud";
import Header from "@/components/containers/nav-bar";
import { HexagonBackground } from "@/components/ui/hexagon";

import { DotIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <Header />

      <Container className="">


        <div className="relative ">
          <HexagonBackground className="absolute inset-0 z-[-10] w-full mt-50 flex items-center justify-center rounded-xl" />
          <div className="flex flex-row">
            <div className="flex-1">
              <div className="flex mt-32 items-center text-sm text-neutral-700 dark:text-neutral-400">
                <DotIcon className="h-10 w-10 -ml-3" /> Hi, I’m Damola Oladipo
                👋
              </div>

              <div className="max-w-[600px] mt-2">
                <h1 className="text-4xl font-bold sm:text-4xl tracking-tight text-neutral-800 dark:text-neutral-100">
                  A Product and Design Engineer exploring ML and NLP research.
                </h1>

                <div className="mt-6 flex gap-4 mb-36">
                  <GooeyButton variant="default" href="#">
                    My playground
                  </GooeyButton>
                  <GooeyButton variant="secondary" href="#">
                    About me
                  </GooeyButton>
                </div>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>

        {/* 
        <div className="flex flex-row">
         <div className="">
           <div className="flex mt-32 items-center text-sm text-neutral-700 dark:text-neutral-400">
          <DotIcon className="h-10 w-10 -ml-3" /> Hi, I’m Damola Oladipo 👋
        </div>

          <div className="max-w-[600px] mt-2">
          <h1 className="text-4xl font-bold sm:text-4xl tracking-tight text-neutral-800  dark:text-neutral-100">
            A Product and Design Engineer exploring ML and NLP research.
          </h1>

          <div className="mt-6 flex gap-4 mb-16">
            <GooeyButton variant="default" href="#">
              My playground
            </GooeyButton>

            <GooeyButton variant="secondary" href="#">
              About me
            </GooeyButton>
          </div>
        </div>
         </div>

         <div className="flex-1 mt-36">
          <HexagonBackground className="h-60 inset-0 flex items-center justify-center rounded-xl"/>
         </div>
        </div>

        <HexagonBackground className="h-120 inset-0 flex items-center justify-center rounded-xl"/> */}

        <div className="mt-32 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-16 md:gap-24 lg:gap-36 xl:gap-72">
          <div className="flex items-center pt-1 text-sm text-neutral-700 dark:text-neutral-400 whitespace-nowrap">
            <DotIcon className="h-10 w-10 -ml-4 align-middle inline-block" />
            Who I am?
          </div>

          <p className="text-3xl leading-relaxed font-medium sm:text-3xl text-neutral-800 dark:text-neutral-200">
            I build products with useful features that help people get important
            things done. My work is across scalable modular monolithic and
            microservice applications. My curiosity keeps me learning every,
            day.
          </p>
        </div>

        <div className="div">
          <LogoCloud />
        </div>
      </Container>
    </>
  );
};

export default Home;
