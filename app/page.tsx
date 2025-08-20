import { Container } from "@/components/containers/container";
import GooeyButton from "@/components/containers/gooey-button";
import Header from "@/components/containers/nav-bar";

import { DotIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <Header />

      <Container className="">
        <div className="flex mt-24 items-center text-sm text-neutral-700 dark:text-neutral-400">
          <DotIcon className="h-10 w-10 -ml-3" /> Hi, I’m Damola Oladipo 👋
        </div>

        <div className="max-w-[600px] mt-2">
          <h1 className="text-4xl font-bold sm:text-4xl tracking-tight text-neutral-800  dark:text-neutral-100">
            A Product and Design Engineer exploring ML and NLP research.
          </h1>

          <div className="mt-6 flex gap-4">
            <GooeyButton variant="default" href="#">
              My playground
            </GooeyButton>

            <GooeyButton variant="secondary" href="#">
              About me
            </GooeyButton>
          </div>
        </div>

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
      </Container>
    </>
  );
};

export default Home;
