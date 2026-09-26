const pillars = [
  {
    accent: "border-forest",
    tag: "Armed Forces",
    title: "Armed Forces Healthcare Supplies",
    scope:
      "Comprehensive supply of pharmaceutical products and surgical equipment to military healthcare establishments, including CMHs, PAF Hospitals, Pakistan Naval Hospitals, and Pakistan Rangers Hospitals.",
    services: [
      "Bulk medicine procurement",
      "Local Purchase (LP) medicine fulfillment",
      "Specialized surgical instrument deployment",
    ],
  },
  {
    accent: "border-gold",
    tag: "Civilian & Government",
    title: "Civilian & Government Healthcare Procurement",
    scope:
      "Reliable end-to-end supply solutions for Federal and Provincial Government hospitals, alongside leading private medical facilities.",
    services: [
      "High-volume pharmaceutical tenders",
      "Bulk procurement contracts",
      "LP medicine fulfillment",
      "Advanced surgical tools",
    ],
  },
  {
    accent: "border-clay",
    tag: "Defense Logistics",
    title: "Defense Logistics & Tactical Gear",
    scope:
      "Tailored procurement and supply chain management for Armed Forces organizations, including the Pakistan Army, PAF, Pakistan Navy, and Pakistan Rangers.",
    services: [
      "Official uniform manufacturing & supply",
      "Tactical logistics",
      "Non-medical operational items",
      "Specialized gear to military specification",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper">
      <div className="container-x py-20 md:py-24">
        <p className="text-sm font-medium text-forest/70">Key Service Pillars</p>
        <h2 className="mt-3 max-w-[36ch] font-serif text-3xl leading-tight text-forest">
          Three pillars, one supply chain built for compliance.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`border-l-2 ${p.accent} bg-white pl-6 py-2 pr-2`}
            >
              <p className="text-xs font-medium tracking-wide text-ink-muted">
                {p.tag}
              </p>
              <h3 className="mt-2 font-serif text-xl leading-snug text-forest">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {p.scope}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-forest/10 pt-5 text-sm text-ink">
                {p.services.map((s) => (
                  <li key={s} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest/50" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
