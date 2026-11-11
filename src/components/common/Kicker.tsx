import React from "react";
import { cn } from "@/lib/utils";

interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

/** Small mono label used above headings, like a section mark in a printed report. */
const Kicker = ({ children, className }: KickerProps) => (
  <p className={cn("font-mono text-kicker font-medium uppercase", className)}>{children}</p>
);

export default Kicker;
