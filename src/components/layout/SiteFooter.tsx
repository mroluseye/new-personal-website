import React from "react";
import { ArrowUp } from "lucide-react";
import { LINKS, PERSON } from "@/content/site";
import Container from "@/components/common/Container";

const SiteFooter = () => (
  <footer className="bg-ink text-paper">
    <Container className="flex flex-col gap-6 border-t border-paper/20 py-10 text-sm md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} {PERSON.name}. Designed and built in the UK.
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
        Set in Fraunces, Schibsted Grotesk and JetBrains Mono
      </p>
      <nav aria-label="Footer" className="flex items-center gap-6">
        <a href={LINKS.privacy} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
          Privacy policy
        </a>
        <a href="/#top" className="inline-flex min-h-11 items-center gap-1.5 underline-offset-4 hover:underline">
          Back to top
          <ArrowUp aria-hidden="true" className="h-4 w-4" />
        </a>
      </nav>
    </Container>
  </footer>
);

export default SiteFooter;
