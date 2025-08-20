import { Container } from "@/components/containers/container";
import { Button } from "@/components/ui/button";
import {  ArrowLeftIcon } from "lucide-react";


const NotFound = () => {
  return (

    // flex flex-col justify-center items-center h-full py-16 sm:py-32
    <Container className="flex flex-col h-full justify-center items-start p-2  mt-32 py-16 sm:py-32">
      <div className="flex flex-col">
        <p className="text-base font-semibold text-neutral-400 dark:text-neutral-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a href="/" className="mt-4">
          <Button variant="secondary" className="bg-lime-400 text-neutral-950 cursor-pointer hover:bg-lime-300">
            <ArrowLeftIcon /> Go back home
          </Button>
        </a>
      </div>
    </Container>
  )
}

export default NotFound