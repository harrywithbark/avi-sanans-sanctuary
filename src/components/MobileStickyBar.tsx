import { SITE } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-black/10 bg-[#0A1221]/95 backdrop-blur-md">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center min-h-[56px] text-[11px] tracking-[0.2em] uppercase text-[#FDFCFB]/70 border-r border-black/10"
        aria-label="Text Avi on WhatsApp"
      >
        💬 Text Avi
      </a>
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-center min-h-[56px] text-[11px] tracking-[0.2em] uppercase text-white bg-[#0A1221]"
        aria-label={`Call ${SITE.phone}`}
      >
        📞 Call {SITE.phone}
      </a>
    </div>
  );
}
