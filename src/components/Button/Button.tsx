import { FunctionComponent } from "react";
import { ButtonProps } from "./types";

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  isDisabled = false,
  className,
}) => {
  return (
    <button
      className={`py-2 px-4 bg-transparent font-semibold text-gray-500 border  border-gray-500 rounded hover:bg-gray-500 hover:text-white hover:border-transparent transition ease-in duration-200 ${
        className ? className : ""
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
