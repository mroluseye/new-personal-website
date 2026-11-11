import React from "react";
import { AFTER_HOURS_STACK, PERSON, ROLES, SECTORS } from "@/content/site";
import Container from "@/components/common/Container";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";

const SPEC_SHEET = [
  { label: "Day job", value: ROLES[0].title },
  { label: "Track record", value: "10+ years in delivery" },
  { label: "Sectors", value: SECTORS.join(", ") },
  { label: "Been", value: "Developer, project manager, mentor, delivery lead" },
  { label: "After hours", value: AFTER_HOURS_STACK.join(", ") },
  { label: "Off duty", value: "PUBG, squad name MrPeterCole" },
  { label: "Based", value: PERSON.location },
] as const;

const SpecSheet = () => (
  <div className="border border-ink bg-paper p-6 shadow-print">
    <Kicker className="border-b border-ink pb-3">Spec sheet</Kicker>
    <dl className="divide-y divide-ink/15">
      {SPEC_SHEET.map((row) => (
        <div key={row.label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3">
          <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{row.label}</dt>
          <dd className="text-sm font-medium leading-snug">{row.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const BriefSection = () => (
  <section id="brief" aria-labelledby="brief-title">
    <Container className="py-24 md:py-32">
      <SectionHeading
        number="03"
        kicker="The brief"
        titleId="brief-title"
        title={
          <>
            Fun-loving, occasionally misread, <em className="text-signal">never forgettable.</em>
          </>
        }
      />

      <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-8">
        <Reveal className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-4 lg:col-span-5 lg:col-start-4">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.5rem] first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-signal">
            Let’s start with a confession: I’m a bit of a PUBG enthusiast. If you’re ever up for a proper team
            game, you’ll find me as MrPeterCole. Beyond the battlefield, I’m a genuinely fun-loving person. Some
            occasionally misread that energy, but I’ll take that over being forgettable.
          </p>
          <p>
            Now, the serious stuff. I’m a Lead Delivery Manager with over a decade of guiding teams across
            FinTech, EdTech, AgriTech, Digital Marketing and UK Government, including the Ministry of Justice. I
            keep projects on track and moving iteratively, usually without unnecessary drama.
          </p>
          <p>
            Along the way I’ve been a developer, project manager, mentor and delivery lead. Each role sharpened
            the same skill: turning roadmaps into real-world outcomes.
          </p>
          <blockquote className="border-y border-ink py-6 font-display text-3xl italic leading-tight tracking-tight md:-ml-16 md:text-4xl">
            “Continuous learning shouldn’t stop when the workday does.”
          </blockquote>
          <p>
            I’m also shamelessly obsessed with AI. After hours I build with agents, using a cocktail of{" "}
            {AFTER_HOURS_STACK.join(", ")}. That habit turned into Energity, bythenumbers, calltoduty and Mivva.
          </p>
          <p>
            The part I care about most is context engineering. An AI is only as useful as what you give it to work
            with, and that is a delivery problem as much as a technical one.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-8 md:col-start-4 lg:col-span-4 lg:col-start-9">
          <SpecSheet />
        </Reveal>
      </div>
    </Container>
  </section>
);

export default BriefSection;
