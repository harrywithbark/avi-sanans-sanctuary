import { createFileRoute } from "@tanstack/react-router";
import { SectionShell } from "@/components/SectionShell";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { IntakeForm } from "@/components/IntakeForm";
import { buySchema } from "@/lib/schemas";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy · Capital Deployment Framework — Avi Sanan" },
      {
        name: "description",
        content:
          "Sourcing premium inventory and navigating high-stakes Lower Mainland acquisitions. A data-led buying advisory for serious capital.",
      },
      { property: "og:title", content: "Buy · Capital Deployment Framework" },
      { property: "og:description", content: "Off-market inventory and disciplined acquisitions across the Lower Mainland." },
    ],
  }),
  component: BuyPage,
});

const STEPS = [
  {
    n: "01",
    title: "Portfolio Alignment & Data Mapping",
    body: "Stripping away emotional bias. Micro-market historical data is used to map neighborhood trends in West Vancouver, Burnaby, or Richmond and identify underlying equity before analyzing cosmetics.",
  },
  {
    n: "02",
    title: "Private Off-Market Sourcing",
    body: "Leveraging deep local brokerage relationships and investment networks across the Lower Mainland to locate unlisted capital opportunities before they touch the MLS.",
  },
  {
    n: "03",
    title: "Contract Optimization & Protection",
    body: "Structural advisory focused on complex transaction terms, corporate-holdco purchasing frameworks, and ironclad contract clauses to preserve buyer equity.",
  },
];

const NEIGHBORHOODS = [
  {
    title: "Vancouver & West Vancouver",
    body: "High-net-worth estate dynamics, zoning analysis, and waterfront positioning.",
  },
  {
    title: "Burnaby & Coquitlam",
    body: "High-density luxury updates and modern family hubs adjacent to transit spines.",
  },
  {
    title: "Surrey & Langley",
    body: "Multi-acre luxury estates and premium residential infrastructure for legacy holdings.",
  },
];

function BuyPage() {
  return (
    <>
      {/* HERO */}
      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-6 md:space-y-8 max-w-[620px]">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              The Buyer's Blueprint
            </p>
            <h1
              className="font-serif text-[#FDFCFB] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Sourcing Premium Inventory. Navigating High-Stakes Acquisitions.
            </h1>
            <p className="text-sm md:text-base text-[#FDFCFB]/70 leading-relaxed">
              In Vancouver's fast-moving upper-tier market, purchasing a home is an
              exercise in capital preservation. Backed by a commerce degree and localized
              market analytics, we protect our clients from over-leveraging while granting
              access to off-market inventory and sophisticated contract structures.
            </p>
            <button className="cta-navy">Request a Private Buying Consultation</button>
          </div>
          <div className="lg:col-span-2">
            <PlaceholderFrame
              ratio="video"
              label="Architectural Detail · Vancouver Estate"
              description="Minimalist glass and custom stone entryways of a modern Vancouver estate captured at dusk."
            />
          </div>
        </div>
      </SectionShell>

      {/* STEPS */}
      <SectionShell bg="muted">
        <div className="space-y-12 lg:space-y-16">
          <div className="max-w-xl space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              Acquisition Roadmap
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#FDFCFB] leading-tight">
              A disciplined sequence, executed without improvisation.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((s) => (
              <div key={s.n} className="space-y-5 border-t border-[#C5A267]/15 pt-8">
                <div className="font-serif text-5xl md:text-6xl text-[#C5A267] leading-none">
                  {s.n}
                </div>
                <h3 className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#FDFCFB] font-medium">
                  {s.title}
                </h3>
                <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* NEIGHBORHOODS */}
      <SectionShell>
        <div className="space-y-12">
          <div className="max-w-xl space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              Local Neighborhood Intelligence
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
              Capital flows mapped, region by region.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.title}
                className="bg-[#070E1A] border border-[#C5A267]/10 p-6 lg:p-8 space-y-3"
              >
                <h3 className="font-serif text-xl text-[#FDFCFB]">{n.title}</h3>
                <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">{n.body}</p>
              </div>
            ))}
          </div>
          <button className="cta-ghost">Analyze Targeted Neighborhood Capital Flows</button>
        </div>
      </SectionShell>

      {/* INTAKE */}
      <SectionShell bg="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              Authorize Custom Search
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
              Define your acquisition envelope.
            </h2>
            <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">
              Every search begins with disciplined parameters. Outline the structure and we'll
              respond with a private, calibrated brief.
            </p>
          </div>
          <div className="lg:col-span-8 bg-[#0A1221] border border-[#C5A267]/10 p-6 md:p-10">
            <IntakeForm
              schema={buySchema}
              submitLabel="Authorize Custom Search Layout"
              fields={[
                { name: "name", label: "Full Name", placeholder: "Your name" },
                {
                  name: "location",
                  label: "Target Location",
                  type: "select",
                  options: [
                    "Vancouver",
                    "West Vancouver",
                    "Burnaby",
                    "Coquitlam",
                    "Richmond",
                    "Surrey",
                    "Langley",
                  ],
                  placeholder: "Select region",
                },
                {
                  name: "capital",
                  label: "Designated Capital Allocation",
                  type: "select",
                  options: ["$1.5M – $2.5M", "$2.5M – $4M", "$4M+"],
                  placeholder: "Select bracket",
                },
                {
                  name: "timeline",
                  label: "Preferred Timeline",
                  type: "select",
                  options: ["Immediate", "30–60 days", "60–120 days", "Strategic / open"],
                  placeholder: "Select timeline",
                },
              ]}
            />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
