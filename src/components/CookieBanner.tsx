import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS } from "@/content/site";

const CONSENT_STORAGE_KEY = "cookie-consent";
const SHOW_DELAY_MS = 1200;

type ConsentChoice = "accepted" | "rejected";

interface CookieBannerProps {
  className?: string;
}

const CookieBanner = ({ className }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_STORAGE_KEY)) return;
    const timer = window.setTimeout(() => setIsVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-labelledby="cookie-title"
      className={cn(
        "fixed inset-x-3 bottom-3 z-50 border border-paper/20 bg-ink p-5 text-paper shadow-print-signal sm:inset-x-auto sm:left-5 sm:max-w-md",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Close cookie notice"
        className="absolute right-1 top-1 inline-flex h-11 w-11 items-center justify-center text-ink-muted hover:text-paper"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
      <h2 id="cookie-title" className="pr-10 font-mono text-kicker font-bold uppercase text-marker">
        Cookie notice
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-paper/85">
        This site uses essential storage to remember this choice, and Formspree may set cookies when you send a form.
        Read the{" "}
        <a href={LINKS.privacy} className="font-semibold text-paper underline underline-offset-4">
          privacy policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="inline-flex min-h-11 items-center bg-marker px-5 text-sm font-semibold text-ink hover:bg-paper"
        >
          Accept cookies
        </button>
        <button
          type="button"
          onClick={() => handleChoice("rejected")}
          className="inline-flex min-h-11 items-center border border-paper/40 px-5 text-sm font-semibold hover:border-paper"
        >
          Reject non-essential
        </button>
      </div>
    </aside>
  );
};

export default CookieBanner;
