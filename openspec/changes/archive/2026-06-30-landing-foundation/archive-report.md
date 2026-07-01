# Archive Report: landing-foundation

## Summary
- **Change**: landing-foundation
- **Status**: ARCHIVED
- **Archived on**: 2026-06-30
- **Project**: landing-axilrent
- **Artifact store**: hybrid (engram + openspec)

## Task Completion Gate
All 29 implementation steps across T-001 through T-005 are marked complete (`[x]`) in `tasks.md`. No stale unchecked implementation tasks. No manual reconciliation was needed.

## Implementation Summary
- **4 PRs merged to main**, all stacked-to-main:
  - PR 1 (T-001): commit `8282c92` — scaffold + tooling
  - PR 2 (T-002): commit `7237b20` — Tailwind v4 `@theme`
  - PR 3 (T-003 + T-004): commit `91f7859` — layout + Nav + placeholder
  - PR 4 (T-005): commit `96ae935` — verification
- Total estimated diff: ~515 lines
- Each PR stayed under the 400-line review budget

## Verification Summary
- **29 requirements**: 27 PASS, 2 documented deviations (now formalized in spec), 0 CRITICAL
- **Quality gates**: `tsc`, `lint`, `prettier` all pass
- **Dev server**: boots cleanly on `localhost:3000`
- **Material Symbols Outlined**: loaded via Google Fonts CDN (documented deviation; Next.js 16.2.9 limitation)

## Spec Sync to Main Specs
- `openspec/specs/` does **not** exist in this project — the project is greenfield.
- The delta spec (`openspec/changes/landing-foundation/spec.md`) is the project's first and current spec. No main specs were created or updated.
- The spec was updated during verification to:
  - Document the Next.js 16+ version drift (SUGG-001 → now spec language)
  - Document the Material Symbols CDN loading as an accepted mechanism (WARN-001, WARN-002 → now spec language)

## Capabilities Added

| Capability | Description | Requirements |
|---|---|---|
| `scaffold` | Next.js 16+ + TypeScript + Tailwind v4 + ESLint + pnpm + Turbopack | 2 (scaffold, node-pinning) |
| `root-layout` | HTML `lang="es"`, viewport, metadata, font-variable wiring | 4 (lang, fonts, metadata, smooth-scroll) |
| `design-tokens` | Tailwind v4 `@theme` mapping of Axil Core | 8 (colors, typography, fonts, spacing, radii, shadows, v4-entry, postcss) |
| `navigation` | Fixed glassmorphic Nav with mobile menu and scroll-shadow | 5 (RSC structure, anchors, mobile toggle, responsive, scroll-shadow) |
| `page-placeholder` | Spanish "Próximamente" centered placeholder | 1 (Spanish placeholder) |
| `tooling` | Prettier + Husky + lint-staged + EditorConfig | 5 (prettier, prettierignore, editorconfig, husky, scripts) |
| Cross-cutting | | 2 (dev server, no memoization) |

## Out of Scope (follow-up changes)
- Hero section
- Problem section ("Problema")
- Solutions section ("Soluciones")
- Product section ("Producto")
- Why-Axil section
- FAQ section
- Contact / "Solicitar Demo" form
- Footer
- Dark mode
- i18n switcher
- React Compiler
- Testing framework

## Roadmap
The Stitch HTML has 7 content sections + footer. Each is a candidate for a follow-up SDD change:
1. `hero-section`
2. `problem-section`
3. `solutions-section`
4. `product-section`
5. `why-axil-section`
6. `faq-section`
7. `contact-form` (Solicitar Demo)
8. `footer`

The nav anchors (`#problema`, `#soluciones`, `#producto`, `#faq`, `#contacto`) are already in place and point at the IDs each future change will use.

## Artifacts
- **Engram topic keys**: `sdd/landing-foundation/{proposal, spec, design, tasks, apply-progress, verify-report, archive-report}`
- **Files**: `openspec/changes/landing-foundation/{proposal, spec, design, tasks, verify-report, archive-report}.md`

## Lessons Learned
- Tailwind v4 setup is not covered by the installed `tailwind-4` skill; the `sdd-explore` sub-agent filled the gap via context7 against the official Tailwind v4 docs. This worked well.
- `create-next-app@latest` resolved to Next.js 16.2.9 at the time of implementation, not Next.js 15 as originally specced. The implementation works fine; the spec was updated to reflect Next.js 16+.
- Material Symbols Outlined is not exported by `next/font/google` in Next.js 16.2.9. The Google Fonts CDN workaround preserves the FILL=1 variant via the `material-symbols-filled` custom `@utility`. Revisit when Next.js adds the export.
- The `stacked-to-main` chain strategy worked well for this 4-PR change. Each PR was under 400 lines and independently bootable.
- The `--radius: 0.5rem` (DEFAULT, no suffix) approach maps to Tailwind's `rounded` utility — this is the desired radius for buttons and small elements. Verified at 6 radius tokens total.
