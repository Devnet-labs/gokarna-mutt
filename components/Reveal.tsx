"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "up" | "down" | "left" | "right" | "fade" | "scale";

const presets: Record<Variant, { initial: Record<string, number>; animate: Record<string, number> }> = {
  up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  scale: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } }
};

const MotionDiv = motion.div as React.FC<React.ComponentProps<typeof motion.div> & { [key: string]: unknown }>;

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  once = false
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const p = presets[variant];
  const initial = reduce ? p.animate : p.initial;

  return (
    <MotionDiv
      className={className}
      initial={initial}
      whileInView={p.animate}
      exit={p.initial}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  );
}
