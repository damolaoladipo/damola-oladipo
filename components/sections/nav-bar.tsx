"use client";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import GooeyButton from "@/components/containers/gooey-button";
import ThemeToggle from "@/components/containers/theme-toggle";
import { Avatar } from "@/components/containers/pic-avatar";

const menuItems = [
  { name: "My Playground", href: "#link" },
  { name: "View my resume", href: "#link" },
  { name: "Articles", href: "#link" },
];

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed top-0 left-0 w-full z-20 px-4 "
      >
        
        <div
          className={cn(
            "mx-auto mt-4 md:mt-2 max-w-6xl px-0 sm:px-4  transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl p- rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative left-0 flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 lg:flex-nowrap">
            <div className="flex left-0 w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center left-0"
              >
                <Avatar />
              </Link>

              <div className="flex items-center space-x-2 lg:hidden">
                <ThemeToggle className="relative z-20 block cursor-pointer " />
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-8 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-8 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
            </div>

            <div className="absolute inset-y-0 left-48 m-auto hidden size-fit lg:block ">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-start justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-0 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-start">
                
                <div className="flex items-center gap-2 ">

                  <div className="lg:flex relative z-20 cursor-pointer hidden">
                    <ThemeToggle />  
                  </div>
                              
                  <GooeyButton
                    variant="secondary"
                    href="#"
                    className={cn(isScrolled && "lg:hidden")}
                  >
                    My playground
                  </GooeyButton>
                  <GooeyButton
                    variant="default"
                    href="#"
                    className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                  >
                    Start a project
                  </GooeyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.displayName = "Header";
export default Header;
