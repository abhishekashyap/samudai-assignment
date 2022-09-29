import { FunctionComponent } from "react";
import { ButtonProps } from "./types";

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="py-2 px-4 bg-transparent text-indigo-600 font-semibold border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
