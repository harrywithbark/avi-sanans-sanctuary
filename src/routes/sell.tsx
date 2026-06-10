import { createFileRoute } from "@tanstack/react-router";
import { SectionShell } from "@/components/SectionShell";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { IntakeForm } from "@/components/IntakeForm";
import { sellSchema } from "@/lib/schemas";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Sell · Asset Marketing Masterclass — Avi Sanan" },
      {
        name: "description",
        content:
          "Homes above $2M aren't just listed — they're engineered for the market. Demographic targeting, narrative distribution, and analytical negotiation by Avi Sanan.",
      },
      { property: "og:title", content: "Sell · Asset Marketing Masterclass" },
      { property: "og:description", content: "Engineered marketing for premium Lower Mainland sellers." },
    ],
  }),
  component: SellPage,
});

const COLUMNS = [
  {
    label: "Column A",
    title: "Demographic Profiling & Hyper-Targeting",
    body: "Reverse-engineering the ideal buyer profile using local economic data and tracking capital flows moving through Vancouver, Burnaby, and West Vancouver.",
  },
  {
    label: "Column B",
    title: "Narrative-Driven Digital Distribution",
    body: "Cinematic, high-production property features deployed strategically across Instagram (@realestate.avi), targeted premium real estate networks, and high-impact digital showcases.",
  },
  {
    label: "Column C",
    title: "Analytical Negotiation Mechanics",
    body: "Pricing strategy rooted in strict market analytics, positioning the asset with psychological precision to encourage competitive, high-intent interest from day one.",
  },
];

function SellPage() {
  return (
    <>
      {/* SPLIT HERO */}
      <SectionShell className="!py-0" bg="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-220px)]">
          <div className="flex flex-col justify-center py-16 md:py-24 pr-0 lg:pr-12 space-y-6 md:space-y-8">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              The Asset Marketing Masterclass
            </p>
            <h1
              className="font-serif text-[#FDFCFB] leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Homes Above $2M Are Not Just Listed.{" "}
              <em className="italic">They Are Engineered for the Market.</em>
            </h1>
            <p className="text-sm md:text-base text-[#FDFCFB]/70 leading-relaxed max-w-[60ch]">
              A degree in Commerce and advanced marketing analytics means your home's
              presentation isn't left to guesswork. We combine algorithmic demographic
              targeting with flawless visual staging to put your property in front of
              high-net-worth buyer pools looking to deploy capital in the Lower Mainland.
            </p>
            <button className="cta-navy">Request a Tailored Asset Position Analysis</button>
          </div>
          <div className="flex items-center py-16 md:py-24 lg:pl-12">
            <PlaceholderFrame
              ratio="video"
              label="West Vancouver Contemporary"
              description="High-end architectural clean lines of an elite contemporary West Vancouver residence at golden hour."
            />
          </div>
        </div>
      </SectionShell>

      {/* MATRIX */}
      <SectionShell>
        <div className="space-y-12">
          <div className="max-w-xl space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              Marketing Execution Matrix
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#FDFCFB] leading-tight">
              Three vectors. One competitive narrative.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
            {COLUMNS.map((c, i) => (
              <div
                key={c.title}
                className={
                  "p-8 lg:p-10 space-y-5 " +
                  (i > 0 ? "md:border-l md:border-[#C5A267]/40" : "")
                }
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A267]">
                  {c.label}
                </p>
                <h3 className="font-serif text-2xl text-[#FDFCFB] leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* NEGOTIATION ADVANTAGE */}
      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <h2
            className="font-serif text-[#FDFCFB] leading-[1.1]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Uncompromising contractual alignment shields your equity during high-stakes
            transaction loops.
          </h2>
          <p className="text-base text-[#FDFCFB]/75 leading-relaxed">
            We don't just showcase your property to the open market — we negotiate with a
            strict focus on corporate holdings, sophisticated tax timelines, and protective
            clauses. By managing asset presentation with corporate professionalism,
            communication gaps are eliminated, ensuring value is maximized throughout the
            escrow window.
          </p>
        </div>
      </SectionShell>

      {/* INTAKE */}
      <SectionShell bg="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              Private Valuation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
              Authorize a private valuation analysis.
            </h2>
            <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">
              Confidential, complimentary, and returned within 72 hours.
            </p>
          </div>
          <div className="lg:col-span-8 bg-[#0A1221] border border-[#C5A267]/10 p-6 md:p-10">
            <IntakeForm
              schema={sellSchema}
              submitLabel="Authorize Private Valuation Analysis"
              fields={[
                {
                  name: "address",
                  label: "Property Address / Region",
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
                  name: "bracket",
                  label: "Estimated Portfolio Bracket",
                  type: "select",
                  options: ["$2M – $3.5M", "$3.5M – $6M", "$6M+"],
                  placeholder: "Select bracket",
                },
                {
                  name: "timeline",
                  label: "Desired Market Timeline",
                  type: "select",
                  options: ["Immediate", "30–60 days", "60–120 days", "Strategic / open"],
                  placeholder: "Select timeline",
                  full: true,
                },
              ]}
            />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
