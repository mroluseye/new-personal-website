import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, className, ...props }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-page px-5 sm:px-8 lg:px-12", className)} {...props}>
    {children}
  </div>
);

export default Container;
