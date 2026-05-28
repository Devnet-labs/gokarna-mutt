"use client";

import { motion } from "framer-motion";

export default function OmDivider({ symbol = "ॐ", className = "", light = false }: { symbol?: string; className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-10 ${className}`}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="divider-line flex-1 max-w-[180px] origin-right"
      />
      <motion.span
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`text-2xl font-[var(--font-sanskrit)] flicker ${
          light ? "text-[var(--color-gold-light)]" : "text-[var(--color-saffron-deep)]"
        }`}
      >
        {symbol}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="divider-line flex-1 max-w-[180px] origin-left"
      />
    </div>
  );
}
