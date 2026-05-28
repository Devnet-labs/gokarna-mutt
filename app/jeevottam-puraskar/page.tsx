"use client";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import OmDivider from "@/components/OmDivider";
import { Trophy } from "lucide-react";

const recipients = [
  { year: 2011, name: "Gajanan Baburao Bhat", location: "Yallapur" },
  { year: 2011, name: "Hanumant (Puttu Pai) Mhalappa Pai", location: "Bhatkal" },
  { year: 2012, name: "Sudhakar Dasappa Shanbhagh", location: "Belagavi" },
  { year: 2012, name: "Krishnakumar Nagappa Pai", location: "Belagavi" },
  { year: 2013, name: "Shivanand Vasudev Salgaonkar", location: "Vasco" },
  { year: 2013, name: "Ramachandra Narayan Nayak", location: "Hubballi" },
  { year: 2014, name: "S. Prabhakar Kamath", location: "Mangaluru" },
  { year: 2014, name: "Ganapati S. Kamath", location: "Kumta" },
  { year: 2015, name: "Shivanand Kamath", location: "Mangaluru" },
  { year: 2015, name: "Krishna Baba Pai", location: "Kumta" }
];

export default function JeevottamPuraskarPage() {
  return (
    <main className="overflow-x-hidden bg-mandala">
      <ScrollProgress />
      <Navbar />
      <PageHeader
        eyebrow="जीवोत्तम पुरस्कार"
        title="Jeevottam Puraskar"
        subtitle="A tribute from the entire Goud Saraswat Samaj — conferred annually on the Math's foundation day (Chaitra-Pratipada)."
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="prose prose-lg max-w-none font-[var(--font-cormorant)] text-[var(--color-ink)] leading-relaxed">
              <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-2 mb-4">
                Purpose
              </h2>
              <p>
                The Math honours community members through this award — selecting “such gems from the ocean” who
                have rendered valuable service to the society, the Math, or its branches.
              </p>

              <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-8 mb-4">
                Frequency & Significance
              </h2>
              <p>
                Two personalities receive recognition each year. The award represents a tribute from the entire
                Goud Saraswat Samaj and is described as “a precious thing in one’s life, which cannot be measured in any terms.”
                The felicitation aims to inspire others toward community service.
              </p>
            </div>
          </Reveal>

          <OmDivider />

          <Reveal>
            <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mb-8 text-center tracking-wider">
              Recipients · 2011 – 2015
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {recipients.map((r, i) => (
              <Reveal key={`${r.year}-${r.name}`} variant="up" delay={(i % 4) * 0.05}>
                <div className="ornate-frame bg-[var(--color-cream)] p-5 lift flex items-start gap-4">
                  <div className="p-2 rounded-full bg-[var(--color-saffron)]/10 text-[var(--color-saffron-deep)]">
                    <Trophy size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-[var(--font-cinzel)] text-xs uppercase tracking-widest text-[var(--color-saffron-deep)] mb-1">
                      {r.year}
                    </div>
                    <h3 className="font-[var(--font-cinzel)] text-base text-[var(--color-maroon-deep)] mb-1">
                      {r.name}
                    </h3>
                    <p className="text-sm text-[var(--color-ink)]/70 italic">{r.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
