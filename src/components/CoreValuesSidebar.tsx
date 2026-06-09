const VALUES = [
  {
    n: "01",
    title: "Absolute Discretion",
    body: "High-net-worth wealth protection, sealed channels, and unannounced transactions.",
  },
  {
    n: "02",
    title: "Frictionless Communication",
    body: "Direct, corporate-grade dialogue across every stage of acquisition and disposition.",
  },
  {
    n: "03",
    title: "Capital Preservation",
    body: "Data-driven pricing structures over emotional estimates and market noise.",
  },
];

export function CoreValuesSidebar() {
  return (
    <aside className="lg:sticky lg:top-28 space-y-10">
      <p className="text-[10px] tracking-[0.32em] uppercase text-[#0D1B2A]/50">
        Core Values
      </p>
      <ul className="space-y-8">
        {VALUES.map((v) => (
          <li key={v.n} className="space-y-2 border-l border-[#C9A84C] pl-5">
            <div className="font-serif text-2xl text-[#0D1B2A]">{v.n}</div>
            <p className="text-[11px] tracking-[0.24em] uppercase font-medium text-[#0D1B2A]">
              {v.title}
            </p>
            <p className="text-xs text-[#0D1B2A]/70 leading-relaxed">{v.body}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
