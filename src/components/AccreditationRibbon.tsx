const BADGES = [
  "BBA COMMERCE",
  "MARKETING ANALYTICS",
  "PORTFOLIO POSITIONING",
  "DEMOGRAPHIC TARGETING",
  "CAPITAL PRESERVATION",
  "NEGOTIATION MECHANICS",
];

export function AccreditationRibbon() {
  const items = [...BADGES, ...BADGES];
  return (
    <div className="w-full overflow-hidden border-y border-[#C5A267]/10 bg-[#070E1A]">
      <div className="flex animate-marquee whitespace-nowrap py-5">
        {items.map((b, i) => (
          <div
            key={i}
            className="flex items-center px-8 text-[10px] tracking-[0.3em] uppercase text-[#FDFCFB]/45"
          >
            {b}
            <span className="ml-8 inline-block h-1 w-1 rounded-full bg-[#C5A267]/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
