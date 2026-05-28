import ContentPage from "@/components/ContentPage";

export const metadata = { title: "Vidyadhiraj Puraskar — Partagali Math" };

export default function VidyadhirajPuraskarPage() {
  return (
    <ContentPage
      eyebrow="विद्याधिराज पुरस्कार"
      title="Vidyadhiraj Puraskar"
      subtitle="Instituted in remembrance of Shri Vidyadhiraja Teerth Swamiji — recognising service to dharma and learning."
    >
      <p className="italic text-[var(--color-ink)]/70">
        The Vidyadhiraj Puraskar is conferred to honour individuals who have rendered outstanding service to dharma and learning.
        The official memento for the award is a replica of the sacred <a className="text-[var(--color-saffron-deep)] underline" href="/vatavraksha">Vatavraksha</a> —
        the thousand-year-old banyan tree near the Math.
      </p>
      <p className="mt-6">Detailed recipient list and award history will be published here soon.</p>
    </ContentPage>
  );
}
