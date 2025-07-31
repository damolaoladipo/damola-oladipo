import Link from "next/link";
import { ContainerInner, ContainerOuter } from "./Container";
import { INavlink } from "@/utils/interfaces";

const NavLink = (data: INavlink) => {
  
    const { href, children } = data;
  
    return (
    <Link
      href={href}
      className="transition hover:text-lime-500 dark:hover:text-lime-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      
      <ContainerOuter>
        <div className="border-t border-neutral-100 pt-10 pb-16 dark:border-neutral-700/40">
          <ContainerInner>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                <NavLink href="https://studio.damolaoladipo.com/">
                  Tools
                </NavLink>
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-400">
                &copy; {new Date().getFullYear()} Damola Oladipo. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
