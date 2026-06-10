# Velvet Vault Re-skin + Motion Layer

Shift the Avi Sanan flagship from muted ivory to a saturated midnight palette across all 6 routes, tint the footer with visible navy→gold gradient depth, and layer in smoother seamless animations.

## 1. Palette swap (src/styles.css)

Replace current tokens with the Velvet Vault register — applied site-wide so every route inherits the new boldness, no per-component overrides needed.

- `--background`: `#050A14` (midnight vault)
- `--foreground`: `#FDFCFB` (warm ivory)
- `--card` / surface-2: `#0A1221`
- `--surface-3` (elevated panels, hero monolith): `#121A2A`
- `--accent` (gold): `#C5A267`
- `--accent-glow`: `#D4B476`
- `--muted-foreground`: `#FDFCFB`/60
- `--border`: `#C5A267`/20
- `--destructive` (form errors): keep muted crimson `#9B3A3A`
- Add `--gradient-vault`: `linear-gradient(135deg, #050A14, #121A2A)`
- Add `--gradient-hairline`: `linear-gradient(90deg, transparent, #C5A267/40, transparent)`
- Add `--shadow-vault`: layered shadow with gold tint glow

Listings split-panel keeps the new dark base; map canvas surface becomes `#0A1221` with gold pin pulses already in place.

## 2. Tinted footer (src/components/Footer.tsx)

- Base: `#030712` (deeper than body for grounding)
- Overlay wash: `radial-gradient` of gold/8% from top-right, navy from bottom-left
- Top edge: full-width animated gold hairline (`--gradient-hairline`) with a slow draw-in on scroll into view
- Column headers: gold uppercase micro-caps; links ivory/70 → gold on hover with story-link underline
- Bottom legal strip: separated by another hairline, ivory/40 text
- Replaces current flat-navy footer with a tinted, layered glass surface

## 3. Hero + sections (src/routes/index.tsx, components/Hero pieces)

- Hero canvas becomes midnight vault with the prototype's grid: 7/5 split, gold eyebrow, serif headline with italic gold phrase "Marketing.", body copy ivory/70
- Right-side monolith: `bg-gradient-to-br from-[#121A2A] to-[#0A1221]`, gold radial-dot parallax grid at 10% opacity, sparkle SVG soft-pulsing, gold hairline frame that tightens on hover
- CTA: navy fill, gold border, gold blur halo behind; inverts to gold-on-navy on hover with `-translate-y-1`
- Value pillars, listing preview slider, accreditation ribbon: re-tinted to dark surface with gold dividers; marquee stays
- About / Buy / Sell / Contact: section shells already centralized — palette inheritance handles them; verify form inputs use `bg-[#0A1221]` with gold underline focus state and crimson error underline

## 4. Motion layer (new: src/components/Reveal.tsx + styles.css keyframes)

Single seamless system, no per-page wiring:

- `<Reveal>` wrapper: IntersectionObserver-driven, applies `opacity-0 translate-y-6` → `opacity-100 translate-y-0` with `cubic-bezier(0.16,1,0.3,1)` over 700ms, supports `delay` prop for stagger
- Apply to: hero blocks, section headings, value pillars, listing cards, footer columns
- New keyframes in styles.css:
  - `hairline-draw`: scaleX 0 → 1 from left origin, 900ms — used on gold dividers
  - `soft-pulse`: opacity 0.6 ↔ 1 over 3s — already exists, keep for pins/sparkle
  - `marquee`: keep
- CTAs: add `.cta-magnetic` utility — `transition-all 500ms`, `hover:-translate-y-1`, gold blur halo via `::before`
- Route transitions: wrap `<Outlet />` in `__root.tsx` with a keyed fade (200ms opacity dip on pathname change) for seamless tab switching
- Nav links: story-link underline in gold; active route gets persistent gold underline

## 5. Navbar tint

- `bg-[#050A14]/85` with `backdrop-blur-xl` and gold/20 bottom hairline
- Logo wordmark ivory, sub-tagline gold micro-caps
- Phone CTA gets gold hairline underline

## Technical details

- All color edits centralized in `src/styles.css` `@theme inline` block so Tailwind classes (`bg-background`, `text-foreground`, `text-accent`, `border-border`) automatically reflect the new palette across every component already wired to tokens
- `Reveal.tsx` is client-only (uses IntersectionObserver in `useEffect`) — safe under SSR with `opacity-0` initial state
- Route fade lives in `__root.tsx` via `useLocation()` + key on a wrapper div; no router config change needed
- No new dependencies; no schema or backend changes
- Tailwind v4 conventions preserved: new utilities (`cta-magnetic`, `hairline`) added via `@utility`; new keyframes via `@theme` with `--animate-*` tokens

## Out of scope

- No content/copy changes
- No new routes or features
- No image generation — monolith stays as styled placeholder per existing direction
