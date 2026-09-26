import Image from "next/image";

export default function CEOMessage() {
  return (
    <section id="ceo" className="bg-white">
      <div className="container-x grid grid-cols-1 gap-12 py-20 md:grid-cols-[0.34fr_0.66fr] md:py-24">
        <div>
          <div className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden border border-forest/15">
            <Image
              src="/ceo.jpeg"
              alt="Muhammad Adnan Qamar, CEO of Safe Line Traders (Pvt) Ltd."
              fill
              sizes="260px"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-4 font-serif text-lg text-forest">Muhammad Adnan Qamar</p>
          <p className="text-sm text-ink-muted">Chief Executive Officer</p>
        </div>

        <div>
          <p className="text-sm font-medium text-forest/70">A Message from Our CEO</p>
          <blockquote className="mt-4 font-serif text-[1.6rem] leading-snug text-forest">
            Our responsibility goes beyond logistics &mdash; it is the
            reliability of every medicine, instrument, and delivery we put
            our name behind.
          </blockquote>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted md:text-base">
            <p>
              As a logistics provider, our core responsibility is the supply
              of medicine, surgical items, and bulk medical instruments to
              the institutions that depend on us &mdash; from armed forces
              hospitals to government and private healthcare facilities.
            </p>
            <p>
              Beyond fulfilling contracts, we regularly arrange free medical
              camps in local areas across Pakistan, bringing essential
              healthcare facilities directly to communities at no cost. It
              is a responsibility we take as seriously as any tender we
              deliver on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
