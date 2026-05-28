"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { ArrowDown, Sparkles } from "lucide-react";

const BG_VIDEO_ID = "miky3vBA5sc";

export default function Hero() {
  const { t } = useT();

  return (
    <section id="top" className="relative min-h-screen text-[var(--color-cream)] overflow-hidden bg-[var(--color-maroon-deep)]">
      {/* YouTube background video — fills the hero on every viewport (desktop + mobile).
          Muted + playsinline → autoplay works on iOS and Android. No controls, no overlays.
          The iframe is enlarged and shifted up so the YouTube title bar (at the top of the
          embed) is cropped outside the visible area. */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <iframe
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "max(116vw, 200vh)",
            height: "max(116vh, 65vw)",
            top: "-8vh",
            border: 0
          }}
          src={`https://www.youtube.com/embed/${BG_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${BG_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0`}
          title=""
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          aria-hidden="true"
        />
        {/* Click-shield over the iframe so the YouTube UI can never be summoned. */}
        <div className="absolute inset-0" />
        {/* Uniform darken — keeps gold text readable, no edge masks so the video
            reaches the very top and bottom of the hero. */}
        <div className="absolute inset-0 bg-[var(--color-maroon-deep)]/35" />
      </div>

      {/* Ambient glows — animated, sit over the video */}
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

      {/* Animated mandala overlays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[140vmin] h-[140vmin] opacity-[0.08] rotate-slow">
          <Mandala />
        </div>
        <div className="absolute w-[100vmin] h-[100vmin] opacity-[0.06] rotate-reverse">
          <Mandala />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow text-[var(--color-gold-light)] mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          {t("hero.invocation")}
        </motion.p>

        {/* Soft dark plate behind the title so it reads cleanly on the video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative inline-block px-8 py-6 max-w-full"
        >
          <div className="absolute inset-0 bg-[var(--color-maroon-deep)]/55 backdrop-blur-[2px] rounded-sm" />
          <h1 className="relative display-1 text-gilded drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]">
            {t("hero.titleA")} {t("hero.titleB")}
            <br />
            {t("hero.titleC")}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-3 my-8"
        >
          <span className="divider-line w-16 sm:w-24" />
          <Sparkles className="text-[var(--color-gold-light)]" size={20} />
          <span className="divider-line w-16 sm:w-24" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="font-[var(--font-cormorant)] text-lg md:text-2xl text-[var(--color-cream)]/95 max-w-3xl italic leading-[1.55] px-2 font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-8 label-caps text-[var(--color-gold-light)]/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="px-6 sm:px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold-light)] font-[var(--font-cinzel)] text-xs sm:text-sm tracking-widest uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-maroon-deep)] transition-all backdrop-blur-sm"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#guruparampara"
            className="px-6 sm:px-8 py-3 bg-[var(--color-saffron-deep)] text-[var(--color-cream)] font-[var(--font-cinzel)] text-xs sm:text-sm tracking-widest uppercase hover:bg-[var(--color-saffron)] transition-all shadow-lg"
          >
            {t("hero.cta2")}
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

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[var(--color-maroon-deep)] to-transparent pointer-events-none" />
    </section>
  );
}

function Mandala() {
  const fx = (n: number) => n.toFixed(2);
  return (
    <svg viewBox="0 0 800 800" className="w-full h-full">
      <g stroke="currentColor" fill="none" strokeWidth="0.5">
        {[380, 320, 260, 200, 140, 80].map((r) => (
          <circle key={r} cx="400" cy="400" r={r} />
        ))}
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 32;
          return (
            <line
              key={i}
              x1={fx(400 + Math.cos(angle) * 80)}
              y1={fx(400 + Math.sin(angle) * 80)}
              x2={fx(400 + Math.cos(angle) * 380)}
              y2={fx(400 + Math.sin(angle) * 380)}
            />
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          const x = fx(400 + Math.cos(angle) * 260);
          const y = fx(400 + Math.sin(angle) * 260);
          return <circle key={`p-${i}`} cx={x} cy={y} r="20" strokeWidth="0.7" />;
        })}
      </g>
    </svg>
  );
}
