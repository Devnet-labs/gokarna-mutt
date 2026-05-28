"use client";

import OmDivider from "./OmDivider";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { useT } from "@/lib/i18n";

export default function About() {
  const { t } = useT();

  const stats = [
    { n: 13, suffix: "", label: t("about.stat1") },
    { n: 24, suffix: "", label: t("about.stat2") },
    { n: 500, suffix: "+", label: t("about.stat3") },
    { n: 1, suffix: "", label: t("about.stat4") }
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-parchment overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-6">
            <p className="eyebrow text-[var(--color-saffron-deep)] mb-4">
              {t("about.devanagari")}
            </p>
            <h2 className="display-2 text-[var(--color-maroon-deep)]">
              {t("about.title")}
            </h2>
            <OmDivider />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mt-12">
          <Reveal variant="left">
            <div className="space-y-6 body-copy text-[var(--color-ink)]">
              <p className="first-letter:font-[var(--font-cinzel)] first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:text-[var(--color-saffron-deep)] first-letter:leading-none">
                {t("about.p1")}
              </p>
              <p>{t("about.p2")}</p>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} variant="scale" delay={i * 0.1}>
                  <div className="ornate-frame bg-[var(--color-cream)] p-6 text-center lift h-full">
                    <div className="font-[var(--font-cinzel)] text-4xl text-[var(--color-saffron-deep)] mb-2">
                      <Counter value={s.n} suffix={s.suffix} />
                    </div>
                    <div className="caption text-[var(--color-maroon-deep)]">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
