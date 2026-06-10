import { cn } from "@/lib/utils";

export function LuxuryMapCanvas({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const pins = [
    { id: "marine", label: "MARINE DRIVE PORTFOLIO", top: "30%", left: "22%" },
    { id: "kerrisdale", label: "TROUT LAKE PORTFOLIO", top: "58%", left: "54%" },
    { id: "coquitlam", label: "REIDEL HOLLOW PORTFOLIO", top: "42%", left: "80%" },
  ];

  // grid lines
  const gridLines = Array.from({ length: 14 });

  return (
    <div className="relative w-full h-full bg-[#070E1A] overflow-hidden">
      {/* Hairline grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {gridLines.map((_, i) => (
          <div
            key={`v${i}`}
            className="absolute top-0 bottom-0 border-l border-[#C5A267]/5"
            style={{ left: `${(i / gridLines.length) * 100}%` }}
          />
        ))}
        {gridLines.map((_, i) => (
          <div
            key={`h${i}`}
            className="absolute left-0 right-0 border-t border-[#C5A267]/5"
            style={{ top: `${(i / gridLines.length) * 100}%` }}
          />
        ))}
      </div>

      {/* Landmass / waterway polygons */}
      <svg
        viewBox="0 0 800 800"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Landmass — tinted vault navy with subtle gold edges */}
        <path
          d="M 0,0 L 800,0 L 800,180 C 720,200 640,240 560,235 C 480,230 420,205 340,215 C 260,225 200,260 140,265 C 90,268 40,260 0,250 Z"
          fill="#0A1221"
          stroke="rgba(197,162,103,0.30)"
          strokeWidth="1"
        />
        {/* English Bay / lower landmass */}
        <path
          d="M 0,330 C 80,320 160,335 240,345 C 320,355 400,360 500,355 C 600,350 700,360 800,365 L 800,800 L 0,800 Z"
          fill="#0A1221"
          stroke="rgba(197,162,103,0.30)"
          strokeWidth="1"
        />
        {/* coastal accent line */}
        <path
          d="M 0,330 C 80,320 160,335 240,345 C 320,355 400,360 500,355 C 600,350 700,360 800,365"
          fill="none"
          stroke="rgba(197,162,103,0.55)"
          strokeWidth="1"
        />
      </svg>

      {/* Compass / scale labels */}
      <div className="absolute top-5 left-5 text-[9px] tracking-[0.32em] uppercase text-[#FDFCFB]/40">
        Lower Mainland · BC
      </div>
      <div className="absolute bottom-5 right-5 text-[9px] tracking-[0.32em] uppercase text-[#FDFCFB]/40">
        49.28°N · 123.12°W
      </div>

      {/* Pins */}
      {pins.map((p) => {
        const active = p.id === selectedId;
        return (
          <div
            key={p.id}
            className="absolute"
            style={{ top: p.top, left: p.left, transform: "translate(-50%, -50%)" }}
          >
            <button
              type="button"
              onClick={() => onSelect(p.id)}
              aria-label={p.label}
              className="relative flex items-center justify-center min-h-11 min-w-11"
            >
              <span
                className={cn(
                  "h-3 w-3 rounded-full bg-[#0A1221] ring-4 transition-all",
                  active ? "ring-[#C5A267]/60 animate-soft-pulse" : "ring-[#C5A267]/20 animate-soft-pulse",
                )}
              />
            </button>

            {active && (
              <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-64 bg-[#0A1221] border border-[#C5A267]/10 p-4 z-10 animate-fade-in space-y-2">
                <p className="text-[11px] italic font-serif text-[#FDFCFB]/60">
                  Selected asset location
                </p>
                <p className="text-[11px] tracking-[0.28em] uppercase font-medium text-[#FDFCFB]">
                  {p.label}
                </p>
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#C5A267]">
                  Center asset in active panel →
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
