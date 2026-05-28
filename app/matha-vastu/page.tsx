import ContentPage from "@/components/ContentPage";

export const metadata = { title: "Matha Vastu — Partagali Math" };

export default function MathaVastuPage() {
  return (
    <ContentPage
      eyebrow="मठ वास्तु"
      title="Matha Vastu"
      subtitle="The sacred architecture of the Math — built per Vastu Shastra, on a ghat established by Bhargava Rama."
    >
      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-2 mb-4">
        Location & Foundation
      </h2>
      <p>
        The Partagali Math stands in the northern section of a ghat established by Shree Bhargava Rama.
        In the year <strong>1656</strong>, as guided by Kamadhenu, the sixth Swamiji
        Shree Ramchandra Teerth installed the stone idols of Shree Ram, Sita Mata, and Shree Lakshmana found at Gokarna.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Setting & Significance
      </h2>
      <p>
        The chosen site sits alongside the Kushavati river in a tranquil environment — described as
        “a quiet and serene area like the Panchavati forest.” Originally a desolate mountain forest,
        it became the headquarters of the Math, and has remained so for centuries.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Architecture
      </h2>
      <p>
        The Math building has all the special features as per <em>Vastu Shastra</em>. The complex has continuously expanded and developed,
        always within these architectural and spiritual considerations.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Historical Timeline
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li className="flex gap-4">
          <span className="font-[var(--font-cinzel)] text-[var(--color-saffron-deep)] min-w-[5rem]">1703</span>
          <span>Renovation by the 16th Guru, Shree Laxminath Tirtha.</span>
        </li>
        <li className="flex gap-4">
          <span className="font-[var(--font-cinzel)] text-[var(--color-saffron-deep)] min-w-[5rem]">1810</span>
          <span>Re-establishment of the three main deities with elaborate ceremonies.</span>
        </li>
        <li className="flex gap-4">
          <span className="font-[var(--font-cinzel)] text-[var(--color-saffron-deep)] min-w-[5rem]">1966</span>
          <span>Gold-plated kalash installed atop the sanctum.</span>
        </li>
        <li className="flex gap-4">
          <span className="font-[var(--font-cinzel)] text-[var(--color-saffron-deep)] min-w-[5rem]">1977–86</span>
          <span>Three-phase modernization — new entrance, offices, schools, and residential quarters.</span>
        </li>
        <li className="flex gap-4">
          <span className="font-[var(--font-cinzel)] text-[var(--color-saffron-deep)] min-w-[5rem]">Recent</span>
          <span>Air-conditioned rooms and dining facilities added for devotees.</span>
        </li>
      </ul>
    </ContentPage>
  );
}
