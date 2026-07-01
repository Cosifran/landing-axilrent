# Proposal: landing-foundation

## Intent

Establish the Axil landing page codebase by scaffolding Next.js 16+ (App Router) + React 19 + TypeScript + Tailwind 4, translating the full Axil Core design system into Tailwind v4 `@theme` tokens, and shipping the root layout plus a fixed glassmorphic navigation bar. This change creates the foundation that all subsequent section changes (hero, problem, solutions, FAQ, demo form, footer) will build on. Note: the original draft referenced Next.js 15, but `create-next-app@latest` resolved to Next.js 16.2.9 at the time of implementation.

## Scope

### In Scope
- Scaffold Next.js 16+ with TypeScript, Tailwind 4, ESLint, pnpm, Turbopack, `app/` at root.
- Map all 47 Material 3 color tokens, 6 typography tokens, 7 spacing tokens, 6 radius tokens, and 2 ambient shadows from `DESIGN.md` into `app/globals.css` via `@theme`.
- Wire fonts: Hanken Grotesk and Inter via `next/font/google`; Material Symbols Outlined via `next/font/google` (if exported) OR Google Fonts CDN (current implementation: CDN, since Next.js 16.2.9 does not export Material Symbols from `next/font/google`). The `--font-material-symbols` CSS variable SHALL be wired with the FILL, wght, GRAD, and opsz axes available.
- Build `app/layout.tsx` with `lang="es"`, font variables, Spanish metadata, and `scroll-smooth`.
- Build `app/_components/nav/nav.tsx` (Server Component) and `app/_components/nav/mobile-menu-toggle.tsx` (Client Component for menu state + scroll-shadow).
- Build `app/page.tsx` placeholder with a centered Spanish "Próximamente" notice.
- Verify `pnpm dev` boots, ESLint passes, `tsc --noEmit` passes, and the page renders.

### Out of Scope
- Hero, problem, solutions, FAQ, contact/demo form, footer, animations beyond the Nav scroll-shadow.
- Testing framework, CI, Zustand, Zod.

### Capabilities

#### New Capabilities
- `root-layout`: HTML lang, viewport, metadata, font-variable wiring.
- `design-tokens`: Tailwind v4 `@theme` mapping of Axil Core tokens.
- `navigation`: Fixed glassmorphic Nav with mobile menu and scroll-shadow.
- `page-placeholder`: Centered Spanish "coming soon" placeholder.

#### Modified Capabilities
- None.

## Approach

1. **Scaffold**: run `pnpm create next-app@latest . --ts --eslint --tailwind --app --import-alias "@/*" --turbopack --yes`. The existing `DESIGN.md` and `openspec/` files are non-conflicting; the command will warn but proceed because no `package.json` exists.
2. **Tailwind 4 setup**: ensure `postcss.config.mjs` registers `@tailwindcss/postcss`; keep `@import "tailwindcss"` at the top of `app/globals.css`.
3. **Token mapping**: declare all tokens in a single `@theme` block in `app/globals.css`:
   - Colors: `--color-primary: #b7102a`, `--color-on-primary: #ffffff`, etc. (49 tokens).
   - Typography: `--text-headline-xl: 48px` with paired `--text-headline-xl--line-height`, `--letter-spacing`, `--font-weight`.
   - Fonts: `--font-hanken: var(--font-hanken-grotesk), ui-sans-serif, system-ui, sans-serif`.
   - Spacing: `--spacing-base: 8px`, `--spacing-stack-sm: 12px`, `--spacing-stack-md: 24px`, `--spacing-stack-lg: 48px`, `--spacing-margin-mobile: 16px`, `--spacing-gutter: 24px`, `--container-max: 1200px`.
   - Radius: `--radius: 0.5rem` (DEFAULT), `--radius-sm: 0.25rem`, `--radius-md: 0.75rem`, `--radius-lg: 1rem`, `--radius-xl: 1.5rem`, `--radius-full: 9999px`.
   - Shadows: `--shadow-ambient: 0 10px 40px -10px rgba(70, 93, 129, 0.08)`, `--shadow-ambient-hover: 0 20px 40px -10px rgba(70, 93, 129, 0.12)`.
4. **Font wiring**: load Hanken Grotesk (`weight: [400,600,700,800]`), Inter (`weight: [400,500,600]`), and Material Symbols Outlined (`axes: ['FILL','wght','GRAD','opsz']`) in `app/layout.tsx`; apply all three CSS variables to `<html className>`.
5. **Nav**: `nav.tsx` renders the fixed glassmorphic shell, brand, desktop links, CTA, and mobile menu container. `mobile-menu-toggle.tsx` owns `useState` for menu open/closed and a `useEffect` scroll listener that toggles `shadow-md` when `window.scrollY > 20`.
6. **Placeholder**: `app/page.tsx` renders `<main className="pt-32 flex min-h-screen items-center justify-center">` with a centered card showing "Próximamente" and "Estamos construyendo la nueva experiencia de Axil.".
7. **Prettier + Husky + lint-staged + EditorConfig**: include in this change (user override, 2026-06-30). Add `.prettierrc`, `.prettierignore`, `.editorconfig`, `.husky/pre-commit`, and a `lint-staged` config that runs `prettier --write` and `eslint --fix` on staged files. Add `prepare` and `format` scripts to `package.json`. Update the Acceptance Criteria accordingly.

