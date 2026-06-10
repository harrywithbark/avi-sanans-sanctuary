export function AdvisoryConfirmed({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        "animate-fade-in bg-[#0A1221] border border-[#C5A267]/10 flex flex-col items-center text-center " +
        (compact ? "p-8 space-y-4" : "p-10 md:p-16 space-y-6")
      }
    >
      <svg viewBox="0 0 64 64" className={compact ? "w-12 h-12" : "w-16 h-16"} aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="none" stroke="#C5A267" strokeWidth="1" />
        <path
          d="M20 33 L29 42 L45 24"
          fill="none"
          stroke="#C5A267"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
      <h3 className={"font-serif text-[#FDFCFB] " + (compact ? "text-2xl" : "text-3xl md:text-4xl")}>
        Transmission Secured.
      </h3>
      <p className="max-w-[44ch] text-sm md:text-base text-[#FDFCFB]/70 leading-relaxed">
        Avi Sanan will contact you directly within 180 minutes via your preferred channel.
      </p>
      {!compact && (
        <>
          <div className="w-12 h-px bg-[#0A1221]/15" />
          <p className="text-xs tracking-[0.22em] uppercase text-[#FDFCFB]/60">
            While you wait
          </p>
          <a
            href="#"
            className="text-sm tracking-[0.18em] uppercase text-[#FDFCFB] border-b border-[#C5A267] pb-1 hover:text-[#C5A267]"
          >
            Download · Seasonal Lower Mainland Market Report →
          </a>
        </>
      )}
    </div>
  );
}
