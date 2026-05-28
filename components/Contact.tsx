"use client";

import OmDivider from "./OmDivider";
import Reveal from "./Reveal";
import { useT } from "@/lib/i18n";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  const { t } = useT();

  return (
    <section id="contact" className="relative py-24 px-6 bg-temple text-[var(--color-cream)] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-[var(--color-gold-light)] mb-4">
              {t("contact.eyebrow")}
            </p>
            <h2 className="display-2 text-gilded">
              {t("contact.title")}
            </h2>
            <OmDivider light />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Reveal variant="left">
            <div className="ornate-frame-dark bg-[var(--color-maroon-deep)]/50 p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[var(--color-gold-light)]" size={20} />
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">
                  {t("contact.address")}
                </p>
              </div>
              <p className="font-[var(--font-cormorant)] text-xl leading-relaxed text-[var(--color-cream)]">
                Shree Partagal Mutt,
                <br />
                Partagali, Poinginium,
                <br />
                Canacona, Goa,
                <br />
                India — 403702
              </p>
              <p className="mt-6 text-sm italic text-[var(--color-gold-light)]/80">
                {t("contact.river")}
              </p>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="space-y-6">
              <div className="ornate-frame-dark bg-[var(--color-maroon-deep)]/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-[var(--color-gold-light)]" size={18} />
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">
                    {t("contact.phone")}
                  </p>
                </div>
                <a
                  href="tel:+918277197777"
                  className="font-[var(--font-cinzel)] text-2xl text-gilded hover:opacity-80 transition-opacity"
                >
                  +91 8277 197 777
                </a>
              </div>

              <div className="ornate-frame-dark bg-[var(--color-maroon-deep)]/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-[var(--color-gold-light)]" size={18} />
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">
                    {t("contact.hours")}
                  </p>
                </div>
                <div className="space-y-2 font-[var(--font-cormorant)] text-lg">
                  <div className="flex justify-between gap-4">
                    <span>{t("contact.weekdays")}</span>
                    <span className="text-[var(--color-gold-light)] whitespace-nowrap">7:00 AM – 1:30 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>{t("contact.saturday")}</span>
                    <span className="text-[var(--color-gold-light)] whitespace-nowrap">7:00 AM – 8:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
