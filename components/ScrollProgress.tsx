"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  // Hide the bar entirely until there's any progress, so no full-width flash on mount.
  const opacity = useTransform(scrollYProgress, [0, 0.002], [0, 1]);

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      style={{ scaleX, opacity, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none"
    >
      <div className="w-full h-full bg-gradient-to-r from-[var(--color-saffron-deep)] via-[var(--color-gold)] to-[var(--color-saffron-deep)] shadow-[0_0_10px_rgba(217,119,6,0.6)]" />
    </motion.div>
  );
}
