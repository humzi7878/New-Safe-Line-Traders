export default function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div className="container-x grid grid-cols-1 gap-12 py-20 md:grid-cols-[0.45fr_0.55fr] md:py-24">
        <div>
          <p className="text-sm font-medium text-forest/70">Contact Us</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-forest">
            Talk to us about your procurement requirement.
          </h2>
          <dl className="mt-8 space-y-5 text-sm text-ink">
            <div>
              <dt className="text-ink-muted">Address</dt>
              <dd className="mt-1">[ Office address to be added ]</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Phone</dt>
              <dd className="mt-1">[ Phone number to be added ]</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Email</dt>
              <dd className="mt-1">[ Email address to be added ]</dd>
            </div>
          </dl>
          <div className="placeholder-tile mt-8 aspect-[16/10] w-full border border-dashed border-forest/20 flex items-center justify-center">
            <span className="text-xs text-ink-muted px-4 text-center">
              [ Placeholder — map embed ]
            </span>
          </div>
        </div>

        <form className="space-y-5 bg-white p-7 border border-forest/10">
          <div>
            <label htmlFor="name" className="block text-sm text-ink mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border border-forest/20 px-3.5 py-2.5 text-sm focus-ring outline-none"
              placeholder="Your full name"
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm text-ink mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-forest/20 px-3.5 py-2.5 text-sm focus-ring outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-ink mb-1.5">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-forest/20 px-3.5 py-2.5 text-sm focus-ring outline-none"
                placeholder="+92"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-ink mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border border-forest/20 px-3.5 py-2.5 text-sm focus-ring outline-none"
              placeholder="Tell us about your requirement"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-sm bg-forest px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light focus-ring"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
