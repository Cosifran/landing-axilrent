# Tasks: Landing Foundation

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~515 (T-001: ~150, T-002: ~200, T-003: ~50, T-004: ~95, T-005: ~20) |
| 400-line budget risk | Medium |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (T-001) → PR 2 (T-002) → PR 3 (T-003+T-004) → PR 4 (T-005) |
| Delivery strategy | ask-on-risk |
| Chain strategy | stacked-to-main |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: Medium

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Scaffold + tooling baseline | PR 1 | `main` branch; ~150 lines of config + lockfile |
| 2 | Full Axil Core `@theme` token mapping | PR 2 | depends on PR 1; ~200 lines (globals.css) |
| 3 | Root layout + Nav + page placeholder | PR 3 | depends on PR 2; ~145 lines; visible UI |
| 4 | Final verification pass | PR 4 | depends on PR 3; 0 new lines; 14 automated checks |

## Phase 1: Project Scaffold & Tooling

### T-001: Scaffold Next.js 15 project and wire Prettier + Husky + lint-staged

- **Spec coverage**: scaffold (all), tooling (all)
- **Files**: `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `.gitignore`, `.nvmrc`, `.prettierrc`, `.prettierignore`, `.editorconfig`, `.husky/pre-commit`
- **Lines**: +150 / -0
- **Depends on**: nothing
- **Commit**: `build: scaffold Next.js 15 project with Prettier, Husky, and lint-staged`

Steps:
- [x] 1.1 Run `pnpm create next-app@latest . --ts --eslint --tailwind --app --import-alias "@/*" --turbopack --yes`
- [x] 1.2 Run `pnpm add -D prettier husky lint-staged`
- [x] 1.3 Create `.nvmrc` containing `22`
- [x] 1.4 Create `.prettierrc`: `{"tabWidth":2,"useTabs":false,"singleQuote":true,"trailingComma":"all","printWidth":100,"semi":true}`
- [x] 1.5 Create `.prettierignore`: `node_modules`, `.next`, `pnpm-lock.yaml`, `openspec/`
- [x] 1.6 Create `.editorconfig`: `charset=utf-8`, `indent_size=2`, `indent_style=space`, `end_of_line=lf`, `insert_final_newline=true`
- [x] 1.7 Edit `package.json`: add `engines.node: ">=22.0.0 <23.0.0"`, `scripts.prepare: "husky"`, `scripts.format: "prettier --write ."`, `lint-staged: {"*.{ts,tsx,js,jsx,json,css,md}":["prettier --write","eslint --fix"]}`
- [x] 1.8 Run `pnpm install` (triggers `prepare`, installs Husky hook)
- [x] 1.9 Create `.husky/pre-commit` with content `pnpm lint-staged`
- [x] 1.10 Verify: `pnpm dev` exits cleanly, `pnpm lint` exits 0, `.husky/pre-commit` is executable

## Phase 2: Design System Tokens

### T-002: Map full Axil Core design system to Tailwind v4 `@theme`

- **Spec coverage**: design-tokens (all)
- **Files**: `app/globals.css` (replaced), `postcss.config.mjs` (verified)
- **Lines**: +200 / -existing
- **Depends on**: T-001
- **Commit**: `feat: map Axil Core design system to Tailwind v4 @theme tokens`

Steps:
- [x] 2.1 Replace `app/globals.css` — line 1: `@import "tailwindcss";`
- [x] 2.2 Add `@theme` block: 47 `--color-*` tokens (exact hex values from spec table)
- [x] 2.3 Add 6 `--text-*` tokens with paired `--line-height`, `--letter-spacing`, `--font-weight` suffixes
- [x] 2.4 Add 3 `--font-*` family tokens referencing `var(--font-hanken-grotesk)`, `var(--font-inter)`, `var(--font-material-symbols)`
- [x] 2.5 Add 6 spacing tokens: `--spacing-{base,stack-sm,stack-md,stack-lg,margin-mobile,gutter}` + `--container-max`
- [x] 2.6 Add 6 radius tokens: `--radius: 0.5rem`, `--radius-{sm:0.25rem,md:0.75rem,lg:1rem,xl:1.5rem,full:9999px}`
- [x] 2.7 Add 2 shadow tokens: `--shadow-ambient`, `--shadow-ambient-hover`
- [x] 2.8 Add `@utility material-symbols-filled` with `font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`
- [x] 2.9 Verify PostCSS: `postcss.config.mjs` exports `plugins: {"@tailwindcss/postcss":{}}`
- [x] 2.10 Verify token counts: `grep -c "^\s*--color-" app/globals.css` → 47; `--text-` → 6 base; `--radius` → 6; no `@tailwind` directives

## Phase 3: Root Layout, Nav & Page

### T-003: Build root layout with fonts, Spanish metadata, and Nav wiring

- **Spec coverage**: root-layout (all)
- **Files**: `app/layout.tsx` (replaced)
- **Lines**: +50 / -existing
- **Depends on**: T-001, T-002
- **Commit**: `feat: add root layout with next/font, Spanish metadata, and Nav import`

Steps:
- [x] 3.1 Import `Hanken_Grotesk` and `Inter` from `next/font/google`; load Material Symbols Outlined via Google Fonts CDN because it is not exported by `next/font/google` in Next.js 16.2.9
- [x] 3.2 Configure fonts: Hanken `variable:"--font-hanken-grotesk"` `weight:["400","600","700","800"]`; Inter `variable:"--font-inter"` `weight:["400","500","600"]`; Material Symbols `variable:"--font-material-symbols"` `axes:["FILL","wght","GRAD","opsz"]`
- [x] 3.3 Export `metadata`: `title:"Axil - Digitalización de Alquileres en República Dominicana"`, Spanish `description`
- [x] 3.4 Export `viewport`: `{width:"device-width",initialScale:1}`
- [x] 3.5 Render `<html lang="es" className={\`${hanken.variable} ${inter.variable} ${materialSymbols.variable} scroll-smooth\`}>`
- [x] 3.6 Import and render `<Nav />` above `{children}` inside `<body>`
- [x] 3.7 Verify: `curl localhost:3000 | grep 'lang="es"'`

### T-004: Build Nav Server + Client Components and page placeholder

- **Spec coverage**: navigation (all), page-placeholder (all), cross-cutting (no-useMemo)
- **Files**: `app/_components/nav/nav.tsx` (created), `app/_components/nav/mobile-menu-toggle.tsx` (created), `app/page.tsx` (replaced)
- **Lines**: +115 / -existing
- **Depends on**: T-001, T-002, T-003
- **Commit**: `feat: add glassmorphic Nav with mobile menu, scroll-shadow, and page placeholder`

Steps:
- [x] 4.1 Create `app/_components/nav/nav.tsx` — Server Component (NO `"use client"`); render `<nav id="navbar" className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md shadow-sm">`
- [x] 4.2 Add brand: `<a>` with Material Symbol `apartment` (class `material-symbols-filled`) + text "Axil"
- [x] 4.3 Add desktop links (`hidden md:flex`): `Problema→#problema`, `Soluciones→#soluciones`, `Producto→#producto`, `FAQ→#faq`; CTA: `Demo→#contacto`
- [x] 4.4 Add `// TODO: nav labels are placeholders pending section confirmation` comment
- [x] 4.5 Add mobile menu container + import `<MobileMenuToggle />`
- [x] 4.6 Create `app/_components/nav/mobile-menu-toggle.tsx` — `"use client"`, `useState(false)` for `isOpen`, hamburger `<button className="md:hidden">`, mobile links with `Solicitar Demo→#contacto`
- [x] 4.7 Add `useEffect` scroll listener: toggle `shadow-md` on `#navbar` when `window.scrollY > 20`; cleanup on unmount
- [x] 4.8 Verify NO `useMemo`/`useCallback` in `mobile-menu-toggle.tsx`
- [x] 4.9 Replace `app/page.tsx`: `<main className="pt-32 flex min-h-screen items-center justify-center">`, headline "Próximamente", copy "Estamos construyendo la nueva experiencia de Axil."

## Phase 4: Verification

### T-005: Run full verification suite and final commit

- **Spec coverage**: cross-cutting (dev server boots, quality gates)
- **Files**: none new (formatting fixes may touch existing)
- **Lines**: +0 / -0
- **Depends on**: T-002, T-003, T-004
- **Commit**: `chore: verify landing-foundation quality gates`

Steps:
- [x] 5.1 Run `pnpm tsc --noEmit` → exit 0
- [x] 5.2 Run `pnpm lint` → exit 0
- [x] 5.3 Run `pnpm format` to ensure Prettier compliance
- [x] 5.4 Run token count checks: 47 colors, 6 text bases, 6 radii, 7 spacing, 2 shadows
- [x] 5.5 Verify `@import "tailwindcss"` present, no `@tailwind` directives
- [x] 5.6 Manual browser test: `pnpm dev` → `localhost:3000` → Nav visible, glassmorphic bg, mobile menu toggles at 375px, scroll-shadow activates >20px, placeholder centered
- [x] 5.7 Verify `apartment` icon renders (not fallback □)
- [x] 5.8 Final commit (empty verification commit; no formatting changes needed)
