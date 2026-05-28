import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Tiro_Devanagari_Sanskrit, Noto_Sans_Kannada, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", weight: ["400", "600", "700"], display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["300", "400", "500", "600", "700"], display: "swap" });
const tiro = Tiro_Devanagari_Sanskrit({ subsets: ["devanagari"], variable: "--font-tiro", weight: ["400"], display: "swap" });
const kannada = Noto_Sans_Kannada({ subsets: ["kannada"], variable: "--font-kannada", weight: ["400", "500", "600", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Shree Samsthan Gokarn Partagali Jeevottam Math",
  description:
    "The first Gowd Saraswat Brahmin Vaishnava Math, following the Dvaita order established by Jagadguru Madhvacharya. Headquartered on the banks of the Kushavati river in Partagali, Goa.",
  icons: { icon: "/images/seal.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${tiro.variable} ${kannada.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
