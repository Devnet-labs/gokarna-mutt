"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import OmDivider from "./OmDivider";
import Reveal from "./Reveal";
import { useT } from "@/lib/i18n";

type Video = {
  id: string;
  title: string;
  sanskrit: string;
  duration: string;
};

const videos: Video[] = [
  {
    id: "M0EelBuBcUM",
    title: "Sacred Moments at the Math",
    sanskrit: "पवित्र क्षण",
    duration: "Glimpses"
  },
  {
    id: "Iseujp4kH8k",
    title: "Daily Mangal Aarti",
    sanskrit: "दैनिक मंगल आरती",
    duration: "Ritual"
  },
  {
    id: "URZ5EodHLu0",
    title: "Pravachan & Discourse",
    sanskrit: "प्रवचन",
    duration: "Teaching"
  },
  {
    id: "YYUsnhwPgr8",
    title: "Vatavraksha Darshan",
    sanskrit: "वटवृक्ष दर्शन",
    duration: "Sacred Tree"
  },
  {
    id: "0gq9ZSe6EDQ",
    title: "Mahotsav & Festival",
    sanskrit: "महोत्सव",
    duration: "Festival"
  }
];

const gradients = [
  "from-[#b45309] to-[#7c2d12]",
  "from-[#92400e] to-[#5b1a06]",
  "from-[#c9a227] to-[#92400e]",
  "from-[#7c2d12] to-[#2a1505]",
  "from-[#d97706] to-[#b45309]"
];

export default function VideoGallery() {
  const { t } = useT();
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const scroll = (dir: 1 | -1) => {
    if (!scroller.current) return;
    const w = scroller.current.clientWidth * 0.7;
    scroller.current.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  // Lock body scroll while the modal is open + ESC to close
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const activeVideo = videos.find((v) => v.id === active);

  return (
    <section id="video" className="relative py-24 bg-[var(--color-cream)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-[var(--color-saffron-deep)] mb-4">गैलरी</p>
            <h2 className="display-2 text-[var(--color-maroon-deep)]">{t("video.title")}</h2>
            <p className="subtitle mt-4 max-w-2xl mx-auto">{t("video.subtitle")}</p>
            <OmDivider />
          </div>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden">
        <button
          onClick={() => scroll(-1)}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[var(--color-maroon-deep)] text-[var(--color-gold-light)] items-center justify-center shadow-xl hover:bg-[var(--color-saffron-deep)] transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scroll(1)}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[var(--color-maroon-deep)] text-[var(--color-gold-light)] items-center justify-center shadow-xl hover:bg-[var(--color-saffron-deep)] transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={22} />
        </button>

        <div
          ref={scroller}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 sm:px-20 py-8"
        >
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="snap-start flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[400px]"
            >
              <button
                onClick={() => setActive(v.id)}
                className={`group relative w-full aspect-[4/5] ornate-frame overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]} lift cursor-pointer block`}
              >
                {/* YouTube thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                />

                {/* Mandala overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 200">
                  <g stroke="currentColor" fill="none" strokeWidth="0.5" className="text-[var(--color-gold-light)]">
                    <circle cx="100" cy="100" r="80" />
                    <circle cx="100" cy="100" r="60" />
                    <circle cx="100" cy="100" r="40" />
                    {Array.from({ length: 16 }).map((_, k) => {
                      const a = (k * Math.PI * 2) / 16;
                      const fx = (n: number) => n.toFixed(2);
                      return (
                        <line
                          key={k}
                          x1={fx(100 + Math.cos(a) * 40)}
                          y1={fx(100 + Math.sin(a) * 40)}
                          x2={fx(100 + Math.cos(a) * 80)}
                          y2={fx(100 + Math.sin(a) * 80)}
                        />
                      );
                    })}
                  </g>
                </svg>

                {/* Play icon removed — the card itself is the play affordance. */}

                {/* Text overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-left pointer-events-none">
                  <p className="font-[var(--font-tiro)] text-[var(--color-gold-light)] text-lg mb-1">
                    {v.sanskrit}
                  </p>
                  <h3 className="font-[var(--font-cinzel)] text-[var(--color-cream)] text-lg sm:text-xl tracking-wide">
                    {v.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-light)]/80 mt-1">
                    {v.duration}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--color-saffron-deep)]/70 mt-4">
          {t("video.scrollHint")}
        </p>
      </div>

      {/* Video modal */}
      {active && activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 text-[var(--color-gold-light)] hover:text-[var(--color-cream)] flex items-center gap-2 text-xs uppercase tracking-widest font-[var(--font-cinzel)]"
            >
              Close <X size={18} />
            </button>

            <div className="ornate-frame-dark bg-[var(--color-maroon-deep)] p-3 sm:p-4">
              <div className="aspect-video w-full bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-2 pt-4 pb-2 text-[var(--color-cream)]">
                <div>
                  <p className="font-[var(--font-tiro)] text-[var(--color-gold-light)] text-base sm:text-lg">
                    {activeVideo.sanskrit}
                  </p>
                  <h3 className="font-[var(--font-cinzel)] text-lg sm:text-xl text-gilded">
                    {activeVideo.title}
                  </h3>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-gold-light)] hover:text-[var(--color-cream)] font-[var(--font-cinzel)] whitespace-nowrap"
                >
                  YouTube <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
