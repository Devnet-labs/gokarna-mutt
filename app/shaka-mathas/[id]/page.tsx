"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OmDivider from "@/components/OmDivider";
import { shakaMathas } from "@/lib/shakaMathas";
import { shakaDetails, type Amenity } from "@/lib/shakaDetails";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  User,
  Calendar,
  Sparkles,
  Bed,
  Clock,
  CircleCheck,
  CircleX,
  ParkingCircle,
  Wifi,
  Utensils,
  UtensilsCrossed,
  AirVent,
  Fan,
  BookOpen,
  Flame,
  Trees,
  Accessibility,
  ShowerHead,
  Heart
} from "lucide-react";

const amenityMeta: Record<Amenity, { label: string; icon: typeof ParkingCircle }> = {
  parking: { label: "Parking", icon: ParkingCircle },
  wifi: { label: "Wi-Fi", icon: Wifi },
  kitchen: { label: "Bhojanshala", icon: Utensils },
  dining: { label: "Dining Hall", icon: UtensilsCrossed },
  "ac-rooms": { label: "AC Rooms", icon: AirVent },
  "non-ac-rooms": { label: "Non-AC Rooms", icon: Fan },
  library: { label: "Library", icon: BookOpen },
  "puja-hall": { label: "Puja Hall", icon: Flame },
  garden: { label: "Garden", icon: Trees },
  wheelchair: { label: "Wheelchair Access", icon: Accessibility },
  wash: { label: "Washrooms", icon: ShowerHead },
  "first-aid": { label: "First Aid", icon: Heart }
};

