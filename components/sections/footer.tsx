import { GitHubIcon, LinkedInIcon, XIcon } from "@/constants/social-icons";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-neutral-800 mt-36 pt-8 ">
        <div className="flex mt-6 flex-col md:flex-row md:flex-wrap lg:flex-row lg:justify-between gap-10 lg:gap-24">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#a3f443] rounded-lg flex items-center justify-center">
                <span className="text-neutral-900 font-medium text-lg">d</span>
              </div>
              <span className="text-xl font-semibold text-white">Damola.</span>
            </div>
{/* 
            Interview Coder is a desktop
              app designed to help job seekers ace technical interviews by
              providing real-time assistance with coding questions. */}

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Damola is product and design engineer from Nigeria. I design and build beautiful, intuitive, and responsive web and mobile applications. Let’s work together.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 bg-neutral-800 dark:bg-neutral-500 hover:bg-[#a3f443] dark:hover:bg-[#a3f443] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <XIcon className="w-4 h-6" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-neutral-800 dark:bg-neutral-500 hover:bg-[#a3f443] dark:hover:bg-[#a3f443] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-neutral-800 dark:bg-neutral-500 hover:bg-[#a3f443] dark:hover:bg-[#a3f443] rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Wrapped the last two sections in a new flex div */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-24">
            {/* 1 Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Madebydamola</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                  >
                    View my resume
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                  >
                    My playground
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                  >
                    My studio
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Coming soon!</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                  >
                    Online classes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                  >
                    Speaking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <span className="text-[6.2rem] md:text-[12rem] lg:text-[20.5rem] font-bold select-none leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
            Damola.
          </span>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row mt-10 md:mt32 border-t border-neutral-800 pt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <p className="text-sm text-neutral-500">
              {" "}
              Made with ❤️ from Nigeria
            </p>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/damolaoladipo"
              className=" text-neutral-400 hover:text-[#a3f443] transition-colors"
            >
              Damola Oladipo
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
