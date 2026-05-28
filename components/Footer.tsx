"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-cream)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <Image src="/images/seal.png" alt="seal" width={64} height={64} className="opacity-90" />
          <p className="font-[var(--font-tiro)] text-[var(--color-gold-light)] text-lg">
            {t("footer.invocation")}
          </p>
          <h3 className="font-[var(--font-cinzel)] text-sm sm:text-lg tracking-widest text-gilded">
            SHREE SAMSTHAN GOKARN PARTAGALI JEEVOTTAM MATH
          </h3>
          <div className="divider-line max-w-xs w-full" />

          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-[var(--color-gold-light)] transition-colors">{t("nav.home")}</Link>
            <span className="text-[var(--color-gold)]/30">·</span>
            <Link href="/shaka-mathas" className="hover:text-[var(--color-gold-light)] transition-colors">{t("nav.shakaMathas")}</Link>
            <span className="text-[var(--color-gold)]/30">·</span>
            <Link href="/jeevottam-puraskar" className="hover:text-[var(--color-gold-light)] transition-colors">Jeevottam Puraskar</Link>
            <span className="text-[var(--color-gold)]/30">·</span>
            <Link href="/#contact" className="hover:text-[var(--color-gold-light)] transition-colors">{t("nav.contact")}</Link>
          </nav>

          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-cream)]/60">
            Partagali · Canacona · Goa · India
          </p>
          <p className="text-xs text-[var(--color-cream)]/40 mt-4">
            © {new Date().getFullYear()} Shree Samsthan Gokarn Partagali Jeevottam Math. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
