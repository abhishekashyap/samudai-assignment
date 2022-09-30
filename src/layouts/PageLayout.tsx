import { FunctionComponent } from "react";
import { PageLayoutProps } from "./types";

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  header,
  children,
}) => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center px-16">
      <div className="relative w-full max-w-xl">
        <div className="absolute top-96 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-96 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-52 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          {header && (
            <div className="text-4xl font-semibold text-center mb-16 mt-5">
              {header}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
