import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

/** Fades content up as it enters the viewport. Honours reduced motion via the app's MotionConfig. */
const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: EASE_OUT_QUINT, delay }}
  >
    {children}
  </motion.div>
);

export default Reveal;
