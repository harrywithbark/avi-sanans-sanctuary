import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#050A14]/85 backdrop-blur-xl border-b border-[#C5A267]/25 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          : "bg-[#050A14]/60 backdrop-blur-md border-b border-[#C5A267]/10",
      )}
    >
      <div className="max-w-[1440px] mx-auto h-20 px-4 sm:px-6 lg:px-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex flex-col leading-none group" aria-label="Avi Sanan home">
          <span className="font-serif text-xl md:text-2xl tracking-[0.18em] text-[#FDFCFB] group-hover:text-[#C5A267] transition-colors">
            AVI SANAN
          </span>
          <span className="mt-1 text-[9px] md:text-[10px] tracking-[0.30em] uppercase text-[#C5A267]/80">
            REALTOR® · Sutton Group – West Coast Realty
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {SITE.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="story-gold text-[11px] tracking-[0.26em] uppercase text-[#FDFCFB]/75 hover:text-[#C5A267] transition-colors"
              activeProps={{ className: "text-[#C5A267] border-b border-[#C5A267] pb-1" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={SITE.phoneHref}
          className="hidden lg:inline-flex items-center gap-2 text-[11px] tracking-[0.26em] uppercase text-[#C5A267] border border-[#C5A267]/50 px-4 py-2 hover:bg-[#C5A267] hover:text-[#050A14] transition-all min-h-11"
        >
          <Phone className="w-3.5 h-3.5" />
          {SITE.phone}
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 text-[#FDFCFB]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-[#050A14]/95 backdrop-blur-xl border-t border-[#C5A267]/15",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="px-6 py-6 flex flex-col gap-1" aria-label="Mobile">
          {SITE.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.22em] uppercase text-[#FDFCFB]/80 py-3 border-b border-[#C5A267]/10 hover:text-[#C5A267] transition-colors"
              activeProps={{ className: "text-[#C5A267]" }}
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
