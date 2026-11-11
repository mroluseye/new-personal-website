import React from "react";
import { cn } from "@/lib/utils";

interface NotesCoverProps {
  className?: string;
}

/** CSS-only study-guide cover: an inverted homage to the classic yellow-and-black revision notes. */
const NotesCover = ({ className }: NotesCoverProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "relative mx-auto aspect-[3/4.2] w-full max-w-sm rotate-2 border-2 border-ink bg-ink text-paper shadow-print-lg transition-transform duration-500 hover:rotate-0 motion-reduce:transition-none",
      className,
    )}
  >
    <span className="absolute inset-y-0 left-0 w-4 border-r border-paper/10 bg-gradient-to-r from-black/40 to-transparent" />

    <div className="hazard-stripes h-[18%] border-b-2 border-ink" />

    <div className="flex h-[82%] flex-col px-8 pb-6 pl-10 pt-7">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
        <span>Vol. 01</span>
        <span>Plain-English edition</span>
      </div>

      <p className="mt-6 font-display text-[clamp(3.25rem,9vw,5rem)] font-black leading-[0.82] tracking-[-0.04em] text-marker">
        Cole’s
        <br />
        Notes<span className="text-signal">.</span>
      </p>

      <p className="mt-5 max-w-[18ch] font-display text-lg italic leading-snug text-paper/85">
        Delivery, agents and context, for people doing the work.
      </p>

      <div className="mt-auto flex items-end justify-between border-t border-paper/20 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">By Olu Cole</span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-marker font-display text-sm font-bold italic text-marker">
          OC
        </span>
      </div>
    </div>
  </div>
);

export default NotesCover;
