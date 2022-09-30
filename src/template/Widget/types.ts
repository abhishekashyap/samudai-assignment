import { PropsWithChildren } from "react";

export type WidgetProps = {
  className?: string;
  header: string;
} & PropsWithChildren;
