import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";

const BADGES = [
  "SUTTON · WEST COAST BROKERAGE",
  "REALTOR® DESIGNATION",
  "CREA MEMBERSHIP",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-[#FDFCFB] footer-glass">
      {/* top gold hairline */}
      <div className="absolute top-0 left-0 right-0 h-px animate-hairline" style={{ background: "var(--gradient-hairline)" }} />

      {/* soft gold orb glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, rgba(197,162,103,0.5), transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, rgba(25,55,95,0.6), transparent 70%)" }} />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 pb-14 border-b border-[#C5A267]/12">
            {BADGES.map((b, i) => (
              <div
                key={b}
                className="aspect-[5/2] flex items-center justify-center text-center px-4 footer-badge-glass"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="text-[10px] tracking-[0.36em] uppercase text-[#C5A267]">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal delay={80} className="lg:col-span-7 space-y-5">
            <div className="flex items-baseline gap-4">
              <div className="font-serif text-3xl tracking-[0.14em] text-[#FDFCFB]">AVI SANAN</div>
              <div className="h-px w-16 bg-[#C5A267]/60" />
              <span className="text-[10px] tracking-[0.34em] uppercase text-[#C5A267]">Vault</span>
            </div>
            <p className="text-sm leading-relaxed text-[#FDFCFB]/70 max-w-xl">
              Avi Sanan, REALTOR® · {SITE.brokerage}. Office Headquarters:{" "}
              {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
              {SITE.address.postal}. Direct line:{" "}
              <a href={SITE.phoneHref} className="story-gold text-[#FDFCFB] hover:text-[#C5A267] transition-colors">
                {SITE.phone}
              </a>
              .
            </p>
            <p className="text-[11px] tracking-[0.24em] uppercase text-[#FDFCFB]/35">
              Independently Owned and Operated · © 2026 Avi Sanan. All rights reserved.
            </p>
          </Reveal>

          <Reveal delay={180} className="lg:col-span-5 lg:text-right space-y-4 text-sm">
            <div className="text-[10px] tracking-[0.36em] uppercase text-[#C5A267]/80 mb-2">Connect</div>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="block text-[#FDFCFB]/75 hover:text-[#C5A267] transition-colors">
              Instagram · {SITE.instagramHandle}
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="block text-[#FDFCFB]/75 hover:text-[#C5A267] transition-colors">
              LinkedIn · {SITE.linkedinHandle}
            </a>
            <a href={SITE.phoneHref} className="block text-[#FDFCFB]/75 hover:text-[#C5A267] transition-colors">
              Direct Line · {SITE.phone}
            </a>
          </Reveal>
        </div>

        {/* bottom hairline */}
        <div className="mt-14 h-px w-full" style={{ background: "var(--gradient-hairline)" }} />
      </div>
    </footer>
  );
}
