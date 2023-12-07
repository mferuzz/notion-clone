import { ChildProps } from "@/types";
import React from "react";
import { Navbar } from "./components";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div className="h-full">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
