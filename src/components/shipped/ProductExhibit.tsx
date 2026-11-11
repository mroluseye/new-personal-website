import React from "react";
import { ArrowUpRight } from "lucide-react";
import { type Product } from "@/content/site";

const SCREENSHOT_WIDTH = 1440;
const SCREENSHOT_HEIGHT = 900;

interface ProductExhibitProps {
  product: Product;
  exhibitNumber: string;
}

/**
 * A product card styled as a framed exhibit. The title link is stretched over
 * the whole card, so there is one tab stop and the full card is clickable.
 */
const ProductExhibit = ({ product, exhibitNumber }: ProductExhibitProps) => (
  <article className="group relative">
    <div className="mb-3 flex items-baseline justify-between gap-4 font-mono text-kicker uppercase">
      <span className="text-marker">Exhibit {exhibitNumber}</span>
      <span className="min-w-0 truncate text-ink-muted">{product.category}</span>
    </div>

    <div className="overflow-hidden border border-paper/25 bg-ink-raised shadow-print-signal transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-print-signal-lg group-focus-within:-translate-x-1 group-focus-within:-translate-y-1 group-focus-within:shadow-print-signal-lg motion-reduce:transition-none">
      <div aria-hidden="true" className="flex items-center gap-3 border-b border-paper/15 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="h-2 w-2 rounded-full bg-paper/25" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-sm bg-ink px-2 py-0.5 text-center font-mono text-[11px] text-ink-muted">
          {product.domain}
        </span>
      </div>
      <div className="relative overflow-hidden">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          width={SCREENSHOT_WIDTH}
          height={SCREENSHOT_HEIGHT}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-1.5 bg-marker px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
        >
          Open live site
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>

    <h3 className="mt-7 font-display text-4xl font-normal tracking-tight md:text-5xl">
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="after:absolute after:inset-0 after:content-['']"
      >
        {product.name}
        <span className="sr-only"> (opens {product.domain} in a new tab)</span>
      </a>
    </h3>
    <p className="mt-2 font-display text-xl italic text-ink-muted">{product.strapline}</p>
    <p className="mt-4 max-w-measure leading-relaxed text-paper/85">{product.summary}</p>
    <ul aria-label={`${product.name} highlights`} className="mt-5 flex flex-wrap gap-2">
      {product.highlights.map((highlight) => (
        <li key={highlight} className="border border-paper/30 px-2.5 py-1 font-mono text-xs text-paper/90">
          {highlight}
        </li>
      ))}
    </ul>
    <p
      aria-hidden="true"
      className="mt-6 inline-flex items-center gap-1.5 font-semibold text-marker underline decoration-2 underline-offset-[6px]"
    >
      Visit {product.domain}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </p>
  </article>
);

export default ProductExhibit;
