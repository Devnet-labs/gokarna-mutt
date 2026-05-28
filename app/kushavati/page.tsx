import ContentPage from "@/components/ContentPage";

export const metadata = { title: "Kushavati — Partagali Math" };

export default function KushavatiPage() {
  return (
    <ContentPage
      eyebrow="कुशावती"
      title="Kushavati"
      subtitle="The sacred river created by Brahmadeva from a point of Kusha grass — destined to serve Lord Ramadeva."
    >
      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-2 mb-4">
        Divine Origin
      </h2>
      <p>
        The Kushavati river was created by Brahmadeva from the Kusha grass point of his water vessel
        “with an intention to offer the service to Shri Ramadev in the future.” Scholars attribute the river’s
        name to this sacred origin.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Fulfillment of Destiny
      </h2>
      <p>
        On <strong>October 2, 2009</strong>, the river experienced a significant flood. The water rose
        “more than 25 feet higher than the normal” and entered the Math’s sanctum sanctorum,
        performing symbolic worship of Lord Ramadeva. This was witnessed by
        Shri Vidyadhiraja Teertha Swamiji — the fulfilment of the divine purpose described in ancient texts.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Geographical Significance
      </h2>
      <p>
        The Kushavati flows eastward to westward, then turns northward near Partagali Math. According to
        the <em>Agama Shastra</em>, this location is called <strong>Ishanya Plava</strong> and is designated
        as <strong>Devabhumi, Govithi</strong> — sacred land with divine presence. Its proximity to the sea further enhances its spiritual importance.
      </p>

      <h2 className="font-[var(--font-cinzel)] text-2xl text-[var(--color-maroon-deep)] mt-10 mb-4">
        Discovery of the Math’s Site
      </h2>
      <p>
        In <strong>1646 AD</strong>, Shri Ramachandra Teerth Swamiji discovered cattle at the riverside drinking water — a sign of the area’s significance.
        He established the Partagali Math here, initiating the institution’s prosperity and growth into a major religious centre with numerous branch temples.
      </p>
    </ContentPage>
  );
}
