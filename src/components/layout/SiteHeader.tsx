import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, PERSON, TRACKED_SECTION_IDS } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Container from "@/components/common/Container";

const SCROLLED_THRESHOLD_PX = 24;

const EDITION_LABEL = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(
  new Date(),
);

const Folio = () => (
  <div className="border-b border-ink/15">
    <Container className="flex h-9 items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
      <span>
        Vol. 01
        <span className="hidden sm:inline">
          {" "}
          <span aria-hidden="true">·</span> {EDITION_LABEL} edition
        </span>
      </span>
      <span className="hidden sm:inline">{PERSON.location}</span>
      <a href="/#notes" className="inline-flex items-center gap-1 text-ink hover:text-signal-deep">
        Cole’s Notes: first issue soon
        <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
      </a>
    </Container>
  </div>
);

const Wordmark = () => (
  <a href="/#top" className="group inline-flex items-baseline gap-1.5" aria-label="Olu Cole, back to top">
    <span className="font-display text-2xl font-semibold italic tracking-tight">Olu Cole</span>
    <span
      aria-hidden="true"
      className="inline-block h-2 w-2 rounded-full bg-signal transition-transform duration-300 group-hover:scale-150"
    />
  </a>
);

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <button
        type="button"
        className="inline-flex h-11 items-center gap-2 border border-ink px-4 font-mono text-xs uppercase tracking-[0.14em] md:hidden"
      >
        <Menu aria-hidden="true" className="h-4 w-4" />
        Menu
      </button>
    </SheetTrigger>
    <SheetContent
      side="right"
      className="flex w-full flex-col border-l border-ink bg-paper sm:max-w-sm [&>button:last-child]:right-3 [&>button:last-child]:top-3 [&>button:last-child]:inline-flex [&>button:last-child]:h-11 [&>button:last-child]:w-11 [&>button:last-child]:items-center [&>button:last-child]:justify-center [&>button:last-child]:opacity-100"
    >
      <SheetTitle className="font-mono text-kicker font-medium uppercase text-ink-soft">Contents</SheetTitle>
      <nav aria-label="Mobile" className="mt-6 flex flex-col">
        {NAV_ITEMS.map((item, index) => (
          <SheetClose asChild key={item.id}>
            <a
              href={item.href}
              className="flex min-h-14 items-baseline gap-4 border-b border-ink/15 py-3 font-display text-3xl"
            >
              <span className="font-mono text-xs text-ink-soft">0{index + 1}</span>
              {item.label}
            </a>
          </SheetClose>
        ))}
      </nav>
      <SheetClose asChild>
        <a
          href="/#contact"
          className="mt-auto inline-flex min-h-12 items-center justify-center bg-ink px-6 font-semibold text-paper"
        >
          Get in touch
        </a>
      </SheetClose>
    </SheetContent>
  </Sheet>
);

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSectionId = useActiveSection(TRACKED_SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLLED_THRESHOLD_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] bg-marker px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Folio />
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-colors duration-300",
          isScrolled ? "border-ink bg-paper/90 backdrop-blur-md" : "border-transparent bg-paper",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          <Wordmark />
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSectionId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors hover:text-signal-deep",
                    isActive && "text-ink after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:bg-signal",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a
            href="/#contact"
            className="hidden min-h-11 items-center gap-2 bg-ink px-5 text-sm font-semibold text-paper transition-colors hover:bg-signal-deep md:inline-flex"
          >
            Get in touch
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <MobileMenu />
        </Container>
      </header>
    </>
  );
};

export default SiteHeader;
