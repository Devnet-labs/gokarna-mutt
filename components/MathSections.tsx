"use client";

import Link from "next/link";
import OmDivider from "./OmDivider";
import Reveal from "./Reveal";
import { useT } from "@/lib/i18n";
import { Building2, Waves, Ghost, TreePine, Landmark, Award, Trophy, ArrowRight } from "lucide-react";

const sections = [
  { slug: "matha-vastu", title: "Matha Vastu", sanskrit: "मठ वास्तु", icon: Building2,
    desc: "The sacred architecture of the Math along the Kushavati — designed per Vastu Shastra and refined across centuries." },
  { slug: "kushavati", title: "Kushavati", sanskrit: "कुशावती", icon: Waves,
    desc: "The holy river created by Brahmadeva from Kusha grass — destined to serve Lord Ramadeva at this very shore." },
  { slug: "narayan-bhoot", title: "Narayan Bhoot", sanskrit: "नारायण भूत", icon: Ghost,
    desc: "The legend of the entity subdued during Ram-Navami — now an integral part of the Math's annual rituals." },
  { slug: "vatavraksha", title: "Vatavraksha", sanskrit: "वटवृक्ष", icon: TreePine,
    desc: "The thousand-year-old banyan — 235 feet wide, 220 aerial roots — a tapasya kshetra of saints and sages." },
  { slug: "museum", title: "Museum", sanskrit: "संग्रहालय", icon: Landmark,
    desc: "Manuscripts, artefacts, and treasures that chronicle five centuries of sacred custodianship." },
  { slug: "vidyadhiraj-puraskar", title: "Vidyadhiraj Puraskar", sanskrit: "विद्याधिराज पुरस्कार", icon: Award,
    desc: "An honour instituted in remembrance of Shri Vidyadhiraja Teerth — recognising service to dharma and learning." },
  { slug: "jeevottam-puraskar", title: "Jeevottam Puraskar", sanskrit: "जीवोत्तम पुरस्कार", icon: Trophy,
    desc: "Conferred annually on Chaitra-Pratipada to honour exemplary service to the Samaj and the Math." }
];

export default function MathSections() {
  const { t } = useT();

  return (
    <section id="math" className="relative py-24 px-6 bg-[var(--color-cream)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-[var(--color-saffron-deep)] mb-4">
              {t("math.eyebrow")}
            </p>
            <h2 className="display-2 text-[var(--color-maroon-deep)]">
              {t("math.title")}
            </h2>
            <p className="mt-4 font-[var(--font-cormorant)] text-lg text-[var(--color-ink)]/80 italic max-w-2xl mx-auto">
              {t("math.subtitle")}
            </p>
            <OmDivider />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} variant="up" delay={(i % 3) * 0.1}>
                <Link
                  href={`/${s.slug}`}
                  className="ornate-frame bg-[var(--color-parchment)] p-8 lift group relative overflow-hidden block h-full"
                >
                  <div className="absolute top-4 right-4 font-[var(--font-cinzel)] text-5xl text-[var(--color-saffron)]/15 group-hover:text-[var(--color-saffron)]/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Icon className="text-[var(--color-saffron-deep)] mb-3" size={28} />
                  <p className="font-[var(--font-tiro)] text-[var(--color-saffron-deep)] text-xl mb-2">
                    {s.sanskrit}
                  </p>
                  <h3 className="font-[var(--font-cinzel)] text-xl text-[var(--color-maroon-deep)] mb-3 tracking-wide">
                    {s.title}
                  </h3>
                  <div className="divider-line max-w-[60px] mb-4" />
                  <p className="font-[var(--font-cormorant)] text-base text-[var(--color-ink)]/85 leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[var(--color-saffron-deep)] font-[var(--font-cinzel)] group-hover:gap-2 transition-all">
                    {t("math.explore")} <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
