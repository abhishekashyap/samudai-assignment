import { PropsWithChildren } from "react";

export type ButtonProps = {
  onClick: () => void;
} & PropsWithChildren;
