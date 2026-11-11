import React from "react";
import { MotionConfig } from "framer-motion";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";
import HeroSection from "./hero/HeroSection";
import ProofStrip from "./sections/ProofStrip";
import HatsSection from "./sections/HatsSection";
import ShippedSection from "./sections/ShippedSection";
import BriefSection from "./sections/BriefSection";
import ApproachSection from "./sections/ApproachSection";
import ColesNotesSection from "./sections/ColesNotesSection";
import ContactSection from "./sections/ContactSection";

const HomePage = () => (
  <MotionConfig reducedMotion="user">
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ProofStrip />
        <HatsSection />
        <ShippedSection />
        <BriefSection />
        <ApproachSection />
        <ColesNotesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  </MotionConfig>
);

export default HomePage;