## Architecture Decisions

| # | Decision | Recommendation | Rationale |
|---|---|---|---|
| 1 | Scaffold command | `pnpm create next-app@latest . --ts --eslint --tailwind --app --import-alias "@/*" --turbopack --yes` | `--turbopack` is the Next 15 dev default and faster; no `--src-dir` keeps `app/` at root per project convention. |
| 2 | React Compiler | **Defer**. Leave the scaffold default (disabled). | The landing is simple; enabling the compiler adds build-time complexity and a new lint rule without meaningful gain. Revisit after the contact form or if interactivity grows. |
| 3 | Node version pinning | `package.json` `engines.node: ">=22.0.0 <23.0.0"`; `.nvmrc: "22"`. | Node 22 is the latest LTS; Next 15 requires 18.18+ or 20+. Pinning guarantees Vercel reproducibility. |
| 4 | Pre-commit hooks | **INCLUDE** in this change. Prettier + Husky + lint-staged + EditorConfig are wired in `package.json` scripts and `.husky/pre-commit`. | User override (2026-06-30): defers the creation of a separate "dev-tooling" change. Trade-off: the diff for this change approaches the 400-line review budget. The orchestrator's `sdd-tasks` phase will forecast the actual diff size; if it exceeds 400 lines the user will be asked whether to split into chained PRs. |
| 5 | Folder convention | Private components under `app/_components/`. | Matches Next.js App Router private-folder convention and the `nextjs-15` skill (still applicable to Next.js 16+); keeps route concerns separated from reusable UI. |
| 6 | Page placeholder copy | "Próximamente" / "Estamos construyendo la nueva experiencia de Axil." | Clear Spanish signal that the page is a foundation, consistent with the Spanish-language product decision. |
| 7 | First `pnpm dev` outcome | Dev server boots on `localhost:3000`, browser shows the centered placeholder, fixed Nav is visible at top with glassmorphic background, mobile menu toggles, and scroll-shadow activates after ~20px. | Defines the verification target for the change. |

## Open Questions

None. Product decisions (Spanish, mixed radius, placeholder nav labels, "Solicitar Demo" semantics) were confirmed in `sdd/landing-foundation/decisions`.

## Risks

| Risk | Level | Mitigation |
|---|---|---|
| Tailwind v4 `@theme` syntax error silently produces missing utilities. | CRITICAL | Copy token values verbatim from `DESIGN.md`; verify every `--color-*`/`--text-*` namespace in browser dev tools before moving on. |
| `next/font/google` Material Symbols axes omitted (when next/font/google IS used), icons render as fallback. | WARNING | When using `next/font/google`, explicitly pass `axes: ['FILL','wght','GRAD','opsz']` and test the `apartment` icon. When using the Google Fonts CDN, ensure the URL includes the FILL axis (current implementation). |
| Mixed radius tokens cause future section components to look inconsistent. | WARNING | Expose all radii in `@theme`; default to `rounded-xl` (1.5rem) per DESIGN.md, allow per-component override. |
| Including Prettier + Husky + lint-staged + EditorConfig pushes the diff toward or past the 400-line review budget. | WARNING | `sdd-tasks` will forecast actual line counts; if exceeded, the orchestrator offers chained PRs (`stacked-to-main` or `feature-branch-chain`). |
| Scaffold warns about existing non-source files (`DESIGN.md`, `openspec/`). | SUGGESTION | Confirm `--yes` accepts the warning; these files are intentionally preserved. |

## Acceptance Criteria

- [ ] `pnpm install` succeeds and `pnpm-lock.yaml` is generated.
- [ ] `pnpm dev` starts without errors; page renders at `localhost:3000`.
- [ ] `pnpm lint` exits 0.
- [ ] `pnpm tsc --noEmit` exits 0.
- [ ] `<html lang="es">` is present; metadata title and description are in Spanish.
- [ ] All 47 color tokens, 6 typography tokens, 7 spacing tokens, 6 radius tokens (incl. DEFAULT), and 2 shadow tokens are declared in `app/globals.css` `@theme`.
- [ ] Nav is fixed at top, glassmorphic (`bg-surface-container-lowest/80 backdrop-blur-md`), includes brand, desktop links, CTA, and mobile menu.
- [ ] Mobile menu toggles open/closed; scroll-shadow (`shadow-md`) appears after scrolling ~20px.
- [ ] Page placeholder displays centered "Próximamente" in Spanish.
- [ ] `.prettierrc`, `.prettierignore`, `.editorconfig` are present at repo root and `pnpm format` exits 0.
- [ ] Husky pre-commit hook is installed (`.husky/pre-commit`) and runs `lint-staged` (`prettier --write` + `eslint --fix` on staged files).
- [ ] `package.json` has `prepare` and `format` scripts; `pnpm install` triggers `prepare` to set up Husky.
