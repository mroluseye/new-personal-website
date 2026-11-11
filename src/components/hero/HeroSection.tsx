import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Container from "@/components/common/Container";
import Kicker from "@/components/common/Kicker";
import DepartureBoard from "./DepartureBoard";
import StaffPass from "./StaffPass";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

const riseIn = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE_OUT_QUINT, delay },
});

const HandDrawnUnderline = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 300 24"
    preserveAspectRatio="none"
    className="absolute -bottom-[0.08em] left-0 h-[0.22em] w-full text-signal"
  >
    <path
      d="M3 17 C 70 7, 150 4, 297 11"
      pathLength={1}
      strokeDasharray={1}
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      fill="none"
      className="animate-draw-line motion-reduce:animate-none"
    />
  </svg>
);

const HeroSection = () => (
  <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
    <Container className="pb-20 pt-10 md:pb-28 md:pt-16">
      <motion.div {...riseIn(0)}>
        <Kicker className="text-ink-soft">
          Olu Cole <span aria-hidden="true">/</span> Delivery, founder, AI
        </Kicker>
      </motion.div>

      <motion.h1
        id="hero-title"
        {...riseIn(0.1)}
        className="mt-6 max-w-[15ch] font-display text-display-lg font-normal tracking-[-0.035em] md:max-w-[16ch]"
      >
        I help humans <em className="font-light text-signal">(and their AI agents)</em> do their best
        work,{" "}
        <span className="relative inline-block whitespace-nowrap">
          faster.
          <HandDrawnUnderline />
        </span>
      </motion.h1>

      <div className="mt-14 grid items-start gap-12 md:grid-cols-12 md:gap-8 lg:mt-20">
        <motion.div {...riseIn(0.25)} className="md:col-span-8 lg:col-span-4 lg:col-start-4 lg:pt-6">
          <p className="max-w-measure text-lg leading-relaxed text-ink-soft md:text-xl">
            <strong className="font-semibold text-ink">Lead Delivery Manager by day. Founder after hours.</strong>{" "}
            For over a decade I’ve kept teams across FinTech, EdTech, AgriTech, Digital Marketing and UK
            Government shipping without the drama. Now I build AI-assisted products of my own.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#shipped"
              className="group inline-flex min-h-12 items-center gap-2 bg-ink px-6 font-semibold text-paper shadow-print-signal transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-print-signal-lg"
            >
              See what I’ve shipped
              <ArrowDownRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#notes"
              className="inline-flex min-h-11 items-center font-semibold underline decoration-signal decoration-2 underline-offset-[6px] hover:decoration-4"
            >
              Join Cole’s Notes
            </a>
          </div>
        </motion.div>

        <motion.div {...riseIn(0.35)} className="md:col-span-4 md:row-start-1 lg:col-span-3 lg:col-start-1">
          <StaffPass />
        </motion.div>

        <motion.div {...riseIn(0.45)} className="md:col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <DepartureBoard />
        </motion.div>
      </div>
    </Container>
  </section>
);

export default HeroSection;
