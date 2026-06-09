import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ListingCard } from "@/components/ListingCard";
import { LuxuryMapCanvas } from "@/components/LuxuryMapCanvas";
import { IntakeForm } from "@/components/IntakeForm";
import { vaultSchema } from "@/lib/schemas";
import { ACTIVE_LISTINGS, PAST_LISTINGS } from "@/lib/listings";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Portfolio · Active Lower Mainland Holdings — Avi Sanan" },
      {
        name: "description",
        content:
          "Signature active and past luxury holdings across West Vancouver, Vancouver, and Coquitlam. Price upon request.",
      },
      { property: "og:title", content: "Signature Portfolio — Avi Sanan" },
      { property: "og:description", content: "Active and historical luxury transactions across the Lower Mainland." },
    ],
  }),
  component: ListingsPage,
});

type Mode = "active" | "sold";

function ListingsPage() {
  const [mode, setMode] = useState<Mode>("active");
  const [selectedId, setSelectedId] = useState<string>(ACTIVE_LISTINGS[0].id);

  const items = useMemo(
    () => (mode === "active" ? ACTIVE_LISTINGS : PAST_LISTINGS),
    [mode],
  );

  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100dvh-80px)] lg:overflow-hidden border-t border-[#0D1B2A]/10">
      {/* LEFT */}
      <div className="w-full lg:w-[45%] flex flex-col bg-white">
        <div className="sticky top-20 lg:top-0 z-10 bg-white border-b border-[#0D1B2A]/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Toggle active={mode === "active"} onClick={() => setMode("active")}>
              Active Collections
            </Toggle>
            <Toggle active={mode === "sold"} onClick={() => setMode("sold")}>
              Past Transactions
            </Toggle>
          </div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#0D1B2A]/60">
            Displaying {items.length} Signature Lower Mainland Holdings
          </p>
        </div>

        <div className="lg:flex-1 lg:overflow-y-auto p-6 space-y-6 bg-[#F4F6F8]/50">
          <div key={mode} className="space-y-6 animate-fade-in">
            {items.map((l) => (
              <ListingCard
                key={l.id}
                listing={l}
                variant={mode === "active" ? "active" : "sold"}
                onSelect={() => setSelectedId(l.id)}
                selected={l.id === selectedId}
              />
            ))}
          </div>

          {/* OFF-MARKET VAULT */}
          <div className="bg-white border border-[#0D1B2A]/10 p-6 lg:p-8 space-y-5">
            <h3 className="font-serif text-xl text-[#0D1B2A] leading-snug">
              Looking for unlisted inventory? The premier assets in West Vancouver change
              hands in private networks.
            </h3>
            <p className="text-xs text-[#0D1B2A]/70 leading-relaxed">
              Through active alignment with premium brokerages and localized investment
              circles, Avi Sanan secures private access to off-market residential holdings
              before they ever touch the public MLS system.
            </p>
            <IntakeForm
              schema={vaultSchema}
              submitLabel="Query Vault"
              compactSuccess
              layout="inline"
              fields={[
                {
                  name: "neighborhood",
                  label: "Target Neighborhood",
                  placeholder: "Enter your target neighborhood…",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* RIGHT MAP */}
      <div className="hidden lg:block relative w-[55%] h-full bg-[#E5E9F0] border-l border-[#0D1B2A]/10">
        <LuxuryMapCanvas selectedId={selectedId} onSelect={setSelectedId} />
        <div className="absolute top-5 right-5 flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[#0D1B2A]/50 bg-white/80 backdrop-blur-md px-3 py-2 border border-[#0D1B2A]/10">
          <ArrowRight className="w-3 h-3 text-[#C9A84C]" />
          Interactive Portfolio Map
        </div>
      </div>
    </div>
  );
}

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 px-5 text-[10px] tracking-[0.24em] uppercase border transition-colors",
        active
          ? "bg-[#0D1B2A] text-white border-[#0D1B2A]"
          : "bg-white text-[#0D1B2A]/70 border-[#0D1B2A]/15 hover:border-[#C9A84C]",
      )}
    >
      {children}
    </button>
  );
}
