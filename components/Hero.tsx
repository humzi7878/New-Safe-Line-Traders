import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="bg-forest text-white">
      <div className="container-x grid grid-cols-1 gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <p className="mb-6 text-sm font-medium tracking-wide text-gold-light/90">
            Supply Chain &amp; Procurement Partner — Pakistan
          </p>
          <h1 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl md:text-[3.25rem]">
            Fulfilling Pakistan&rsquo;s defense and healthcare supply lines with precision.
          </h1>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/75 md:text-lg">
            Safe Line Traders (Pvt) Ltd. delivers pharmaceuticals, surgical
            equipment, and tactical logistics to military hospitals,
            government institutions, and private healthcare facilities
            across the country &mdash; on specification, on schedule.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-forest-dark transition-colors hover:bg-gold-light focus-ring"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 focus-ring"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-sm border border-white/15 bg-white/[0.04] p-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/camps/camp-1.jpeg"
              alt="A Safe Line Traders free medical camp in progress"
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-center">
            <div>
              <dt className="font-serif text-2xl text-white">3</dt>
              <dd className="mt-1 text-xs text-white/60">Service Pillars</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-white">4</dt>
              <dd className="mt-1 text-xs text-white/60">Armed Forces Branches Served</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-white">Nationwide</dt>
              <dd className="mt-1 text-xs text-white/60">Delivery Network</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
