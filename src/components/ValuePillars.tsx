const PILLARS = [
  {
    title: "Strategic Presentation",
    body: "High-production architectural features and staging matrices tailored to draw premium transaction metrics from day one.",
  },
  {
    title: "Commerce & Marketing Degree",
    body: "A BBA in Commerce and Marketing means positioning, demographic targeting, pricing strategy, and visual presentation are engineered through data, not guesswork.",
  },
  {
    title: "Full Lower Mainland Authority",
    body: "One seamless relationship managing portfolios across Vancouver, West Vancouver, Burnaby, Coquitlam, and Richmond.",
  },
];

export function ValuePillars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
      {PILLARS.map((p, i) => (
        <div key={p.title} className="space-y-4 border-t border-[#0D1B2A]/15 pt-8">
          <div className="text-[10px] tracking-[0.32em] uppercase text-[#C9A84C]">
            0{i + 1} · Differentiator
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-[#0D1B2A] leading-tight">
            {p.title}
          </h3>
          <p className="text-sm text-[#0D1B2A]/70 leading-relaxed">{p.body}</p>
        </div>
      ))}
    </div>
  );
}
