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
    <div className="w-full overflow-hidden border-y border-[#0D1B2A]/10 bg-[#F4F6F8]">
      <div className="flex animate-marquee whitespace-nowrap py-5">
        {items.map((b, i) => (
          <div
            key={i}
            className="flex items-center px-8 text-[10px] tracking-[0.3em] uppercase text-[#0D1B2A]/45"
          >
            {b}
            <span className="ml-8 inline-block h-1 w-1 rounded-full bg-[#C9A84C]/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
