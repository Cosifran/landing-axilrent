# Design: `landing-foundation`

> Technical design for the Axil landing page foundation. **Why** and **how**, not **what** — the spec defines what.

## 1. Architecture

Greenfield Next.js 16+ (App Router) app. Server Components by default; the only client code is the mobile menu toggle + scroll-shadow (both tiny, both touching the same `<nav>`). Tailwind 4 reads design tokens from a single `@theme` block in `app/globals.css`. Fonts self-host via `next/font/google` (Hanken Grotesk and Inter) and Google Fonts CDN (Material Symbols Outlined, since Next.js 16.2.9 does not export it from `next/font/google`). The `--font-material-symbols` CSS variable SHALL be wired with the FILL, wght, GRAD, and opsz axes available.

```
Browser ─► Next.js server (App Router) ─► RSC tree
                │                              │
                │  layout.tsx (RSC)            │  page.tsx (RSC, placeholder)
                │  ├─ next/font (3 faces)      │
                │  ├─ globals.css (@theme)     │
                │  └─ <Nav>                    │
                │       ├─ Server: shell,      │
                │       │  brand, links, CTA   │
                │       └─ Client: menu +      │
                │          scroll listener    │
                ▼                              ▼
            HTML + inline CSS ──► Tailwind 4 JIT ──► DESIGN.md tokens
```

## 2. File Structure

| File | Lines | Req | Action |
|---|---|---|---|
| `package.json` | ~50 | scaffold, scripts, lint-staged | Create (scaffold) + edit |
| `pnpm-lock.yaml` | auto | scaffold | Create |
| `tsconfig.json` | ~30 | scaffold | Create |
| `next.config.ts` | ~5 | scaffold | Create |
| `next-env.d.ts` | ~5 | scaffold | Create |
| `postcss.config.mjs` | ~5 | postcss | Create (`@tailwindcss/postcss`) |
| `eslint.config.mjs` | ~30 | scaffold | Create (Next flat config) |
| `.gitignore` | ~40 | scaffold | Create |
| `.nvmrc` | 1 | node-pinning | Create (`22`) |
| `app/globals.css` | ~180 | design-tokens | Replace (full `@theme`) |
| `app/layout.tsx` | ~50 | root-layout | Replace (fonts, lang, metadata) |
| `app/page.tsx` | ~20 | page-placeholder | Replace (Spanish "Próximamente") |
| `app/_components/nav/nav.tsx` | ~60 | nav structure | Create (RSC) |
| `app/_components/nav/mobile-menu-toggle.tsx` | ~35 | nav client | Create (`"use client"`) |
| `.prettierrc` | ~10 | prettier | Create |
| `.prettierignore` | ~6 | prettier | Create |
| `.editorconfig` | ~10 | editorconfig | Create |
| `.husky/pre-commit` | ~3 | husky | Create (`pnpm lint-staged`) |

`_components/` (leading underscore) is **private** — Next 15 does not route it.

## 3. Design System Mapping

`@theme` keys MUST start with a Tailwind namespace to generate utilities. We use `--color-*`, `--text-*` (paired suffixes), `--font-*`, `--spacing-*`, `--radius-*`, `--shadow-*`, `--container-*`. Material 3 semantics (`--color-on-primary`, `--color-primary-container`) keep the designer's vocabulary verbatim and generate `bg-on-primary`, `text-on-primary`, etc. Tailwind 4 emits the `bg-{name}/{n}` opacity modifier automatically when the source is a CSS variable — that's why the nav's `bg-surface-container-lowest/80` works without a custom utility.

**Worked example**: `bg-surface-container-lowest/80` → `background-color: color-mix(in oklab, var(--color-surface-container-lowest) 80%, transparent)`. With `--color-surface-container-lowest: #ffffff`, the rendered value is white at 80% alpha → glassmorphic nav background.

