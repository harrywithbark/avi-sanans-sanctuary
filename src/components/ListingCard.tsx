import { PlaceholderFrame } from "./PlaceholderFrame";

export type Listing = {
  id: string;
  location: string;
  region: string;
  attributes: string;
  description: string;
  status?: string;
};

export function ListingCard({
  listing,
  variant = "active",
  onSelect,
  selected,
}: {
  listing: Listing;
  variant?: "active" | "sold";
  onSelect?: () => void;
  selected?: boolean;
}) {
  const cta = variant === "active" ? "Request Private Viewing Arrangement" : "Analyze Market Transaction Data";
  const tag = variant === "active" ? (listing.status ?? "ACTIVE COLLECTION") : "PAST TRANSACTION";

  return (
    <article
      className={
        "group bg-white border border-[#0D1B2A]/10 transition-colors " +
        (selected ? "border-[#C9A84C]" : "hover:border-[#0D1B2A]/30")
      }
    >
      <button
        type="button"
        onClick={onSelect}
        className="block w-full text-left"
        aria-label={`Select ${listing.location}`}
      >
        <PlaceholderFrame
          ratio="16/10"
          label={`ASSET CANVAS · ${listing.region.toUpperCase()}`}
          description={listing.description}
          className="border-0 border-b border-[#0D1B2A]/10"
        />
      </button>
      <div className="p-5 md:p-6 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#0D1B2A]">
            {listing.location}
          </h3>
          <span className="text-[9px] tracking-[0.28em] uppercase text-[#C9A84C]">
            {tag}
          </span>
        </div>
        <p className="text-xs md:text-sm font-light text-[#0D1B2A]/70">
          {listing.attributes}
        </p>
        <p className="font-serif italic text-base text-[#0D1B2A]">Price Upon Request</p>
        <button type="button" className="cta-navy w-full" aria-label={cta}>
          {cta}
        </button>
      </div>
    </article>
  );
}
