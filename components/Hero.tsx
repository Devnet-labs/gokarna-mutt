"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { ArrowDown } from "lucide-react";
import { Lotus } from "./Icons";
/* eslint-disable @next/next/no-img-element */

const BG_VIDEO_SRC = "/images/Video.mp4";

export default function Hero() {
  const { t } = useT();

  return (
    <section
      id="top"
      className="relative min-h-screen text-[var(--color-cream)] overflow-hidden bg-[var(--color-maroon-deep)]"
    >
      {/* Local mp4 background — autoplay, muted, loop, no controls. */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          src={BG_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
          style={{ width: "max(100vw, 177.78vh)", height: "max(100vh, 56.25vw)" }}
        />
        {/* Click-shield so the video can never be interacted with. */}
        <div className="absolute inset-0" />
        {/* Uniform darken — keeps gold text readable. */}
        <div className="absolute inset-0 bg-[var(--color-maroon-deep)]/35" />
      </div>

      {/* Flanking deity images — small, anchored to the bottom corners. */}
      {/* Flanking swamji photos — anchored to the top-left & top-right corners,
          just below the navbar. */}
      <motion.img
        src="/images/1.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute top-20 sm:top-24 left-0 z-[5] pointer-events-none select-none object-contain object-top drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                   h-[10vh] sm:h-[18vh] md:h-[24vh] lg:h-[28vh] xl:h-[32vh]
                   max-w-[18vw] sm:max-w-[20vw] md:max-w-[18vw]
                   [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
      />
      <motion.img
        src="/images/2.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute top-20 sm:top-24 right-0 z-[5] pointer-events-none select-none object-contain object-top drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                   h-[10vh] sm:h-[18vh] md:h-[24vh] lg:h-[28vh] xl:h-[32vh]
                   max-w-[18vw] sm:max-w-[20vw] md:max-w-[18vw]
                   [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-saffron)]/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-gold)]/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontSize: "16px" }}
          className="font-[var(--font-sanskrit)] font-bold text-[var(--color-gold-light)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] tracking-wide leading-tight"
        >
          {t("hero.invocation")}
        </motion.p>

        <div className="flex-1" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="display-1 text-gilded drop-shadow-[0_4px_22px_rgba(0,0,0,0.9)] max-w-full"
        >
          {t("hero.titleA")} {t("hero.titleB")}
          <br />
          {t("hero.titleC")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-6 label-caps font-bold text-[var(--color-gold-light)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="/seva"
            className="group inline-flex items-center gap-3 px-12 sm:px-14 py-5 rounded-full bg-gradient-to-b from-[var(--color-gold-light)] via-[var(--color-gold)] to-[#a37a14] text-[var(--color-maroon-deep)] font-[var(--font-cinzel)] font-bold text-base sm:text-lg tracking-[0.28em] uppercase hover:from-[#fde68a] hover:via-[var(--color-gold-light)] hover:to-[var(--color-gold)] transition-all shadow-[0_14px_40px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_18px_50px_-10px_rgba(233,196,106,0.55)] ring-1 ring-inset ring-white/40"
          >
            <Lotus size={22} className="transition-transform group-hover:scale-110 group-hover:rotate-12" />
            {t("hero.cta3")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, delay: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-gold-light)]/70"
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
