import { FunctionComponent } from "react";
import { WidgetProps } from "./types";

export const Widget: FunctionComponent<WidgetProps> = ({
  className,
  header,
  children,
}) => (
  <div
    className={`h-72 w-72 p-6 flex flex-col rounded-xl shadow-xl absolute ${
      className ? className : ""
    }`}
  >
    <h3 className="mb-2 text-white font-semibold uppercase">{header}</h3>
    <div className="flex flex-1 overflow-auto">{children}</div>
  </div>
);
