
# Avi Sanan — Luxury Real Estate Flagship (v3)

Boutique 6-route flagship. v3 update: Listings view becomes a full-bleed split-panel with a custom CSS-only desaturated map canvas on the right.

## Routes (`src/routes/`)
- `index.tsx` — Home (hero, value pillars, $2M+ preview slider)
- `buy.tsx` — Buyer blueprint (01/02/03 steps, neighborhood grid, intake form)
- `sell.tsx` — Seller pitch (3-col matrix, negotiation advantage, valuation form)
- `listings.tsx` — Full-bleed split-panel (cards left, custom map right)
- `about.tsx` — Bio + Accreditation Ribbon + sticky Core Values sidebar
- `contact.tsx` — Tab switcher + live Vancouver clock + zod intake form

Each route has its own `head()` (title/description/og). `RealEstateAgent` + `LocalBusiness` JSON-LD on `__root.tsx`.

## Shared components (`src/components/`)
- `Navbar.tsx` — frosted fixed header, mobile Sheet drawer, tel link
- `MobileStickyBar.tsx` — bottom bar <1024px: WhatsApp + tel
- `Footer.tsx` — navy bg, trust badge placeholders, NAP, compliance
- `SectionShell.tsx` — `py-16 md:py-28 px-4 sm:px-6 lg:px-16 max-w-[1440px] mx-auto`
- `PlaceholderFrame.tsx` — aspect-ratio + gold icon + small-caps caption
- `ValuePillars.tsx` — 3-col differentiators
- `LuxuryPreviewSlider.tsx` — embla carousel of listing cards (home)
- `AccreditationRibbon.tsx` — low-contrast monochrome ticker on About
- `CoreValuesSidebar.tsx` — `lg:sticky top-28` left rail on About
- `VancouverClock.tsx` — live `America/Vancouver` time + pulsing green dot
- `ContactModeTabs.tsx` — `[ Schedule Private Call ] [ General Portfolio Inquiry ]`
- `IntakeForm.tsx` — reusable zod+react-hook-form base
- `AdvisoryConfirmed.tsx` — bespoke "Transmission Secured" success screen

### Listings-specific components
- `ListingCard.tsx` — `aspect-[16/10]` placeholder frame + location header + attributes line + "Price Upon Request" + navy action button (variant: active/sold)
- `ListingsToggle.tsx` — `[ Active Collections ] [ Past Transactions ]` cross-fade controller; status counter "Displaying N Signature Lower Mainland Holdings"
- `LuxuryMapCanvas.tsx` — pure CSS map (no external tiles, no images):
  - Base layer `bg-[#F4F6F8]`
  - Hairline grid: absolutely-positioned divs spaced every 64px in both axes (`border-[#0D1B2A]/5`)
  - Landmass/water: SVG polygon paths approximating Burrard Inlet + English Bay; landmass fill `#FFFFFF` with `#0D1B2A`/10 hairline stroke; water area stays cool grey
  - 3 pins (West Vancouver, Vancouver East, Coquitlam) absolutely positioned at percentage coordinates: `h-3 w-3 rounded-full bg-[#0D1B2A] ring-4 ring-[#C9A84C]/30 animate-pulse`, wrapped in 44×44 invisible tap targets
  - Popover above West Vancouver pin: white card, hairline border, italic "*Selected Asset Location*", small-caps "MARINE DRIVE PORTFOLIO", micro-CTA "Center Asset in Active Panel →"; `animate-fadeIn` (custom keyframe in styles.css)
  - Clicking a pin sets selected listing in parent state (sync with left scroll region)
- `OffMarketVault.tsx` — accent panel at base of left scroll region; one-field zod form ("Enter Your Target Neighborhood…") + navy "Query Vault" button → triggers `AdvisoryConfirmed` inline variant

### Listings page composition
- Replace standard `SectionShell` with full-bleed: `flex flex-col lg:flex-row h-[calc(100vh-80px)] overflow-hidden`
- Left (`w-full lg:w-[45%] flex flex-col`):
  - Sticky header `p-6 bg-white border-b border-[#0D1B2A]/10` containing toggle + counter
  - Scroll region `flex-1 overflow-y-auto p-6 space-y-6 bg-[#F4F6F8]/50`
  - 3 listing cards + `OffMarketVault` at base
- Right (`hidden lg:block relative w-[55%] h-full bg-[#E5E9F0] border-l border-[#0D1B2A]/10`):
  - Renders `LuxuryMapCanvas` with selected-pin state

## Forms (all routes)
- `react-hook-form` + `zod` with trimmed string limits (name ≤100, email valid ≤255, phone ≤30, message ≤1000, neighborhood ≤120)
- Error state: bottom border transitions to muted crimson `#9B3A3A`, small-caps caption underneath (`text-[10px] tracking-[0.18em] uppercase`)
- `noValidate` on forms; no browser alerts
- WhatsApp URL params built via `encodeURIComponent`
- Successful submit cross-fades to `AdvisoryConfirmed`:
  - Pure white canvas, hairline gold SVG checkmark circle
  - Serif headline "Transmission Secured."
  - "Avi Sanan will contact you directly within 180 minutes via your preferred channel."
  - Divider + ghost link "Download PDF →" (Lower Mainland Market Report `#`)

## Design tokens (`src/styles.css`)
- `--background:#FFFFFF`, `--foreground:#0D1B2A`, `--muted:#F4F6F8`
- `--accent:#C9A84C`, `--destructive:#9B3A3A`
- `--border: rgba(13,27,42,0.10)`
- `--radius:0`; `--radius-sm:2px` for nav cards only
- `--font-serif:"Playfair Display",serif`, `--font-sans:"Inter",sans-serif`
- Fonts loaded via `<link>` in `__root.tsx` head
- Global CTA: solid navy, white text, 300ms transition; hover lightens bg + `border-[#C9A84C]`
- Inputs: `focus:border-[#C9A84C]` 1px gold, 300ms
- Custom keyframe `@keyframes fadeIn` + `.animate-fadeIn` utility for map popover and success screen

## A11y / SEO
- Single `<main>` per route; one h1 per page
- All tap targets ≥44px (map pins wrapped in invisible 44×44 buttons)
- Placeholder frames `role="img"` + `aria-label`
- Fluid clamp() on hero h1
- JSON-LD via `__root.tsx` `head().scripts`
- Keywords: "Vancouver luxury REALTOR", "West Vancouver luxury real estate", "Lower Mainland asset marketing"
- robots/sitemap default (no project URL yet)

## Build order
1. Tokens + fonts + fadeIn keyframe in `styles.css` + `__root.tsx` head (JSON-LD)
2. Layout shell: `SectionShell`, `PlaceholderFrame`, `Navbar`, `Footer`, `MobileStickyBar`
3. Forms: `IntakeForm` + zod schemas + `AdvisoryConfirmed`
4. Page components: `ValuePillars`, `LuxuryPreviewSlider`, `ListingCard`, `ListingsToggle`, `LuxuryMapCanvas`, `OffMarketVault`, `AccreditationRibbon`, `CoreValuesSidebar`, `VancouverClock`, `ContactModeTabs`
5. Six route files
6. Verify build, then preview at 375 / 768 / 1280 / 1440px

Ready to implement on approval.
