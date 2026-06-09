import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionShell } from "@/components/SectionShell";
import { IntakeForm } from "@/components/IntakeForm";
import { VancouverClock } from "@/components/VancouverClock";
import { contactCallSchema, contactGeneralSchema } from "@/lib/schemas";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · The Boardroom — Avi Sanan" },
      {
        name: "description",
        content:
          "Schedule a private call or send a general portfolio inquiry. Direct line: 778-387-7001 · Sutton Group West Coast Realty, Vancouver.",
      },
      { property: "og:title", content: "Contact · The Boardroom" },
      { property: "og:description", content: "Private call scheduling and portfolio inquiries for Avi Sanan." },
    ],
  }),
  component: ContactPage,
});

type Mode = "call" | "general";

function ContactPage() {
  const [mode, setMode] = useState<Mode>("call");

  return (
    <SectionShell>
      <div className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-[10px] tracking-[0.32em] uppercase text-[#C9A84C]">
            The Boardroom
          </p>
          <h1
            className="font-serif text-[#0D1B2A] leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            A private channel into the practice.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            <VancouverClock />

            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#0D1B2A]/55">
                Direct Line
              </p>
              <a
                href={SITE.phoneHref}
                className="block font-serif text-3xl md:text-4xl text-[#0D1B2A] hover:text-[#C9A84C] transition-colors"
              >
                {SITE.phone}
              </a>
            </div>

            <div className="space-y-2 border-t border-[#0D1B2A]/10 pt-6">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#0D1B2A]/55">
                Office
              </p>
              <p className="text-sm text-[#0D1B2A] leading-relaxed">
                Avi Sanan, REALTOR®<br />
                {SITE.brokerage}<br />
                {SITE.address.street}<br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
              </p>
            </div>

            <div className="space-y-3 border-t border-[#0D1B2A]/10 pt-6">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#0D1B2A]/55">
                Verified Channels
              </p>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#0D1B2A]/80 hover:text-[#C9A84C]">
                Instagram · {SITE.instagramHandle}
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#0D1B2A]/80 hover:text-[#C9A84C]">
                LinkedIn · {SITE.linkedinHandle}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#0D1B2A]/80 hover:text-[#C9A84C]">
                WhatsApp · Text Avi
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white border border-[#0D1B2A]/10 p-6 md:p-10 space-y-8">
            <div className="flex border-b border-[#0D1B2A]/10">
              <TabBtn active={mode === "call"} onClick={() => setMode("call")}>
                Schedule Private Call
              </TabBtn>
              <TabBtn active={mode === "general"} onClick={() => setMode("general")}>
                General Portfolio Inquiry
              </TabBtn>
            </div>

            {mode === "call" ? (
              <IntakeForm
                key="call"
                schema={contactCallSchema}
                submitLabel="Initialize Private Advisory Consultation"
                fields={[
                  { name: "name", label: "Full Legal Name", placeholder: "Your name" },
                  { name: "phone", label: "Contact Phone Number", type: "tel", placeholder: "778-000-0000" },
                  {
                    name: "preferred",
                    label: "Preferred Window",
                    type: "select",
                    options: [
                      "Today",
                      "Tomorrow",
                      "Within 48 hours",
                      "This week",
                    ],
                    placeholder: "Select window",
                  },
                  {
                    name: "channel",
                    label: "Preferred Channel",
                    type: "select",
                    options: ["Phone Call", "WhatsApp", "Email"],
                    placeholder: "Select channel",
                  },
                ]}
              />
            ) : (
              <IntakeForm
                key="general"
                schema={contactGeneralSchema}
                submitLabel="Initialize Private Advisory Consultation"
                fields={[
                  { name: "name", label: "Full Legal Name", placeholder: "Your name" },
                  { name: "email", label: "Contact Email", type: "email", placeholder: "you@domain.com" },
                  { name: "phone", label: "Contact Phone", type: "tel", placeholder: "778-000-0000" },
                  {
                    name: "message",
                    label: "Notes",
                    type: "textarea",
                    placeholder: "Detail your real estate asset or purchasing timeline goals…",
                    full: true,
                  },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function TabBtn({
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
        "flex-1 min-h-11 px-2 py-4 text-[10px] tracking-[0.22em] uppercase transition-colors border-b -mb-px",
        active
          ? "text-[#0D1B2A] border-[#C9A84C]"
          : "text-[#0D1B2A]/50 border-transparent hover:text-[#0D1B2A]",
      )}
    >
      {children}
    </button>
  );
}