export default function ShakaDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const math = shakaMathas.find((m) => m.n === id);
  const details = shakaDetails[id];

  if (!math) return notFound();

  // If no detail record yet — show a graceful "details coming soon" panel.
  if (!details) {
    return (
      <main className="overflow-x-hidden bg-mandala min-h-screen">
        <ScrollProgress />
        <Navbar />
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/shaka-mathas"
              className="inline-flex items-center gap-2 text-[var(--color-saffron-deep)] hover:text-[var(--color-maroon-deep)] mb-6 text-xs uppercase tracking-widest font-[var(--font-cinzel)] font-bold transition-colors"
            >
              <ArrowLeft size={14} /> Back to Shaka Mathas
            </Link>
            <h1 className="font-[var(--font-cinzel)] text-3xl text-[var(--color-maroon-deep)] mb-3 tracking-wider">
              {math.name}
            </h1>
            <p className="font-[var(--font-cormorant)] text-lg text-[var(--color-ink)]/80 italic mb-8">
              {math.location} · est. {math.year}
            </p>
            <div className="ornate-frame bg-[var(--color-cream)] p-8 text-center">
              <Sparkles className="text-[var(--color-saffron-deep)] mx-auto mb-3" size={28} />
              <p className="font-[var(--font-cormorant)] text-lg text-[var(--color-ink)]/80 italic">
                Detailed information for this shaka math is being prepared. Please contact the
                office for inquiries.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden bg-mandala min-h-screen">
      <ScrollProgress />
      <Navbar />

      {/* Hero banner */}
      <section className="relative pt-28 pb-12">
        <div className="relative h-[40vh] sm:h-[50vh] w-full overflow-hidden">
          <Image
            src={details.heroImage}
            alt={`${math.name} — view`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-maroon-deep)]/30 via-transparent to-[var(--color-parchment)]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 -mt-24 relative z-10">
          <Link
            href="/shaka-mathas"
            className="inline-flex items-center gap-2 text-[var(--color-saffron-deep)] hover:text-[var(--color-maroon-deep)] mb-4 text-xs uppercase tracking-widest font-[var(--font-cinzel)] font-bold transition-colors bg-[var(--color-cream)]/80 backdrop-blur-sm px-3 py-1.5 rounded"
          >
            <ArrowLeft size={14} /> All Shakas
          </Link>

          <div className="ornate-frame bg-[var(--color-cream)] p-6 sm:p-8">
            <p className="caption text-[var(--color-saffron-deep)] mb-3">
              Shaka Math #{String(math.n).padStart(2, "0")} · Established {math.year}
            </p>
            <h1
              style={{ fontSize: "32px", lineHeight: 1.2 }}
              className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] mb-4 tracking-wide font-bold"
            >
              {math.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--color-ink)]/80 font-[var(--font-cormorant)]" style={{ fontSize: "17px" }}>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-[var(--color-saffron-deep)]" />
                {math.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <User size={16} className="text-[var(--color-saffron-deep)]" />
                {math.founder}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} className="text-[var(--color-saffron-deep)]" />
                {math.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Deity + About */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 items-start">
          <Reveal variant="left" className="md:col-span-2">
            <div className="ornate-frame bg-[var(--color-cream)] p-4">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={details.deityImage}
                  alt={math.deity ?? "Presiding Deity"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {math.deity && (
              <div className="text-center mt-4">
                <p className="caption text-[var(--color-saffron-deep)] mb-1">Presiding Deity</p>
                <p
                  style={{ fontSize: "18px" }}
                  className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] font-semibold"
                >
                  {math.deity}
                </p>
              </div>
            )}
          </Reveal>

          <Reveal variant="right" className="md:col-span-3">
            <p className="caption text-[var(--color-saffron-deep)] mb-3">About the Math</p>
            <h2
              style={{ fontSize: "28px", lineHeight: 1.25 }}
              className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] mb-6 font-bold tracking-wide"
            >
              History & Heritage
            </h2>
            <div className="space-y-4">
              {details.about.map((p, i) => (
                <p
                  key={i}
                  style={{ fontSize: "18px", lineHeight: 1.7 }}
                  className="font-[var(--font-cormorant)] text-[var(--color-ink)]/90"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <OmDivider />

      {/* Amenities + Rooms */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Amenities */}
          <Reveal variant="left">
            <p className="caption text-[var(--color-saffron-deep)] mb-3">Amenities</p>
            <h3
              style={{ fontSize: "24px" }}
              className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] mb-6 font-bold tracking-wide"
            >
              Facilities Available
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {details.amenities.map((a) => {
                const meta = amenityMeta[a];
                const Icon = meta.icon;
                return (
                  <div
                    key={a}
                    className="ornate-frame bg-[var(--color-cream)] p-4 flex flex-col items-center text-center gap-2"
                  >
                    <Icon size={22} className="text-[var(--color-saffron-deep)]" />
                    <span
                      style={{ fontSize: "14px" }}
                      className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] font-semibold uppercase tracking-wider"
                    >
                      {meta.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Rooms */}
          <Reveal variant="right">
            <p className="caption text-[var(--color-saffron-deep)] mb-3">Accommodation</p>
            <h3
              style={{ fontSize: "24px" }}
              className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] mb-6 font-bold tracking-wide"
            >
              Rooms & Stay
            </h3>

            <div className="ornate-frame bg-[var(--color-cream)] p-6">
              {/* Availability badge */}
              <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-[var(--color-gold)]/30">
                <div className="flex items-center gap-2">
                  <Bed className="text-[var(--color-saffron-deep)]" size={20} />
                  <span
                    style={{ fontSize: "18px" }}
                    className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] font-bold"
                  >
                    {details.rooms.totalRooms} Rooms
                  </span>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-[var(--font-cinzel)] font-bold uppercase tracking-widest ${
                    details.rooms.available
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {details.rooms.available ? (
                    <>
                      <CircleCheck size={14} /> Available
                    </>
                  ) : (
                    <>
                      <CircleX size={14} /> Not Available
                    </>
                  )}
                </span>
              </div>

              {/* Room types */}
              <ul className="space-y-3">
                {details.rooms.types.map((rt) => (
                  <li key={rt.type} className="flex items-center justify-between gap-3">
                    <div>
                      <div
                        style={{ fontSize: "16px" }}
                        className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] font-semibold"
                      >
                        {rt.type}
                      </div>
                      <div
                        style={{ fontSize: "14px" }}
                        className="font-[var(--font-cormorant)] text-[var(--color-ink)]/70 italic"
                      >
                        {rt.count} {rt.count === 1 ? "room" : "rooms"}
                      </div>
                    </div>
                    <span
                      style={{ fontSize: "16px" }}
                      className="font-[var(--font-cinzel)] text-gilded font-bold whitespace-nowrap"
                    >
                      {rt.tariff}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Daily Timings */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="caption text-[var(--color-saffron-deep)] mb-3">Daily Schedule</p>
              <h3
                style={{ fontSize: "24px" }}
                className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] font-bold tracking-wide"
              >
                Darshan & Aarti Timings
              </h3>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.timings.map((t, i) => (
              <Reveal key={t.label} variant="up" delay={(i % 3) * 0.05}>
                <div className="ornate-frame bg-[var(--color-cream)] p-4 flex items-center gap-4">
                  <Clock size={20} className="text-[var(--color-saffron-deep)] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div
                      style={{ fontSize: "16px" }}
                      className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] font-semibold tracking-wide"
                    >
                      {t.label}
                    </div>
                    <div
                      style={{ fontSize: "16px" }}
                      className="font-[var(--font-cormorant)] text-gilded font-bold"
                    >
                      {t.time}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <OmDivider />

      {/* Location map */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="caption text-[var(--color-saffron-deep)] mb-3">Location</p>
              <h3
                style={{ fontSize: "24px" }}
                className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] font-bold tracking-wide"
              >
                Find Us
              </h3>
              <p
                style={{ fontSize: "18px" }}
                className="font-[var(--font-cormorant)] italic text-[var(--color-ink)]/80 mt-3"
              >
                {math.location}
              </p>
            </div>
          </Reveal>

          <Reveal variant="scale">
            <div className="ornate-frame bg-[var(--color-cream)] p-3">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <iframe
                  src={details.mapEmbedUrl}
                  title={`${math.name} — Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="ornate-frame bg-[var(--color-cream)] p-8 text-center">
              <p className="caption text-[var(--color-saffron-deep)] mb-3">Contact this Shaka</p>
              <h3
                style={{ fontSize: "24px" }}
                className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] mb-6 font-bold tracking-wide"
              >
                Reach Out
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={`tel:${details.contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 text-[var(--color-maroon-deep)] hover:text-[var(--color-saffron-deep)] transition-colors"
                >
                  <Phone size={20} className="text-[var(--color-saffron-deep)]" />
                  <span style={{ fontSize: "18px" }} className="font-[var(--font-cinzel)] font-semibold">
                    {details.contact.phone}
                  </span>
                </a>
                {details.contact.email && (
                  <a
                    href={`mailto:${details.contact.email}`}
                    className="inline-flex items-center gap-3 text-[var(--color-maroon-deep)] hover:text-[var(--color-saffron-deep)] transition-colors"
                  >
                    <Mail size={20} className="text-[var(--color-saffron-deep)]" />
                    <span style={{ fontSize: "18px" }} className="font-[var(--font-cormorant)]">
                      {details.contact.email}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
