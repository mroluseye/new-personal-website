import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LINKS, PRINCIPLES, TOOLBELT } from "@/content/site";
import Container from "@/components/common/Container";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";

const SHELF_ITEMS = [
  {
    kicker: "The book",
    title: "The PM Handbook",
    body: "My practical, plain-English handbook for project managers, built on a decade of delivery.",
    cta: "Get the book",
    href: LINKS.book,
  },
  {
    kicker: "Mentoring",
    title: "1:1 sessions on ADPList",
    body: "Free mentoring for people in delivery, product and agile roles, or trying to break into one.",
    cta: "Book a free session",
    href: LINKS.adpList,
  },
] as const;

const PrinciplesList = () => (
  <ol className="border-t border-ink">
    {PRINCIPLES.map((principle, index) => (
      <li key={principle.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-ink/20 py-7 md:grid-cols-[5rem_1fr]">
        <span aria-hidden="true" className="font-display text-5xl font-light italic leading-none text-signal md:text-6xl">
          {index + 1}
        </span>
        <div>
          <h3 className="font-display text-2xl font-medium leading-tight tracking-tight md:text-3xl">
            {principle.title}
          </h3>
          <p className="mt-2 max-w-measure leading-relaxed text-ink-soft">{principle.body}</p>
        </div>
      </li>
    ))}
  </ol>
);

const Toolbelt = () => (
  <div>
    <Kicker className="text-ink-soft">In the toolbelt</Kicker>
    <ul className="mt-4 flex flex-wrap gap-2">
      {TOOLBELT.map((tool) => (
        <li key={tool} className="border border-ink bg-paper px-3 py-1.5 text-sm font-medium">
          {tool}
        </li>
      ))}
    </ul>
  </div>
);

const Shelf = () => (
  <div className="grid gap-6 sm:grid-cols-2">
    {SHELF_ITEMS.map((item) => (
      <a
        key={item.title}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col border border-ink bg-paper p-6 shadow-print transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-print-lg motion-reduce:transition-none"
      >
        <Kicker className="text-ink-soft">{item.kicker}</Kicker>
        <span className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight">{item.title}</span>
        <span className="mt-3 flex-1 leading-relaxed text-ink-soft">{item.body}</span>
        <span className="mt-6 inline-flex items-center gap-1.5 font-semibold underline decoration-signal decoration-2 underline-offset-[6px]">
          {item.cta}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </span>
      </a>
    ))}
  </div>
);

const ApproachSection = () => (
  <section id="approach" aria-labelledby="approach-title" className="border-y border-ink bg-paper-deep">
    <Container className="py-24 md:py-32">
      <SectionHeading
        number="04"
        kicker="How I work"
        titleId="approach-title"
        title={
          <>
            Five rules I bring to <em className="text-signal">every</em> team.
          </>
        }
        lede="Frameworks come and go. These don’t. They are the reason the work ships and the people stay."
      />

      <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-4">
          <PrinciplesList />
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-9 md:col-start-4 lg:col-span-3 lg:col-start-10">
          <Toolbelt />
        </Reveal>
      </div>

      <Reveal className="mt-20 grid gap-6 md:grid-cols-12 md:gap-8">
        <Kicker className="md:col-span-3">Also on the shelf</Kicker>
        <div className="md:col-span-9">
          <Shelf />
        </div>
      </Reveal>
    </Container>
  </section>
);

export default ApproachSection;
