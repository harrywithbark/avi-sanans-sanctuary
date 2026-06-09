import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MobileStickyBar } from "../components/MobileStickyBar";

const SITE_NAME = "Avi Sanan, REALTOR® — Sutton Group West Coast Realty";
const SITE_DESC =
  "Luxury real estate advisory across Vancouver, West Vancouver and the Lower Mainland. Strategic asset marketing engineered by Avi Sanan, BBA Commerce & Marketing.";

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: "Avi Sanan, REALTOR® - Sutton Group - West Coast Realty",
      telephone: "778-387-7001",
      url: "/",
      sameAs: [
        "https://instagram.com/realestate.avi",
        "https://linkedin.com/in/asanan",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "205 - 2607 East 49th Avenue",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5S1J9",
        addressCountry: "CA",
      },
      areaServed: [
        "Vancouver",
        "West Vancouver",
        "Burnaby",
        "Coquitlam",
        "Richmond",
        "Surrey",
        "Langley",
      ],
      keywords:
        "Vancouver luxury REALTOR, West Vancouver luxury real estate, Lower Mainland asset marketing",
    },
    {
      "@type": "LocalBusiness",
      name: "Avi Sanan — Sutton Group West Coast Realty",
      telephone: "778-387-7001",
      address: {
        "@type": "PostalAddress",
        streetAddress: "205 - 2607 East 49th Avenue",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5S1J9",
        addressCountry: "CA",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-6xl text-[#0D1B2A]">404</h1>
        <p className="mt-4 text-sm tracking-[0.22em] uppercase text-[#0D1B2A]/60">
          Page not found
        </p>
        <a href="/" className="cta-navy mt-8">Return Home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="font-serif text-3xl text-[#0D1B2A]">This page didn't load</h1>
        <p className="text-sm text-[#0D1B2A]/70">Try refreshing or return home.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="cta-navy"
          >
            Try again
          </button>
          <a href="/" className="cta-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_NAME },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Avi Sanan" },
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-[#0D1B2A]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-20 pb-16 lg:pb-0 min-h-dvh">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyBar />
    </QueryClientProvider>
  );
}
