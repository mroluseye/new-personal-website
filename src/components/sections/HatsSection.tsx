import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { ROLES, type Role } from "@/content/site";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const formatEntryNumber = (index: number) => String(index + 1).padStart(2, "0");

interface DictionaryEntryProps {
  role: Role;
  index: number;
}

/** One role, typeset like a dictionary entry. The highlighter sweeps in once it scrolls into view. */
const DictionaryEntry = ({ role, index }: DictionaryEntryProps) => {
  const entryRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(entryRef, { once: true, margin: "-30% 0px -30% 0px" });

  return (
    <li
      ref={entryRef}
      className="grid gap-4 border-b border-ink/20 py-9 md:grid-cols-12 md:gap-8 md:py-12"
    >
      <span className="font-mono text-kicker text-ink-soft md:col-span-1 md:pt-3">
        {formatEntryNumber(index)}
      </span>
      <div className="md:col-span-5">
        <h3 className="font-display text-4xl font-normal leading-[1.05] tracking-tight md:text-5xl">
          <span className={cn("marker-sweep", isInView && "is-marked")}>{role.title}</span>
        </h3>
        <p className="mt-3 font-mono text-sm text-ink-soft">
          {role.phonetic} <em className="font-display text-base italic">{role.partOfSpeech}</em>
        </p>
      </div>
      <div className="md:col-span-6 md:pt-2">
        <p className="text-lg leading-relaxed">
          <span className="mr-2 font-display font-semibold">1.</span>
          {role.definition}
        </p>
        <p className="mt-4 border-l-2 border-signal pl-4 font-display text-lg italic text-ink-soft">
          {role.usage}
        </p>
      </div>
    </li>
  );
};

const HatsSection = () => (
  <section id="hats" aria-labelledby="hats-title">
    <Container className="py-24 md:py-32">
      <SectionHeading
        number="01"
        kicker="Five hats"
        titleId="hats-title"
        title={
          <>
            Five hats. <em className="text-signal">One job:</em> getting good work out of the door.
          </>
        }
        lede="People ask what I actually do. Fair question. Here it is, typeset like a dictionary so nobody has to guess."
      />
      <ol className="mt-14 border-t border-ink md:mt-20">
        {ROLES.map((role, index) => (
          <DictionaryEntry key={role.title} role={role} index={index} />
        ))}
      </ol>
    </Container>
  </section>
);

export default HatsSection;
