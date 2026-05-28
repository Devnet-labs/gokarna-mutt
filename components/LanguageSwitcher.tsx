"use client";

import { useT, Lang } from "@/lib/i18n";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const langs: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" }
];

export default function LanguageSwitcher({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const { lang, setLang } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = langs.find((l) => l.code === lang) ?? langs[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const triggerColor = light
    ? "border-[var(--color-gold)]/50 text-[var(--color-gold-light)] hover:border-[var(--color-gold-light)] hover:bg-[var(--color-gold)]/10"
    : "border-[var(--color-gold)]/40 text-[var(--color-maroon-deep)] hover:border-[var(--color-saffron-deep)] hover:bg-[var(--color-saffron)]/10";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs font-[var(--font-cinzel)] tracking-wide ${triggerColor}`}
        aria-label="Change language"
      >
        <Globe size={14} />
        <span className="hidden sm:inline">{current.native}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-[var(--color-cream)] border border-[var(--color-gold)]/40 shadow-xl rounded-md overflow-hidden z-50">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-[var(--color-saffron)]/10 transition-colors ${
                lang === l.code ? "text-[var(--color-saffron-deep)] font-semibold" : "text-[var(--color-ink)]"
              }`}
            >
              <span>
                <span className="block font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.2em] opacity-60">
                  {l.label}
                </span>
                <span className="text-base">{l.native}</span>
              </span>
              {lang === l.code && <Check size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
