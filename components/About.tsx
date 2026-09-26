export default function About() {
  return (
    <section id="about" className="bg-paper">
      <div className="container-x grid grid-cols-1 gap-10 py-20 md:grid-cols-[0.4fr_0.6fr] md:py-24">
        <div>
          <p className="text-sm font-medium text-forest/70">About Us</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-forest">
            A registered corporate vendor built for exacting standards.
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-muted md:text-base">
          <p>
            Safe Line Traders (Pvt) Ltd. is a registered corporate vendor
            specializing in defense healthcare logistics, bulk pharmaceutical
            distribution, surgical instrumentation, and military equipment
            supply.
          </p>
          <p>
            We are a premier supply chain and procurement solutions partner
            in Pakistan, dedicated to fulfilling high-standard medical,
            surgical, and logistical demands for the defense, public, and
            private healthcare sectors. Every engagement is guided by strict
            adherence to client specifications, quality compliance, and
            timely delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
