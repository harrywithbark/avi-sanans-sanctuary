import { cn } from "@/lib/utils";

type Ratio = "video" | "4/5" | "16/10" | "3/4" | "square";

const ratioMap: Record<Ratio, string> = {
  video: "aspect-video",
  "4/5": "aspect-[4/5]",
  "16/10": "aspect-[16/10]",
  "3/4": "aspect-[3/4]",
  square: "aspect-square",
};

export function PlaceholderFrame({
  ratio = "video",
  label,
  description,
  className,
}: {
  ratio?: Ratio;
  label: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={description}
      className={cn(
        "group relative w-full flex flex-col justify-center items-center text-center p-6 md:p-10 overflow-hidden border border-[#C5A267]/20",
        ratioMap[ratio],
        className,
      )}
      style={{ background: "var(--gradient-vault)", boxShadow: "var(--shadow-vault)" }}
    >
      {/* gold radial dot grid */}
      <div
        className="absolute inset-0 opacity-[0.09] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C5A267 0.6px, transparent 0.6px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* corner hairline frame */}
      <div className="absolute inset-3 border border-[#C5A267]/15 transition-all duration-700 group-hover:inset-1 group-hover:border-[#C5A267]/45 pointer-events-none" />
      {/* bottom gold glow */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(197,162,103,0.12), transparent)" }} />

      <div className="relative w-10 h-10 mb-6 flex items-center justify-center animate-soft-pulse">
        <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9" aria-hidden="true">
          <path
            d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
            stroke="#C5A267"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      </div>
      <p className="relative text-[10px] md:text-xs font-sans tracking-[0.36em] uppercase text-[#C5A267] font-medium">
        {label}
      </p>
      <p className="relative mt-3 max-w-[30ch] text-xs md:text-sm italic font-serif text-[#FDFCFB]/55 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
