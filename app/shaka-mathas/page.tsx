"use client";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { shakaMathas } from "@/lib/shakaMathas";
import { useT } from "@/lib/i18n";
import { MapPin, User, Calendar, Sparkles, Phone } from "lucide-react";
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
            {filtered.map((m, i) => (
              <Reveal key={m.n} variant="up" delay={(i % 6) * 0.05}>
                <article className="ornate-frame bg-[var(--color-cream)] p-6 lift h-full group relative overflow-hidden">
                  <div className="absolute top-4 right-4 font-[var(--font-cinzel)] text-4xl text-[var(--color-saffron)]/15 group-hover:text-[var(--color-saffron)]/30 transition-colors">
                    {String(m.n).padStart(2, "0")}
                  </div>

                  <h3 className="font-[var(--font-cinzel)] text-lg text-[var(--color-maroon-deep)] mb-3 pr-12 leading-tight tracking-wide">
                    {m.name}
                  </h3>

                  <div className="divider-line max-w-[60px] mb-4" />

                  <ul className="space-y-3 text-sm text-[var(--color-ink)]/85 font-[var(--font-cormorant)]">
                    <li className="flex items-start gap-2">
                      <MapPin size={14} className="text-[var(--color-saffron-deep)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[var(--color-saffron-deep)] block">
                          {t("shaka.location")}
                        </span>
                        {m.location}
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <User size={14} className="text-[var(--color-saffron-deep)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[var(--color-saffron-deep)] block">
                          {t("shaka.founder")}
                        </span>
                        {m.founder}
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Calendar size={14} className="text-[var(--color-saffron-deep)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[var(--color-saffron-deep)] block">
                          {t("shaka.founded")}
                        </span>
                        {m.year}
                      </div>
                    </li>
                    {m.deity && (
                      <li className="flex items-start gap-2">
                        <Sparkles size={14} className="text-[var(--color-saffron-deep)] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-[var(--color-saffron-deep)] block">
                            {t("shaka.deity")}
                          </span>
                          {m.deity}
                        </div>
                      </li>
                    )}
                    <li className="flex items-start gap-2">
                      <Phone size={14} className="text-[var(--color-saffron-deep)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[var(--color-saffron-deep)] block">
                          {t("shaka.phone")}
                        </span>
                        <a
                          href={`tel:${m.phone.replace(/\s/g, "")}`}
                          className="hover:text-[var(--color-saffron-deep)] transition-colors"
                        >
                          {m.phone}
                        </a>
                      </div>
                    </li>
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
