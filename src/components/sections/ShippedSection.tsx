import React from "react";
import { PRODUCTS } from "@/content/site";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import ProductExhibit from "@/components/shipped/ProductExhibit";

const formatExhibitNumber = (index: number) => String(index + 1).padStart(2, "0");

const ShippedSection = () => (
  <section id="shipped" aria-labelledby="shipped-title" className="bg-ink text-paper">
    <Container className="py-24 md:py-32">
      <SectionHeading
        tone="ink"
        number="02"
        kicker="Shipped"
        titleId="shipped-title"
        title={
          <>
            Built after hours. <em className="text-marker">Shipped for real.</em>
          </>
        }
        lede="Four products, each one born from a problem I kept bumping into. All live. Click through and kick the tyres."
      />

      <ul className="mt-16 grid grid-cols-1 gap-x-12 gap-y-20 md:mt-24 md:grid-cols-2 md:pb-28 lg:gap-x-20">
        {PRODUCTS.map((product, index) => (
          <li key={product.slug} className="md:even:translate-y-28">
            <Reveal delay={(index % 2) * 0.1}>
              <ProductExhibit product={product} exhibitNumber={formatExhibitNumber(index)} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default ShippedSection;
