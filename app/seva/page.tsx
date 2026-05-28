"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";
import { Lotus } from "@/components/Icons";
import { sevas, formatINR, type Seva } from "@/lib/sevas";
import { Check, User, Phone, Mail, Calendar, MessageSquare, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Form = {
  name: string;
  phone: string;
  email: string;
  date: string;
  address: string;
  notes: string;
};

const EMPTY: Form = { name: "", phone: "", email: "", date: "", address: "", notes: "" };

export default function SevaBookingPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [form, setForm] = useState<Form>(EMPTY);
  const [submitted, setSubmitted] = useState<null | { ref: string; total: number; count: number }>(null);

  const total = useMemo(
    () => sevas.filter((s) => selected.has(s.id)).reduce((sum, s) => sum + s.amount, 0),
    [selected]
  );

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const canSubmit = selected.size > 0 && form.name.trim() && form.phone.trim();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const ref = "SVA-" + Date.now().toString(36).toUpperCase().slice(-6);
    setSubmitted({ ref, total, count: selected.size });
  };

  const reset = () => {
    setSelected(new Set());
    setForm(EMPTY);
    setSubmitted(null);
  };

  return (
    <main className="overflow-x-hidden bg-mandala">
      <ScrollProgress />
      <Navbar />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--color-saffron-deep)] hover:text-[var(--color-maroon-deep)] text-xs uppercase tracking-widest font-[var(--font-cinzel)] font-bold transition-colors"
          >
            <ArrowLeft size={14} /> Back
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Seva list */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="font-[var(--font-cinzel)] text-base text-[var(--color-maroon-deep)] tracking-[0.2em] uppercase font-bold">
                  Available Sevas
                </h2>
                <span className="caption text-[var(--color-saffron-deep)]">
                  {selected.size} selected
                </span>
              </div>
            </Reveal>

            <ul className="space-y-3">
              {sevas.map((s, i) => (
                <Reveal key={s.id} variant="up" delay={(i % 6) * 0.04}>
                  <SevaCard
                    seva={s}
                    checked={selected.has(s.id)}
                    onToggle={() => toggle(s.id)}
                  />
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <Reveal variant="right">
                <form
                  onSubmit={submit}
                  className="ornate-frame bg-[var(--color-cream)] p-6 sm:p-8 space-y-5"
                >
                  <div className="text-center mb-2">
                    <p className="caption text-[var(--color-saffron-deep)]">Your Sankalpa</p>
                    <h3 className="font-[var(--font-cinzel)] text-lg text-[var(--color-maroon-deep)] mt-1 tracking-[0.15em] uppercase font-bold">
                      Booking Details
                    </h3>
                  </div>

                  <div className="ornate-frame bg-[var(--color-parchment)] p-4 text-center">
                    <div className="caption text-[var(--color-saffron-deep)]">Selected</div>
                    <div
                      style={{ fontSize: "18px" }}
                      className="font-[var(--font-cinzel)] text-gilded mt-1 font-bold"
                    >
                      {selected.size} {selected.size === 1 ? "seva" : "sevas"}
                    </div>
                  </div>

                  <Field
                    icon={<User size={14} />}
                    label="Full Name"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Your full name"
                  />
                  <Field
                    icon={<Phone size={14} />}
                    label="Phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder="+91 9XXXXXXXXX"
                  />
                  <Field
                    icon={<Mail size={14} />}
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="you@example.com"
                  />
                  <Field
                    icon={<Calendar size={14} />}
                    label="Preferred Date"
                    type="date"
                    value={form.date}
                    onChange={(v) => setForm({ ...form, date: v })}
                  />
                  <Field
                    icon={<MapPin size={14} />}
                    label="Address"
                    value={form.address}
                    onChange={(v) => setForm({ ...form, address: v })}
                    placeholder="City, State"
                  />
                  <Field
                    icon={<MessageSquare size={14} />}
                    label="Notes / Sankalpa Details"
                    textarea
                    value={form.notes}
                    onChange={(v) => setForm({ ...form, notes: v })}
                    placeholder="Any special intention, gotra, nakshatra, etc."
                  />

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-b from-[var(--color-gold-light)] via-[var(--color-gold)] to-[#a37a14] text-[var(--color-maroon-deep)] font-[var(--font-cinzel)] font-bold text-sm tracking-[0.25em] uppercase shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_40px_-10px_rgba(233,196,106,0.5)] transition-all ring-1 ring-inset ring-white/40 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                  >
                    <Lotus size={18} />
                    Submit Booking
                  </button>

                  {!canSubmit && (
                    <p className="caption text-center text-[var(--color-ink)]/55">
                      Select at least one seva and enter your name + phone
                    </p>
                  )}
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="ornate-frame bg-[var(--color-cream)] p-8 sm:p-10 max-w-md w-full text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-b from-[var(--color-gold-light)] via-[var(--color-gold)] to-[#a37a14] flex items-center justify-center ring-1 ring-inset ring-white/40">
                <Check size={36} className="text-[var(--color-maroon-deep)]" strokeWidth={3} />
              </div>
              <p className="caption text-[var(--color-saffron-deep)] mb-2">सेवा स्वीकृत</p>
              <h3 className="font-[var(--font-cinzel)] text-lg text-gilded mb-4 font-bold tracking-wider uppercase">
                Seva Booking Received
              </h3>
              <p className="body-copy text-[var(--color-ink)]/85 mb-6">
                Hari Om {form.name}. Your booking for{" "}
                <strong>{submitted.count} {submitted.count === 1 ? "seva" : "sevas"}</strong>{" "}
                has been received. Our office will contact you on <strong>{form.phone}</strong>{" "}
                within 24 hours to confirm dates, arrangements, and offering details.
              </p>
              <div className="ornate-frame bg-[var(--color-parchment)] p-3 mb-6">
                <div className="caption text-[var(--color-saffron-deep)] mb-1">Reference</div>
                <div className="font-[var(--font-cinzel)] text-lg text-[var(--color-maroon-deep)] tracking-widest">
                  {submitted.ref}
                </div>
              </div>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[var(--color-saffron-deep)] text-[var(--color-cream)] font-[var(--font-cinzel)] font-bold text-xs tracking-[0.25em] uppercase hover:bg-[var(--color-saffron)] transition-all"
              >
                Book Another Seva
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

function SevaCard({ seva, checked, onToggle }: { seva: Seva; checked: boolean; onToggle: () => void }) {
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex items-start gap-4 p-4 sm:p-5 ornate-frame lift text-left transition-all ${
          checked
            ? "bg-[var(--color-cream)] ring-2 ring-[var(--color-saffron-deep)]"
            : "bg-[var(--color-cream)] hover:bg-[var(--color-parchment)]"
        }`}
      >
        <div
          className={`mt-0.5 w-6 h-6 shrink-0 rounded-md border-2 flex items-center justify-center transition-all ${
            checked
              ? "bg-[var(--color-saffron-deep)] border-[var(--color-saffron-deep)] text-[var(--color-cream)]"
              : "bg-transparent border-[var(--color-gold)]"
          }`}
        >
          {checked && <Check size={14} strokeWidth={3} />}
        </div>

        <div className="flex-1 min-w-0">
          <h3
            style={{ fontSize: "18px" }}
            className="font-[var(--font-cinzel)] text-[var(--color-maroon-deep)] tracking-wide font-semibold"
          >
            {seva.name}
          </h3>
          {seva.tagline && (
            <p
              style={{ fontSize: "16px" }}
              className="text-[var(--color-ink)]/70 mt-1.5 italic font-[var(--font-cormorant)] leading-snug"
            >
              {seva.tagline}
            </p>
          )}
        </div>
      </button>
    </li>
  );
}

function Field({
  icon,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  textarea = false,
  placeholder
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full px-4 py-2.5 bg-[var(--color-parchment)] border border-[var(--color-gold)]/40 rounded-md text-[var(--color-ink)] font-[var(--font-cormorant)] text-base focus:outline-none focus:border-[var(--color-saffron-deep)] focus:ring-1 focus:ring-[var(--color-saffron-deep)] transition-colors";
  return (
    <label className="block">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[var(--color-saffron-deep)]">{icon}</span>
        <span className="caption text-[var(--color-saffron-deep)]">
          {label}
          {required && <span className="text-[var(--color-maroon-deep)]">*</span>}
        </span>
      </div>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </label>
  );
}
