import ContentPage from "@/components/ContentPage";

export const metadata = { title: "Narayan Bhoot — Partagali Math" };

export default function NarayanBhootPage() {
  return (
    <ContentPage
      eyebrow="नारायण भूत"
      title="Narayan Bhoot"
      subtitle="A legendary entity subdued by yogic power — now woven into the Math's Ram-Navami observances."
    >
      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-2 mb-4">
        The Legend
      </h2>
      <p>
        Narayan Bhoot is a supernatural entity connected to the Partagali Math’s Ram-Navami festival celebrations.
        According to the account, the deity “sent a Ghost (Pishachya) by name Narayan Bhoot” to obstruct the
        festival procession as an act of revenge.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Subdued by Yogic Power
      </h2>
      <p>
        During a Ram-Navami celebration, the festival chariot became immobilized despite devotees’ efforts.
        Swamiji <strong>Digvijaya Ramachandra Teerth</strong> responded by using Yogik power to command the entity
        “to enter into the coconut which he had brought,” and installed the coconut at the foot of the <em>Mukhyaprana</em>.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Living Ritual
      </h2>
      <p>The legend persists today in living ritual:</p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Two clothes fully soaked in oil are thrown from the top of the Gudi and burnt.</li>
        <li>Coconuts are offered as <em>naivedhya</em> to the Bhutaraja.</li>
        <li>When the palanquin approaches, coconuts are offered both to Mukhyaprana and the Bhutaraja.</li>
      </ul>
      <p>
        These rituals are integral to the Math’s Ram-Navami observances — a quiet integration of the
        once-adversarial force into the devotional life of the Math.
      </p>
    </ContentPage>
  );
}
