import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_LINKS } from "./constants";

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8"
                src="https://samudai.xyz/static/media/logo.1a7196379bf1d4b966c5.png"
                alt="Samudai assignment logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAVIGATION_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === `/${item.name.toLocaleLowerCase()}`
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};
