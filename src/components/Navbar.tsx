import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/90 border-b border-black/5">
      <div className="max-w-[1440px] mx-auto h-20 px-4 sm:px-6 lg:px-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex flex-col leading-none" aria-label="Avi Sanan home">
          <span className="font-serif text-xl md:text-2xl tracking-[0.18em] text-[#0D1B2A]">
            AVI SANAN
          </span>
          <span className="mt-1 text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-[#0D1B2A]/60">
            REALTOR® · Sutton Group – West Coast Realty
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {SITE.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] tracking-[0.22em] uppercase text-[#0D1B2A]/70 hover:text-[#0D1B2A] transition-colors"
              activeProps={{ className: "text-[#0D1B2A] border-b border-[#C9A84C] pb-1" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={SITE.phoneHref}
          className="hidden lg:inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#0D1B2A] border-b border-[#C9A84C] pb-1 min-h-11"
        >
          <Phone className="w-3.5 h-3.5" />
          {SITE.phone}
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 text-[#0D1B2A]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-white/95 backdrop-blur-md border-t border-black/5",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="px-6 py-6 flex flex-col gap-1" aria-label="Mobile">
          {SITE.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase text-[#0D1B2A]/80 py-3 border-b border-[#0D1B2A]/5"
              activeProps={{ className: "text-[#0D1B2A]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-4 cta-navy"
            onClick={() => setOpen(false)}
          >
            Call {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
