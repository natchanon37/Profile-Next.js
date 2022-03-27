import React, { useEffect, useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const genericHamburgerLine = `h-1 w-4 my-[1px] rounded-full bg-black dark:bg-white transition ease transform duration-300`;
  const BottonStyle = `px-3 py-2 text-lg duration-200 transition-all font-SerifPro font-semibold text-gray-800 cursor-pointer dark:text-white hover:border-b-2 hover:border-zinc-800 dark:hover:border-white`;

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      <nav className="fixed w-screen dark:bg-[#181818] bg-slate-300 z-50 ">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <Link
                    activeClass="index"
                    to="index"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`${BottonStyle} `}
                  >
                    Home
                  </Link>

                  <Link
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`${BottonStyle} `}
                  >
                    About
                  </Link>

                  <Link
                    activeClass="skill"
                    to="skill"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`${BottonStyle} `}
                  >
                    Skill
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-center font-semibold dark:border-[1px] dark:border-slate-400 w-9 h-9 left-3 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="flex flex-col items-center justify-center text-gray-800 border-collapse rounded group dark:text-gray-200 md:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                      : "opacity-100 group-hover:opacity-50"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-50"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                      : "opacity-100 group-hover:opacity-50"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between md:flex-row">
              <a
                href="https://medium.com/@natchanonw281137"
                className="text-base font-normal text-gray-900 dark:fill-gray-300"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  className="transition-all duration-300 bi bi-linkedin hover:scale-110"
                  clipRule="evenodd"
                >
                  <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313v-7.874c-.02-.119.028-.24.124-.313l1.118-1.072v-.235h-3.869l-2.758 6.88-3.138-6.88h-4.059v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614l-1.471 1.784v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614v-5.352l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/natchanon-wanthong-5b1b881a3/"
                className="p-5 text-base font-normal text-gray-900 dark:text-gray-300 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-5 h-5 transition-all duration-300 bi bi-linkedin hover:scale-110"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-10 h-10 mr-3 rounded focus:outline-none "
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-8 h-8 text-yellow-500 transition-all duration-500 rounded-md dark:text-yellow-400 hover:animate-spin"
                  >
                    {theme === "dark" ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    )}
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="pt-2 pb-3 space-y-1 flexpx-2 sm:px-3">
                <Link
                  href="/index"
                  activeClass="index"
                  to="index"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-semibold text-gray-800 transition-all duration-300 rounded-md font-SerifPro dark:text-white dark:hover:text-zinc-400"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-semibold text-gray-800 duration-300 rounded-md font-SerifPro dark:text-white dark:hover:text-zinc-400 "
                >
                  About
                </Link>

                <Link
                  href="/skill"
                  activeClass="skill"
                  to="skill"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-semibold text-gray-800 duration-300 rounded-md font-SerifPro dark:text-white dark:hover:text-zinc-400"
                >
                  Skills
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
