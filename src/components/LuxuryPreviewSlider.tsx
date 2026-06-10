import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ListingCard } from "./ListingCard";
import { ACTIVE_LISTINGS } from "@/lib/listings";

export function LuxuryPreviewSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSel = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSel);
    onSel();
    return () => {
      embla.off("select", onSel);
    };
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-6">
        <div className="space-y-3">
          <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
            Signature Portfolio · $2M+
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#FDFCFB] leading-tight max-w-xl">
            Active luxury holdings across the Lower Mainland.
          </h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous listing"
            className="cta-ghost min-w-11"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next listing"
            className="cta-ghost min-w-11"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 lg:gap-8">
          {ACTIVE_LISTINGS.map((l) => (
            <div
              key={l.id}
              className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <ListingCard listing={l} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 md:hidden">
        {ACTIVE_LISTINGS.map((_, i) => (
          <span
            key={i}
            className={
              "h-px w-8 transition-colors " +
              (i === selected ? "bg-[#C5A267]" : "bg-[#0A1221]/20")
            }
          />
        ))}
      </div>
    </div>
  );
}