**Radii decision** (`sdd/landing-foundation/decisions`): expose all six from DESIGN.md — `--radius: 0.5rem` (DEFAULT → `rounded`), `--radius-sm: 0.25rem` (`rounded-sm`), `--radius-md: 0.75rem` (`rounded-md`), `--radius-lg: 1rem` (`rounded-lg`), `--radius-xl: 1.5rem` (`rounded-xl`), `--radius-full: 9999px` (`rounded-full`). Default cards use `rounded-xl` (1.5rem, DESIGN.md's Rounded-XL). Pain-point cards may use `rounded` (0.5rem, the DEFAULT) per Stitch HTML — this is a per-component override, not a token change.

**Typography**: paired suffix syntax collapses 4 declarations into one utility:

```css
--text-headline-xl: 48px;
--text-headline-xl--line-height: 56px;
--text-headline-xl--letter-spacing: -0.02em;
--text-headline-xl--font-weight: 700;
```

→ `text-headline-xl` produces `font-size:48px; line-height:56px; letter-spacing:-0.02em; font-weight:700`.

## 4. App Router Architecture

App Router chosen over Pages Router for: nested layouts, streaming, Server Components by default, the `next/font` integration, and `metadata`/`viewport` exports. The `_components` folder (private convention) keeps route segments and reusable UI separated. `<html>` carries `className={`${hanken.variable} ${inter.variable} ${materialSymbols.variable} scroll-smooth`}` — the three font variables are inlined at build time by `next/font`; `scroll-smooth` enables animated anchor scrolling for the nav.

## 5. Nav Component

```
<Nav>  (RSC, "use client" absent)
├── <a> Brand: apartment icon (filled) + "Axil"
├── <div hidden md:flex> Desktop links × 4 + CTA
├── <MobileMenuToggle>  (Client, "use client")
│   ├── <button md:hidden> hamburger
│   ├── <div hidden on open> mobile menu links
│   └── useEffect scroll listener → toggles `shadow-md` on the nav at scrollY > 20
```

The Client Component **owns** both the menu state and the scroll listener (they touch the same `<nav>`). The static parts (brand, links, CTA) stay on the server. No `useMemo`/`useCallback` (React 19 Compiler).

The scroll listener uses `document.getElementById("navbar")` (or a forwarded ref) and toggles `shadow-md` based on `window.scrollY > 20`. Cleanup removes the listener on unmount. Initial state checks `window.scrollY` (SSR-safe via the `useState` initializer is not possible — must be in `useEffect`).

## 6. Tailwind 4 Setup

No `tailwind.config.js` (v4 is CSS-first). `postcss.config.mjs` registers `@tailwindcss/postcss` (renamed from v3). `globals.css` order matters: `@import "tailwindcss";` first, then a single `@theme { ... }` block with all tokens, then custom `@utility` rules. The `@utility material-symbols-filled { font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24; }` enables the FILL=1 variant for the brand icon.

## 7. Tooling

`.prettierrc`: `{ tabWidth: 2, useTabs: false, singleQuote: true, trailingComma: "all", printWidth: 100, semi: true }`. `.prettierignore`: `node_modules`, `.next`, `pnpm-lock.yaml`, `openspec/`. `.editorconfig`: utf-8, 2-space, LF, final newline. `package.json` adds: `engines.node: ">=22.0.0 <23.0.0"`, `scripts.prepare: "husky"`, `scripts.format: "prettier --write ."`, `lint-staged: { "*.{ts,tsx,js,jsx,json,css,md}": ["prettier --write", "eslint --fix"] }`. `pnpm install` runs `prepare` automatically → `.husky/pre-commit` (with `pnpm lint-staged`) is created and made executable.

## 8. Implementation Order

1. `pnpm create next-app@latest . --ts --eslint --tailwind --app --import-alias "@/*" --turbopack --yes`
2. `pnpm add -D prettier husky lint-staged`
3. Add `.nvmrc`, `.prettierrc`, `.prettierignore`, `.editorconfig`; edit `package.json` (`engines`, `prepare`, `format`, `lint-staged`)
4. `pnpm install` (runs `prepare`, installs Husky hook)
5. Replace `app/globals.css` with the `@theme` block + `@utility material-symbols-filled`
6. Replace `app/layout.tsx` (fonts, `lang="es"`, `scroll-smooth`, Spanish metadata)
7. Create `app/_components/nav/nav.tsx` (RSC) + `app/_components/nav/mobile-menu-toggle.tsx` (Client)
8. Replace `app/page.tsx` with `pt-32 flex min-h-screen items-center justify-center` + "Próximamente"
9. Wire `<Nav />` into `app/layout.tsx` above `{children}`
10. Verify (next section)

## 9. Verification

| Check | Command / Action |
|---|---|
| 47 color tokens | `grep -c "^\s*--color-" app/globals.css` → 47 |
| 6 typography tokens | `grep -c "^\s*--text-" app/globals.css` → 6 (plus paired suffixes) |
| 6 radius tokens | `grep -cE "^\s*--radius(:|-)" app/globals.css` → 6 (1 DEFAULT + 5 suffixed) |
| v4 entry | `grep '@import "tailwindcss"' app/globals.css` |
| No v3 directives | `grep -E '@tailwind' app/globals.css` → empty |
| PostCSS v4 plugin | `cat postcss.config.mjs` |
| `lang="es"` | `curl localhost:3000 \| grep 'lang="es"'` |
| Glassmorphic nav | inspect `<nav>`: `fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md` |
| Mobile menu toggle | DevTools mobile view (375px), click hamburger, menu appears; click again, hides |
| Scroll-shadow | Scroll past 20px, `shadow-md` appears; scroll to 0, it disappears |
| Typecheck | `pnpm tsc --noEmit` → exit 0 |
| Lint | `pnpm lint` → exit 0 |
| Pre-commit | Modify a TS file, `git add` + `git commit` → lint-staged runs |
| No `useMemo`/`useCallback` in client | `grep -E 'use(Memo|Callback)' app/_components/nav/mobile-menu-toggle.tsx` → empty |

## 10. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **CRITICAL**: Tailwind v4 `@theme` silently broken if a single var is malformed | Verify the `47/6/6/7/2` count after writing, then visually check 3–4 utilities (`bg-primary`, `text-on-surface`, `rounded-xl`, `text-headline-xl`) in DevTools before moving on |
| `next/font` Material Symbols axes omitted → icons render as fallback `□` | Explicit `axes: ["FILL","wght","GRAD","opsz"]`; manually verify the `apartment` icon in the brand |
| Mixed radii cause future section inconsistency | Default to `rounded-2xl` (DESIGN.md); per-component override is explicit, not accidental |
| Diff > 400 lines (scaffold + Prettier + Husky together) | sdd-tasks will forecast; if high, orchestrator offers chained PRs (scaffold slice → tokens+layout → nav+page → tooling) |
| Scaffold warns about `DESIGN.md`/`openspec/` | `--yes` accepts the warning; those files are preserved |

## 11. Out of Scope

Hero, problem ("Problema"), solutions ("Soluciones"), product ("Producto"), why-Axil, FAQ, contact/demo form, footer, animations beyond nav scroll-shadow, testing framework, CI, Zustand, Zod, dark mode, i18n switcher.

**Roadmap** (one change per section, in Stitch HTML order): `hero-section` → `problem-section` → `solutions-section` → `product-section` → `why-axil-section` → `faq-section` → `contact-form` → `footer`. The nav anchors (`#problema`, `#soluciones`, `#producto`, `#faq`, `#contacto`) already point at the IDs each future change will use.
