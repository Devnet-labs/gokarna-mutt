import ContentPage from "@/components/ContentPage";

export const metadata = { title: "Museum — Partagali Math" };

export default function MuseumPage() {
  return (
    <ContentPage
      eyebrow="संग्रहालय"
      title="Museum"
      subtitle="A treasury of manuscripts, artefacts, and sacred objects chronicling five centuries of custodianship."
    >
      <p className="italic text-[var(--color-ink)]/70">
        The Museum at Partagali Math houses manuscripts, artefacts, and treasures that chronicle five centuries of sacred custodianship.
        Detailed exhibits and visitor information will be published here soon.
      </p>
      <p className="mt-6">
        For visits and arrangements, please refer to the <a className="text-[var(--color-saffron-deep)] underline" href="/#contact">Contact</a> section.
      </p>
    </ContentPage>
  );
}
