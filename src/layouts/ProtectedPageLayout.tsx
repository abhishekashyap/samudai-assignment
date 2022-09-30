import { Disclosure } from "@headlessui/react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { PageLayoutProps } from "./types";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Stats", href: "/stats", current: false },
];

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ProtectedPageLayout: FunctionComponent<PageLayoutProps> = ({
  header,
  children,
}) => {
  return (
    <>
      <div className="min-h-full">
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
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
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

        {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
              {header}
            </h1>
          </div>
        </header> */}
        <main>{children}</main>
      </div>
    </>
  );
};
