import Bootloader from "@/components/Bootloader";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Peethadhipati from "@/components/Peethadhipati";
import LineageBanner from "@/components/LineageBanner";
import GuruParampara from "@/components/GuruParampara";
import MathSections from "@/components/MathSections";
import VideoGallery from "@/components/VideoGallery";
import SocialInitiatives from "@/components/SocialInitiatives";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Bootloader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Peethadhipati />
      <LineageBanner />
      <GuruParampara />
      <MathSections />
      <VideoGallery />
      <SocialInitiatives />
      <Contact />
      <Footer />
    </main>
  );
}
