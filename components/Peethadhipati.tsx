"use client";

import OmDivider from "./OmDivider";
import Reveal from "./Reveal";
import { useT } from "@/lib/i18n";
import { motion } from "framer-motion";
import SmartImage from "./SmartImage";

export default function Peethadhipati() {
  const { t } = useT();

  return (
    <section id="peethadhipati" className="relative py-24 px-6 bg-temple text-[var(--color-cream)] overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[var(--color-gold)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--color-gold)] border-dashed"
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-[var(--color-gold-light)] mb-4">
              {t("peeth.eyebrow")}
            </p>
            <h2 className="display-2 text-gilded">
              {t("peeth.title")}
            </h2>
            <OmDivider light />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12 items-center mt-12">
          <Reveal variant="left" className="md:col-span-2 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="ornate-frame-dark rounded-sm overflow-hidden bg-[var(--color-maroon-deep)] p-3 glow-ring"
            >
              <SmartImage
                src="/images/peethadhipati-new.png"
                fallbackSrc="/images/peethadhipati.jpeg"
                alt="Shri Vidyadheesh Teerth Swamiji"
                width={420}
                height={520}
                className="object-contain"
              />
            </motion.div>
          </Reveal>

          <Reveal variant="right" className="md:col-span-3">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold-light)]">
                {t("peeth.lineageOrder")}
              </p>
              <h3 className="font-[var(--font-cinzel)] text-3xl md:text-5xl text-gilded">
                {t("peeth.name")}
              </h3>
              <p className="font-[var(--font-cormorant)] text-lg text-[var(--color-cream)]/90 italic">
                {t("peeth.suffix")}
              </p>

              <div className="divider-line max-w-[200px]" />

              <p className="font-[var(--font-cormorant)] text-lg leading-relaxed text-[var(--color-cream)]/90">
                {t("peeth.bio")}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-gold-light)]/70 mb-1">
                    {t("peeth.sanyasa")}
                  </p>
                  <p className="font-[var(--font-cinzel)] text-xl text-[var(--color-gold-light)]">
                    09 · 02 · 2017
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-gold-light)]/70 mb-1">
                    {t("peeth.pattabhi")}
                  </p>
                  <p className="font-[var(--font-cinzel)] text-xl text-[var(--color-gold-light)]">
                    2021
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
