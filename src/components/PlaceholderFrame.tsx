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
        "w-full bg-[#F4F6F8] border border-[#0D1B2A]/10 flex flex-col justify-center items-center text-center p-6 md:p-10",
        ratioMap[ratio],
        className,
      )}
    >
      <div className="w-8 h-8 mb-6 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
          <path
            d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
            stroke="#C9A84C"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
      <p className="text-[10px] md:text-xs font-sans tracking-[0.28em] uppercase text-[#0D1B2A]/70 font-medium">
        {label}
      </p>
      <p className="mt-3 max-w-[28ch] text-xs md:text-sm italic font-serif text-[#0D1B2A]/50 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
