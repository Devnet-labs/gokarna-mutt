"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import OmDivider from "./OmDivider";
import { useT } from "@/lib/i18n";

export default function LineageBanner() {
  const { t } = useT();
  const [imgError, setImgError] = useState(false);

  // If the lineage group image isn't yet on disk, don't render the broken banner.
  if (imgError) {
    return null;
  }

  return (
    <section className="relative py-20 bg-[var(--color-parchment)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-10">
            <p className="eyebrow text-[var(--color-saffron-deep)] mb-4">गुरुमण्डल</p>
            <h2 className="display-2 text-[var(--color-maroon-deep)]">The Sacred Lineage</h2>
            <p className="subtitle mt-4 max-w-2xl mx-auto">{t("guru.subtitle")}</p>
            <OmDivider />
          </div>
        </Reveal>

        <Reveal variant="scale">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
          >
            <div className="ornate-frame bg-[var(--color-cream)] p-4 sm:p-6">
              <div className="relative w-full aspect-[1500/440] max-h-[440px] overflow-hidden">
                <Image
                  src="/images/lineage-group.png"
                  alt="Guruparampara — the lineage of Acharyas of Shree Samsthan Gokarn Partagali Jeevottam Math"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  onError={() => setImgError(true)}
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="font-[var(--font-tiro)] text-[var(--color-saffron-deep)] text-xl mb-1">
                ॥ श्रीगुरुपरम्परा ॥
              </p>
              <p className="font-[var(--font-cormorant)] italic text-[var(--color-ink)]/80 text-base sm:text-lg">
                An unbroken chain of Acharyas — preserving Dvaita Vedanta for over five centuries.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
