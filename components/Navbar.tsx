"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "CEO's Message", href: "#ceo" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Medical Camps", href: "#camps" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest text-white">
      <div className="container-x flex h-[76px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3 focus-ring rounded">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/60 font-serif text-lg font-semibold">
            SL
          </span>
          <span className="font-serif text-lg leading-tight">
            Safe Line Traders
            <span className="block text-[11px] font-sans font-normal tracking-wide text-white/60">
              (Private) Limited
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 transition-colors hover:text-white focus-ring rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-sm bg-gold px-5 py-2.5 text-sm font-medium text-forest-dark transition-colors hover:bg-gold-light focus-ring"
        >
          Request a Quote
        </a>

        <button
          className="md:hidden focus-ring rounded p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-white mb-1.5" />
          <span className="block h-0.5 w-6 bg-white mb-1.5" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-forest-dark px-6 py-4 flex flex-col gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/85 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center rounded-sm bg-gold px-5 py-2.5 font-medium text-forest-dark"
          >
            Request a Quote
          </a>
        </nav>
      )}
    </header>
  );
}
