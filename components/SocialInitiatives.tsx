"use client";

import OmDivider from "./OmDivider";
import Reveal from "./Reveal";
import { useT } from "@/lib/i18n";
import { Heart, HandHeart, Home, BookHeart } from "lucide-react";

const initiatives = [
  {
    title: "Jeevottam Jeevan Saathi",
    sanskrit: "जीवोत्तम जीवन साथी",
    icon: HandHeart,
    desc: "A community matrimonial initiative fostering unions rooted in dharmic values."
  },
  {
    title: "Shantikunj Sevashram",
    sanskrit: "शान्तिकुञ्ज सेवाश्रम",
    icon: Heart,
    desc: "A sevashram dedicated to care, compassion, and selfless service to those in need."
  },
  {
    title: "Poornaprajna Vasati Nilaya",
    sanskrit: "पूर्णप्रज्ञ वसति निलय",
    icon: Home,
    desc: "Residential facility supporting students and devotees pursuing learning and pilgrimage."
  },
  {
    title: "Vidyadheesh Vasati Nilaya",
    sanskrit: "विद्याधीश वसति निलय",
    icon: BookHeart,
    desc: "A second residential nilaya, instituted in the spirit of education and stewardship."
  }
];

export default function SocialInitiatives() {
  const { t } = useT();

  return (
    <section id="seva" className="relative py-24 px-6 bg-parchment overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-[var(--color-saffron-deep)] mb-4">
              {t("seva.eyebrow")}
            </p>
            <h2 className="display-2 text-[var(--color-maroon-deep)]">
              {t("seva.title")}
            </h2>
            <p className="mt-4 font-[var(--font-cormorant)] text-lg text-[var(--color-ink)]/80 italic max-w-2xl mx-auto">
              {t("seva.subtitle")}
            </p>
            <OmDivider />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {initiatives.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} variant="up" delay={i * 0.1}>
                <article className="ornate-frame bg-[var(--color-cream)] p-8 lift h-full group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-[var(--color-saffron)]/10 text-[var(--color-saffron-deep)] group-hover:bg-[var(--color-saffron-deep)] group-hover:text-[var(--color-cream)] transition-all">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-[var(--font-tiro)] text-[var(--color-saffron-deep)] text-lg mb-1">
                        {s.sanskrit}
                      </p>
                      <h3 className="font-[var(--font-cinzel)] text-xl text-[var(--color-maroon-deep)] tracking-wide">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <div className="divider-line max-w-[60px] mb-4" />
                  <p className="body-copy text-[var(--color-ink)]/85">
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
