const offerings = [
  "Pharmaceuticals (Bulk & LP)",
  "Surgical Equipment & Instruments",
  "Military & Paramilitary Uniforms",
  "Specialized Tactical & Defense Logistics",
];

export default function CoreOfferings() {
  return (
    <section className="bg-gold-soft">
      <div className="container-x py-16 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-[26ch] font-serif text-2xl leading-snug text-forest">
            Core offerings, at a glance.
          </h2>
          <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:max-w-[640px]">
            {offerings.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-forest/30 text-[10px] text-forest">
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
