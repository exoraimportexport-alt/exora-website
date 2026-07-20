# QA Report — Exora "Obsidian Atlas"

Run date: 2026-07-11 · Method: automated static analysis + layout math audit
(Note: `npm install` is blocked in the build sandbox, so the final compile gate is
`npm run build` on your machine — everything below was verified without a runtime.)

## 1. Syntax integrity — PASS
- 17/17 source files: brackets, parens, braces balanced.
- 12/12 TSX files: every JSX tag opens and closes correctly (char-level scanner
  with brace/quote depth tracking; TS generics excluded).

## 2. Overlap safety — PASS
- Exactly ONE fixed element (the nav, z-100, height locked to `--nav-h: 64px`);
  `<main>` is padded by the same token → nothing can render under the nav.
- Hero globe is clipped inside a `height: size*0.58, overflow:hidden` horizon and
  fades into the background 110px before the edge; the "drag the sphere" hint is
  in normal flow BELOW the horizon — cannot collide.
- All decorative layers (glow orbs ×5, globe halo + shadow, route-arc SVG,
  bottom fade) are `pointer-events: none` — they can't block clicks or dragging.
- Ticker is `overflow:hidden` with masked edges.
- z-index map: nav 100 → hero fade 3 → content 2 → globe 1 → orbs 0. No ties.

## 3. Animations — PASS
- Every `motion.*` element with an `initial` also has `animate`/`whileInView`
  (nothing can get stuck invisible).
- All `whileInView` reveals use `viewport={{ once: true }}` → no re-trigger flicker.
- All `exit` animations are inside `AnimatePresence` (Nav sheet, Quotes cycler,
  Directors bio expand).
- Marquee, arc-flow and chip-blink respect `prefers-reduced-motion`.

## 4. Responsive — PASS
- Every multi-column grid declares `grid-cols-1` base + `md:`/`lg:` upgrade.
- Headline/stat sizes use `clamp()`; globe size = `min(680, max(300, 82vw))`.
- Mobile nav is an in-header sheet (pushes below the bar, anchored, no overlay bugs).

## 5. Links & routes — PASS
- Internal links resolve only to `/`, `/pages/about-us`, `/pages/contact-us`
  (+ mailto/tel). No product or collections references anywhere.

## 6. Content rules — PASS
- All 19 core facts present verbatim: tagline, all 5 director names, NIFT Delhi
  bios, 17+ yrs / 90%, 30 DAYS / 100% badges, address, email, phone, hours,
  testimonials (Rohit / Neha Verma / Amit Mehra), garment accessories operations.
- Zero italics. Zero fabricated people or statistics.
- Marketing copy around the facts is new, per your instruction.

## Final gate for you
```bash
npm install
npm run dev      # visual pass
npm run build    # compile gate
```
