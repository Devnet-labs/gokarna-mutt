"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { shakaMathas } from "@/lib/shakaMathas";
import { shakaDetails } from "@/lib/shakaDetails";
import { useT } from "@/lib/i18n";
import { MapPin, User, Calendar, Sparkles, Phone, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";

export default function ShakaMathasPage() {
  const { t } = useT();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return shakaMathas;
    const q = query.toLowerCase();
    return shakaMathas.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q) ||
        m.founder.toLowerCase().includes(q) ||
        String(m.year).includes(q)
    );
  }, [query]);

  return (
    <main className="overflow-x-hidden bg-mandala">
      <ScrollProgress />
      <Navbar />
      <PageHeader
        eyebrow="शाखा मठ"
        title={t("shaka.title")}
        subtitle={t("shaka.subtitle")}
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
              <p className="font-[var(--font-cormorant)] text-lg text-[var(--color-ink)]/80 italic">
                Showing <span className="font-bold text-[var(--color-saffron-deep)]">{filtered.length}</span> of{" "}
                {shakaMathas.length} Shaka Mathas
              </p>
              <input
                type="text"
                placeholder="Search by name, location, founder, year..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full sm:w-80 px-4 py-2 bg-[var(--color-cream)] border border-[var(--color-gold)]/40 rounded-md text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-saffron-deep)] font-[var(--font-cormorant)]"
              />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m, i) => {
              const hasDetail = Boolean(shakaDetails[m.n]);
              return (
                <Reveal key={m.n} variant="up" delay={(i % 6) * 0.05}>
                  <Link
                    href={`/shaka-mathas/${m.n}`}
                    className="ornate-frame bg-[var(--color-cream)] p-6 lift h-full group relative overflow-hidden block"
                  >
                    <div className="absolute top-4 right-4 font-[var(--font-cinzel)] text-4xl text-[var(--color-saffron)]/15 group-hover:text-[var(--color-saffron)]/30 transition-colors">
                      {String(m.n).padStart(2, "0")}
                    </div>

                    <div className="pr-12 mb-3">
                      <p
                        style={{ fontSize: "14px" }}
                        className="caption text-[var(--color-saffron-deep)] mb-1.5 inline-flex items-center gap-1.5"
                      >
                        <MapPin size={13} /> {m.location}
                      </p>
                      <h3
                        style={{ fontSize: "20px", lineHeight: 1.3 }}
                        className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] tracking-wide font-bold"
                      >
                        {m.name}
                      </h3>
                    </div>

                    <div className="divider-line max-w-[60px] mb-4" />

                    <ul className="space-y-3 text-[var(--color-ink)]/85 font-[var(--font-cormorant)]" style={{ fontSize: "17px" }}>
                      <li className="flex items-start gap-2">
                        <User size={16} className="text-[var(--color-saffron-deep)] mt-1 flex-shrink-0" />
                        <div>
                          <span className="caption text-[var(--color-saffron-deep)] block mb-0.5">
                            {t("shaka.founder")}
                          </span>
                          {m.founder}
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Calendar size={16} className="text-[var(--color-saffron-deep)] mt-1 flex-shrink-0" />
                        <div>
                          <span className="caption text-[var(--color-saffron-deep)] block mb-0.5">
                            {t("shaka.founded")}
                          </span>
                          {m.year}
                        </div>
                      </li>
                      {m.deity && (
                        <li className="flex items-start gap-2">
                          <Sparkles size={16} className="text-[var(--color-saffron-deep)] mt-1 flex-shrink-0" />
                          <div>
                            <span className="caption text-[var(--color-saffron-deep)] block mb-0.5">
                              {t("shaka.deity")}
                            </span>
                            {m.deity}
                          </div>
                        </li>
                      )}
                      <li className="flex items-start gap-2">
                        <Phone size={16} className="text-[var(--color-saffron-deep)] mt-1 flex-shrink-0" />
                        <div>
                          <span className="caption text-[var(--color-saffron-deep)] block mb-0.5">
                            {t("shaka.phone")}
                          </span>
                          {m.phone}
                        </div>
                      </li>
                    </ul>

                    <div className="mt-5 pt-4 border-t border-[var(--color-gold)]/30 flex items-center justify-between">
                      <span className="caption text-[var(--color-saffron-deep)] group-hover:text-[var(--color-maroon-deep)] transition-colors inline-flex items-center gap-1.5">
                        View Details <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                      {hasDetail && (
                        <span className="caption text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          Live
                        </span>
                      )}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
