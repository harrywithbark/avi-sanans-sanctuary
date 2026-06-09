import { createFileRoute } from "@tanstack/react-router";
import { SectionShell } from "@/components/SectionShell";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { ValuePillars } from "@/components/ValuePillars";
import { LuxuryPreviewSlider } from "@/components/LuxuryPreviewSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avi Sanan — Strategic Asset Marketing · Lower Mainland Luxury Real Estate" },
      {
        name: "description",
        content:
          "Boutique luxury real estate advisory for Vancouver, West Vancouver and the Lower Mainland. Strategic asset marketing engineered through analytics, executed with discretion.",
      },
      { property: "og:title", content: "Avi Sanan — Strategic Asset Marketing" },
      {
        property: "og:description",
        content: "Vancouver luxury real estate engineered with data, executed with discretion.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <SectionShell className="!py-12 md:!py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[calc(100vh-180px)]">
          <div className="lg:col-span-7 flex flex-col justify-center items-start space-y-6 md:space-y-8 max-w-[640px]">
            <p className="text-xs md:text-sm tracking-[0.32em] uppercase text-[#C9A84C] font-semibold">
              Vancouver · West Vancouver · Lower Mainland
            </p>
            <h1
              className="font-serif text-[#0D1B2A] leading-[1.1] font-normal"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}
            >
              Strategic Asset Marketing.{" "}
              <em className="italic font-normal text-[#0D1B2A]/90">Data-Driven Execution.</em>
            </h1>
            <p className="text-sm md:text-base text-[#0D1B2A]/70 font-sans leading-relaxed max-w-[58ch]">
              A degree in Commerce and advanced marketing analytics means your home's
              presentation isn't left to guesswork. We combine algorithmic demographic
              targeting with flawless visual staging to put your property in front of
              high-net-worth buyer pools looking to deploy capital in the Lower Mainland.
            </p>
            <button type="button" className="cta-navy">
              Request a Custom Property Marketing Analysis
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/5] md:max-w-[480px] mx-auto lg:ml-auto">
              <PlaceholderFrame
                ratio="4/5"
                label="Executive Portraiture · Profile Container"
                description="Polished modern executive headshot of Avi Sanan conveying corporate confidence and elite market posture against a clean architectural studio background."
                className="h-full"
              />
            </div>
          </div>
        </div>
      </SectionShell>

      {/* VALUE PILLARS */}
      <SectionShell bg="muted">
        <div className="space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C9A84C]">
              The Advisory
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#0D1B2A] leading-tight">
              Three pillars of an institutional-grade practice.
            </h2>
          </div>
          <ValuePillars />
        </div>
      </SectionShell>

      {/* PREVIEW */}
      <SectionShell>
        <LuxuryPreviewSlider />
      </SectionShell>
    </>
  );
}
