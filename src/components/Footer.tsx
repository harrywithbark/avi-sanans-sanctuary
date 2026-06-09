import { SITE } from "@/lib/site";

const BADGES = [
  "SUTTON · WEST COAST BROKERAGE",
  "REALTOR® DESIGNATION",
  "CREA MEMBERSHIP",
];

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 pb-12 border-b border-white/10">
          {BADGES.map((b) => (
            <div
              key={b}
              className="aspect-[5/2] border border-white/15 flex items-center justify-center text-center px-4"
            >
              <span className="text-[10px] tracking-[0.32em] uppercase text-white/70">
                {b}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="font-serif text-2xl tracking-[0.12em]">AVI SANAN</div>
            <p className="text-sm leading-relaxed text-white/70 max-w-xl">
              Avi Sanan, REALTOR® · {SITE.brokerage}. Office Headquarters:{" "}
              {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
              {SITE.address.postal}. Phone:{" "}
              <a href={SITE.phoneHref} className="text-white hover:text-[#C9A84C]">
                {SITE.phone}
              </a>
              .
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40">
              Independently Owned and Operated · © 2026 Avi Sanan. All rights reserved.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right space-y-3 text-sm">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-[#C9A84C]">
              Instagram · {SITE.instagramHandle}
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-[#C9A84C]">
              LinkedIn · {SITE.linkedinHandle}
            </a>
            <a href={SITE.phoneHref} className="block text-white/70 hover:text-[#C9A84C]">
              Direct Line · {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
