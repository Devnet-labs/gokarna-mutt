import ContentPage from "@/components/ContentPage";

export const metadata = { title: "Vatavraksha — Partagali Math" };

export default function VatavrakshaPage() {
  return (
    <ContentPage
      eyebrow="वटवृक्ष"
      title="Vatavraksha"
      subtitle="A thousand-year-old banyan tree — the meditative seat of saints, and the official emblem of the Vidyadhiraj Award."
    >
      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-2 mb-4">
        Description
      </h2>
      <p>
        The Vatavraksha is a massive banyan tree located approximately <strong>200 meters north</strong> of the Partagali Math headquarters.
        It measures <strong>about 235 feet</strong> east to west and <strong>225 feet</strong> north to south,
        supported by <strong>220 aerial roots</strong>.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Spiritual Significance
      </h2>
      <p>
        The tree represents <em>a Tapasya Kshetra</em> — a centre for meditation, for over a thousand years.
        Ancient sage <strong>Rishi Paingi</strong> meditated beneath it, and numerous spiritual seekers have
        subsequently visited this location, known as the <strong>Brahmasthan</strong> — a seat of Brahma.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Symbolic Meaning
      </h2>
      <p>
        The Vatavriksha is a sacred tree serving as “a mythological symbol of the uninterrupted spiritual glory and the eternal wheel of life.”
        Its spreading branches symbolize the message of Dharma radiated by the Swamijis, while its aerial roots entering the soil represent
        the devotion of the disciple towards the Gurupeetha.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Living Heritage
      </h2>
      <p>
        The tree is worshipped by the people of Partagali and adjoining areas, and is considered to be
        over a thousand years old. Its replica was chosen as the official memento for the
        <strong> Vidyadhiraj Award</strong>.
      </p>
    </ContentPage>
  );
}
