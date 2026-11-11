import React from "react";
import { cn } from "@/lib/utils";
import Kicker from "./Kicker";
import Reveal from "./Reveal";

type Tone = "paper" | "ink";

interface SectionHeadingProps {
  number: string;
  kicker: string;
  title: React.ReactNode;
  titleId: string;
  lede?: React.ReactNode;
  tone?: Tone;
  className?: string;
}

const TONE_CLASSES: Record<Tone, { rule: string; kicker: string; lede: string }> = {
  paper: { rule: "border-ink", kicker: "text-ink", lede: "text-ink-soft" },
  ink: { rule: "border-paper/30", kicker: "text-marker", lede: "text-ink-muted" },
};

const SectionHeading = ({
  number,
  kicker,
  title,
  titleId,
  lede,
  tone = "paper",
  className,
}: SectionHeadingProps) => {
  const toneClasses = TONE_CLASSES[tone];

  return (
    <Reveal
      className={cn("grid gap-6 border-t pt-5 md:grid-cols-12 md:gap-8", toneClasses.rule, className)}
    >
      <Kicker className={cn("md:col-span-3", toneClasses.kicker)}>
        § {number} · {kicker}
      </Kicker>
      <div className="md:col-span-9">
        <h2 id={titleId} className="font-display text-display-md font-normal tracking-tight">
          {title}
        </h2>
        {lede && (
          <p className={cn("mt-6 max-w-measure text-lg leading-relaxed", toneClasses.lede)}>{lede}</p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionHeading;
