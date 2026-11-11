import React from "react";
import { PREVIOUSLY, SECTORS, STATS } from "@/content/site";
import Container from "@/components/common/Container";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";

const ProofStrip = () => (
  <section aria-label="Track record" className="border-y border-ink bg-paper-deep">
    <Container className="grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-14">
      <dl className="grid gap-8 sm:grid-cols-3 md:col-span-8 md:gap-0">
        {STATS.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.08}
            className="flex flex-col-reverse justify-end gap-2 sm:border-l sm:border-ink/20 sm:px-6 sm:first:border-l-0 sm:first:pl-0"
          >
            <dt className="max-w-[22ch] text-sm leading-snug text-ink-soft">{stat.label}</dt>
            <dd className="font-display text-6xl font-light leading-none tracking-tight md:text-7xl">
              {stat.value}
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={0.24} className="md:col-span-4 md:border-l md:border-ink/20 md:pl-8">
        <Kicker className="text-ink-soft">Previously trusted by</Kicker>
        <ul className="mt-3 space-y-1 font-display text-2xl italic leading-snug">
          {PREVIOUSLY.map((organisation) => (
            <li key={organisation}>{organisation}</li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
          {SECTORS.join(" · ")}
        </p>
      </Reveal>
    </Container>
  </section>
);

export default ProofStrip;
