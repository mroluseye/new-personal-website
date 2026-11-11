import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/content/site";
import Container from "@/components/common/Container";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import ContactForm from "@/components/ContactForm";

const DIRECT_LINES = [
  { label: "Email", handle: LINKS.emailLabel, href: LINKS.email, isExternal: false },
  { label: "X", handle: LINKS.xHandle, href: LINKS.x, isExternal: true },
  { label: "LinkedIn", handle: LINKS.linkedInHandle, href: LINKS.linkedIn, isExternal: true },
  { label: "GitHub", handle: LINKS.gitHubHandle, href: LINKS.gitHub, isExternal: true },
  { label: "Mentoring", handle: "ADPList", href: LINKS.adpList, isExternal: true },
] as const;

const DirectLines = () => (
  <div>
    <Kicker className="text-marker">Direct lines</Kicker>
    <ul className="mt-4 border-t border-paper/20">
      {DIRECT_LINES.map((line) => (
        <li key={line.label}>
          <a
            href={line.href}
            {...(line.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex min-h-14 items-center justify-between gap-4 border-b border-paper/20 py-3 transition-colors hover:text-marker"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted group-hover:text-marker">
              {line.label}
            </span>
            <span className="flex items-center gap-2 font-display text-xl">
              {line.handle}
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
            {line.isExternal && <span className="sr-only">(opens in a new tab)</span>}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactSection = () => (
  <section id="contact" aria-labelledby="contact-title" className="bg-ink text-paper">
    <Container className="py-24 md:py-32">
      <Reveal>
        <Kicker className="border-t border-paper/30 pt-5 text-marker">§ 06 · Contact</Kicker>
        <h2 id="contact-title" className="mt-8 font-display text-display-lg font-normal tracking-[-0.035em]">
          Let’s ship <em className="text-signal">something.</em>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7">
          <p className="mb-10 max-w-measure text-lg leading-relaxed text-paper/85">
            Got a project giving you headaches? Want to bounce an idea around, risk free? Or just fancy talking
            agents and context? Reach out. It’s free: my reward is in heaven.
          </p>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
          <DirectLines />
        </Reveal>
      </div>
    </Container>
  </section>
);

export default ContactSection;
