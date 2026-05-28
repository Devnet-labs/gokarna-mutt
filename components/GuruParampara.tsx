"use client";

import OmDivider from "./OmDivider";
import Reveal from "./Reveal";
import { useT } from "@/lib/i18n";
import { Lotus, Crown } from "./Icons";

const gurus = [
  { n: 1, name: "Shri Narayan Teerth", date: "30-04-1517", place: "Gopi River, Bhatkal" },
  { n: 2, name: "Shri Vasudev Teerth", date: "23-04-1518", place: "Pandharpur" },
  { n: 3, name: "Shri Jeevottam Teerth", date: "27-08-1588", place: "Bhatkal" },
  { n: 4, name: "Shri Purushottam Teerth", date: "05-12-1588", place: "Gokarna" },
  { n: 5, name: "Shri Anujeevottam Teerth", date: "08-11-1637", place: "Divachala, Goa" },
  { n: 6, name: "Shri Ramachandra Teerth", date: "02-05-1665", place: "Rivon, Goa" },
  { n: 7, name: "Shri Digvijaya Ramachandra Teerth", date: "24-02-1669", place: "Ankola" },
  { n: 8, name: "Shri Raghuchandra Teerth", date: "13-01-1683", place: "Honavara" },
  { n: 9, name: "Shri Lakshminarayan Teerth", date: "09-03-1703", place: "Nasik" },
  { n: 10, name: "Shri Lakshmikantha Teerth", date: "26-11-1707", place: "Honavar" },
  { n: 11, name: "Shri Ramaakantha Teerth", date: "29-11-1750", place: "Ankola" },
  { n: 12, name: "Shri Kamalakantha Teerth", date: "16-01-1758", place: "Gokarna" },
  { n: 13, name: "Shri Shrikantha Teerth", date: "04-07-1786", place: "Partagali" },
  { n: 14, name: "Shri Boovijaya Ramachandra Teerth", date: "23-11-1803", place: "Ankola" },
  { n: 15, name: "Shri Ramanatha Teerth", date: "19-03-1804", place: "Venkatapur" },
  { n: 16, name: "Shri Lakshminath Teerth", date: "—", place: "Badoda" },
  { n: 17, name: "Shri Anand Teerth", date: "19-08-1828", place: "Partagali" },
  { n: 18, name: "Shri Poornaprajna Teerth", date: "23-05-1879", place: "Partagali" },
  { n: 19, name: "Shri Padmanabha Teerth", date: "01-07-1892", place: "Partagali" },
  { n: 20, name: "Shri Indirakantha Teerth", date: "07-04-1942", place: "Partagali" },
  { n: 21, name: "Shri Kamalanatha Teerth", date: "—", place: "Partagali" },
  { n: 22, name: "Shri Dwarakanatha Teerth", date: "25-03-1973", place: "Partagali" },
  { n: 23, name: "Shri Vidyadhiraja Teerth", date: "19-07-2021", place: "Partagali" },
  { n: 24, name: "Shri Vidyadheesh Teerth", date: "Present Peethadhipati", place: "Partagali", current: true }
];

export default function GuruParampara() {
  const { t } = useT();

  return (
    <section id="guruparampara" className="relative py-24 px-6 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-[var(--color-saffron-deep)] mb-4">
              {t("guru.eyebrow")}
            </p>
            <h2 className="display-2 text-[var(--color-maroon-deep)]">
              {t("guru.title")}
            </h2>
            <p className="mt-4 font-[var(--font-cormorant)] text-lg text-[var(--color-ink)]/80 italic max-w-2xl mx-auto">
              {t("guru.subtitle")}
            </p>
            <OmDivider />
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-saffron-deep)] to-transparent" />

          <div className="space-y-6 md:space-y-2">
            {gurus.map((g, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={g.n} variant={left ? "left" : "right"} delay={0.05}>
                  <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${left ? "" : "md:[direction:rtl]"}`}>
                    <div className={`md:[direction:ltr] ${left ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <div
                        className={`relative ornate-frame bg-[var(--color-cream)] p-6 lift group ${
                          g.current ? "border-2 border-[var(--color-saffron-deep)]" : ""
                        }`}
                      >
                        <div className="flex items-baseline gap-3 mb-2 justify-start">
                          <span className="font-[var(--font-cinzel)] text-3xl text-[var(--color-saffron-deep)]">
                            {String(g.n).padStart(2, "0")}
                          </span>
                          {g.current && (
                            <span className="text-[10px] uppercase tracking-widest bg-[var(--color-saffron-deep)] text-[var(--color-cream)] px-2 py-0.5 flex items-center gap-1">
                              <Crown size={10} /> {t("guru.present")}
                            </span>
                          )}
                        </div>
                        <h3 className="font-[var(--font-cinzel)] text-lg md:text-xl text-[var(--color-maroon-deep)] mb-2">
                          {g.name}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-ink)]/70">
                          <span>
                            <span className="uppercase tracking-widest mr-1">{t("guru.mahaNirvan")}:</span>
                            {g.date}
                          </span>
                          <span>
                            <span className="uppercase tracking-widest mr-1">{t("guru.brindavan")}:</span>
                            {g.place}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex md:[direction:ltr] items-center justify-center relative">
                      <div className={`absolute left-1/2 -translate-x-1/2 z-10 ${g.current ? "scale-150" : ""}`}>
                        <Lotus size={20} className={g.current ? "text-[var(--color-saffron-deep)]" : "text-[var(--color-gold)]"} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
