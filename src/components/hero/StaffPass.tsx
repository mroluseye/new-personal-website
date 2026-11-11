import React from "react";
import { cn } from "@/lib/utils";
import { PERSON, ROLES } from "@/content/site";

interface StaffPassProps {
  className?: string;
}

/** Portrait presented as a lanyard pass: playful nod to a career spent on client sites. */
const StaffPass = ({ className }: StaffPassProps) => (
  <figure
    className={cn(
      "relative mx-auto w-full max-w-[17rem] -rotate-3 transition-transform duration-500 ease-out hover:rotate-0 motion-reduce:transition-none",
      className,
    )}
  >
    <div aria-hidden="true" className="relative z-10 mx-auto -mb-2 flex h-5 w-16 items-center justify-center bg-ink">
      <span className="h-1.5 w-8 rounded-full bg-paper/80" />
    </div>
    <div className="border border-ink bg-paper p-3 shadow-print">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-[0.14em]">
        <span className="bg-ink px-1.5 py-0.5 text-marker">All access</span>
        <span className="text-ink-soft">No. {PERSON.careerStartYear}</span>
      </div>
      <img
        src={PERSON.portraitSrc}
        alt={PERSON.portraitAlt}
        width={819}
        height={1024}
        className="aspect-[4/5] w-full border border-ink object-cover object-[60%_30%]"
      />
      <figcaption className="mt-3">
        <span className="block font-display text-2xl font-semibold leading-tight">{PERSON.name}</span>
        <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
          {ROLES[0].title}
        </span>
      </figcaption>
      <div aria-hidden="true" className="mt-3 flex items-end justify-between gap-3">
        <span className="barcode block h-8 flex-1 text-ink" />
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft">OC-LDM-01</span>
      </div>
    </div>
  </figure>
);

export default StaffPass;
