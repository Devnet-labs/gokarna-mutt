"use client";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import OmDivider from "./OmDivider";
import { ReactNode } from "react";

export default function ContentPage({
  eyebrow,
  title,
  subtitle,
  children
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main className="overflow-x-hidden bg-mandala">
      <ScrollProgress />
      <Navbar />
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <article className="prose prose-lg max-w-none font-[var(--font-cormorant)] text-[var(--color-ink)] leading-relaxed">
              {children}
            </article>
          </Reveal>
          <OmDivider />
        </div>
      </section>
      <Footer />
    </main>
  );
}
