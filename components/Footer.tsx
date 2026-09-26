const links = [
  { label: "About", href: "#about" },
  { label: "CEO's Message", href: "#ceo" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Medical Camps", href: "#camps" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/70">
      <div className="container-x py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-lg text-white">Safe Line Traders (Pvt) Ltd.</p>
            <p className="mt-2 max-w-[36ch] text-sm">
              Defense &amp; healthcare procurement logistics, delivered on
              specification, across Pakistan.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 text-sm">
            {["LinkedIn", "Facebook"].map((s) => (
              <a
                key={s}
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-white/20 text-xs hover:border-white/40"
                aria-label={s}
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} Safe Line Traders (Pvt) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
