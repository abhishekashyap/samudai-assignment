import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import { PageLayoutProps } from "./types";

export const ProtectedPageLayout: FunctionComponent<PageLayoutProps> = ({
  children,
}) => (
  <div className="min-h-full">
    <Navbar />
    <main>{children}</main>
  </div>
);
