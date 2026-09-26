const values = [
  {
    title: "Precision & Compliance",
    text: "100% adherence to technical specifications, tender parameters, and regulatory standards.",
  },
  {
    title: "Streamlined Fulfillment",
    text: "Efficient handling of both high-volume bulk tenders and rapid LP medicine emergency orders.",
  },
  {
    title: "Trusted Supply Chain Network",
    text: "Robust vendor relationships ensuring genuine products, competitive pricing, and on-time delivery across Pakistan.",
  },
];

export default function ValueProps() {
  return (
    <section id="why-us" className="bg-forest text-white">
      <div className="container-x py-20 md:py-24">
        <p className="text-sm font-medium text-gold-light/90">Why Choose Us</p>
        <h2 className="mt-3 max-w-[34ch] font-serif text-3xl leading-tight text-white">
          The standards we hold ourselves to on every contract.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t border-gold/50 pt-6">
              <h3 className="font-serif text-lg text-white">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
