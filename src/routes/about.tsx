import { createFileRoute } from "@tanstack/react-router";
import { SectionShell } from "@/components/SectionShell";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { AccreditationRibbon } from "@/components/AccreditationRibbon";
import { CoreValuesSidebar } from "@/components/CoreValuesSidebar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · The Advisor — Avi Sanan" },
      {
        name: "description",
        content:
          "Bridging analytical commerce with modern property placement. The biography and core values behind Avi Sanan's Lower Mainland practice.",
      },
      { property: "og:title", content: "About · The Advisor" },
      { property: "og:description", content: "BBA Commerce & Marketing. Modern property placement across Greater Vancouver." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <PlaceholderFrame
              ratio="3/4"
              label="Editorial · Boardroom"
              description="Editorial image of Avi Sanan interacting with clients in a premium Vancouver boardroom setting."
            />
          </div>
          <div className="lg:col-span-7 space-y-8">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              The Advisor
            </p>
            <h1
              className="font-serif text-[#FDFCFB] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Bridging Analytical Commerce with Modern Property Placement.
            </h1>
            <div className="space-y-5 text-base text-[#FDFCFB]/75 leading-relaxed max-w-[64ch]">
              <p>
                Avi Sanan brings a sharp combination of technical business training and
                deep regional intelligence to the Lower Mainland real estate landscape.
                Holding a Bachelor of Business Administration (BBA) in Commerce and
                Marketing, he evaluates properties through an institutional lens —
                prioritizing target demographics, economic indicators, and structural
                valuation strategies over basic sales instincts.
              </p>
              <p>
                This data-focused execution ensures corporate clients and families
                receive calculated advice when acquiring or transitioning significant
                real estate wealth across Greater Vancouver's primary residential sectors.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <AccreditationRibbon />

      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <CoreValuesSidebar />
          </div>
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
                Approach
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
                A boutique operating model.
              </h2>
            </div>
            <div className="space-y-6 text-base text-[#FDFCFB]/75 leading-relaxed">
              <p>
                Each engagement is treated as an institutional mandate. Calendars are
                deliberately constrained so that every active client receives the depth of
                attention the asset deserves — from positioning brief, through staging and
                distribution, to contract close.
              </p>
              <p>
                Avi works closely with a curated bench of architectural photographers,
                stagers, mortgage specialists, and legal counsel. The client never has to
                coordinate the moving pieces; the practice does that quietly in the
                background while presenting a single, calm interface.
              </p>
              <p>
                The result is a practice that feels less like a transactional brokerage
                and more like a private advisory desk — measured, well-lit, and built for
                clients whose decisions are deliberate.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
