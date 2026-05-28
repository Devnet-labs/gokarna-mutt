"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Home, Crown, GitBranch, Network, Phone, PlayCircle } from "lucide-react";
import { useT } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const { t, lang } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLabels: Record<string, string> = {
    "nav.peethadhipati": "Peethadhipati",
    "nav.guruparampara": "Lineage",
    "nav.partagaliMath": "The Math",
    "nav.shakaMathas": "Shakas",
    "nav.media": "Gallery",
    "nav.contact": "Contact"
  };

  const links = [
    { href: "/#peethadhipati", key: "nav.peethadhipati", icon: Crown },
    { href: "/#guruparampara", key: "nav.guruparampara", icon: GitBranch },
    { href: "/#math", key: "nav.partagaliMath", icon: Home },
    { href: "/shaka-mathas", key: "nav.shakaMathas", icon: Network },
    { href: "/#video", key: "nav.media", icon: PlayCircle },
    { href: "/#contact", key: "nav.contact", icon: Phone }
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-[var(--color-maroon-deep)]/85 backdrop-blur-md ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <nav className="max-w-[1500px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1.2, ease: "easeInOut" }}>
            <Image
              src="/images/seal.png"
              alt="Partagali Math seal"
              width={52}
              height={52}
              className="drop-shadow-md"
            />
          </motion.div>
          <div className="leading-tight hidden sm:block">
            <div className="font-[var(--font-cinzel)] text-[15px] lg:text-base tracking-[0.12em] font-bold whitespace-nowrap text-[var(--color-gold-light)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              PARTAGALI JEEVOTTAM MATH
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] mt-0.5 whitespace-nowrap text-[var(--color-gold-light)]/85 font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              · Shree Samsthan Gokarn ·
            </div>
          </div>
        </Link>

        <ul className="hidden xl:flex items-center gap-0.5 min-w-0">
          {links.map((l) => {
            const Icon = l.icon;
            const label = lang === "en" ? desktopLabels[l.key] : t(l.key as never);
            return (
              <li key={l.href} className="shrink-0">
                <Link
                  href={l.href}
                  className="flex items-center gap-1.5 px-2.5 py-2 rounded-md text-[10.5px] font-[var(--font-cinzel)] font-bold tracking-[0.18em] uppercase whitespace-nowrap transition-all group text-[var(--color-gold-light)] hover:text-[var(--color-cream)] hover:bg-[var(--color-gold)]/10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
                >
                  <Icon size={13} className="opacity-80 group-hover:opacity-100 shrink-0" />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <LanguageSwitcher light />
          <button
            aria-label="Open menu"
            className="xl:hidden p-2 rounded-md transition-colors text-[var(--color-gold-light)] hover:bg-[var(--color-gold)]/10"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[var(--color-maroon-deep)] border-t border-[var(--color-gold)]/25 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1 max-w-[1500px] mx-auto">
              {links.map((l, i) => {
                const Icon = l.icon;
                return (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-3 px-3 rounded-md text-[var(--color-gold-light)] font-[var(--font-cinzel)] font-bold text-sm tracking-[0.15em] uppercase hover:bg-[var(--color-gold)]/10 hover:text-[var(--color-cream)] transition-colors"
                    >
                      <Icon size={16} className="text-[var(--color-gold-light)]" />
                      {t(l.key as never)}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
