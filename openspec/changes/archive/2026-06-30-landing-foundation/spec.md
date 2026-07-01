# Delta Spec: landing-foundation

> Project `landing-axilrent` is greenfield. All requirements in this document are **ADDED**; there are no existing capabilities to modify or remove.

---

## Capability: scaffold

### Requirement: Next.js 16+ project scaffold

The project SHALL be scaffolded with `pnpm create next-app@latest . --ts --eslint --tailwind --app --import-alias "@/*" --turbopack --yes` so that the canonical Next.js 16+ (App Router) + React 19 + TypeScript + Tailwind 4 baseline exists. Note: the original draft referenced Next.js 15, but `create-next-app@latest` resolved to Next.js 16.2.9 at the time of implementation; the App Router and `next/font` APIs are stable across both versions, so the spec applies to Next.js 16+ going forward.

#### Scenario: Fresh scaffold produces required files

- GIVEN an empty repository except for `DESIGN.md`, `.git/`, and `openspec/`
- WHEN `pnpm create next-app@latest . --ts --eslint --tailwind --app --import-alias "@/*" --turbopack --yes` runs
- THEN it SHALL complete without error
- AND it SHALL generate `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, `eslint.config.mjs`, `.gitignore`, `app/layout.tsx`, `app/page.tsx`, and `app/globals.css`

### Requirement: Node engine pinning

`package.json` SHALL declare a pinned Node engine range and a matching `.nvmrc` SHALL exist at the repository root.

#### Scenario: Node version is reproducible

- GIVEN `package.json` exists
- WHEN `engines.node` is read
- THEN it SHALL be `">=22.0.0 <23.0.0"`
- AND `.nvmrc` SHALL contain exactly `22`

---

## Capability: root-layout

### Requirement: Spanish HTML document and viewport

`app/layout.tsx` SHALL export a root layout that renders `<html lang="es">` and includes a viewport meta tag via the Next.js `metadata`/`viewport` exports.

#### Scenario: Document root is Spanish and responsive

- GIVEN the dev server is running at `localhost:3000`
- WHEN the rendered HTML is inspected
- THEN the `<html>` element SHALL have `lang="es"`
- AND the `<head>` SHALL contain `<meta name="viewport" content="width=device-width, initial-scale=1">`

### Requirement: Font variable wiring

The root layout SHALL load Hanken Grotesk, Inter, and Material Symbols Outlined (with the FILL, wght, GRAD, and opsz variation axes available) and apply the font CSS variables to the `<html>` element through `className`. The loading mechanism is:

- **Hanken Grotesk** and **Inter** SHALL be loaded via `next/font/google` with `variable` exports (`--font-hanken-grotesk` and `--font-inter` respectively).
- **Material Symbols Outlined** SHALL be loaded either via `next/font/google` (if exported in the current Next.js version) with `variable: "--font-material-symbols"` and `axes: ["FILL", "wght", "GRAD", "opsz"]`, OR via a Google Fonts CDN `<link>` in the layout with a URL that includes the FILL axis (e.g., `Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`). Note: Next.js 16.2.9 does not export `Material_Symbols_Outlined` from `next/font/google`, so the CDN mechanism is the current implementation. Revisit when Next.js adds the export.

#### Scenario: Font variables are present on `<html>`

- GIVEN `app/layout.tsx` exists
- WHEN the layout loads the three fonts
- THEN `Hanken_Grotesk` SHALL be loaded via `next/font/google` with `variable: "--font-hanken-grotesk"` and `weight: ["400", "600", "700", "800"]`
- AND `Inter` SHALL be loaded via `next/font/google` with `variable: "--font-inter"` and `weight: ["400", "500", "600"]`
- AND `Material Symbols Outlined` SHALL be loaded (mechanism: `next/font/google` if exported, otherwise Google Fonts CDN) with the FILL, wght, GRAD, and opsz axes available
- AND `<html className>` SHALL include `--font-hanken-grotesk` and `--font-inter` variable classes

### Requirement: Spanish metadata

The layout SHALL export Spanish `metadata` with a title and description matching the Axil market.

#### Scenario: Metadata is in Spanish

- GIVEN `app/layout.tsx` exists
- WHEN the `metadata` export is read
- THEN `metadata.title` SHALL be `"Axil - Digitalización de Alquileres en República Dominicana"`
- AND `metadata.description` SHALL be a Spanish sentence describing the Axil rental platform

### Requirement: Smooth scrolling

The `<html>` element SHALL include the `scroll-smooth` utility class so anchor navigation animates smoothly.

#### Scenario: Smooth scroll class is present

- GIVEN `app/layout.tsx` renders the root
- WHEN the `<html>` class list is inspected
- THEN it SHALL contain `scroll-smooth`

---

## Capability: design-tokens

### Requirement: Tailwind 4 CSS entry

`app/globals.css` SHALL use the Tailwind v4 entry directive and SHALL NOT contain the legacy v3 `@tailwind` triple.

#### Scenario: CSS entry is v4-only

- GIVEN `app/globals.css` exists
- WHEN its first lines are read
- THEN the first non-comment line SHALL be `@import "tailwindcss";`
- AND the file SHALL NOT contain `@tailwind base`, `@tailwind components`, or `@tailwind utilities`

### Requirement: PostCSS registration

`postcss.config.mjs` SHALL register the Tailwind v4 PostCSS plugin.

#### Scenario: PostCSS config uses v4 plugin

- GIVEN `postcss.config.mjs` exists
- WHEN its default export is read
- THEN it SHALL expose `plugins: { "@tailwindcss/postcss": {} }`

### Requirement: Full Axil Core color palette

A single `@theme` block in `app/globals.css` SHALL declare all 47 Material 3 color tokens from `DESIGN.md` as `--color-{name}: {hex};`.

#### Scenario: All 47 color tokens are mapped

- GIVEN `app/globals.css` exists
- WHEN the `@theme` block is parsed
- THEN it SHALL contain exactly these `--color-*` declarations:

| Token | Value |
|---|---|
| `--color-surface` | `#f7f9fb` |
| `--color-surface-dim` | `#d8dadc` |
| `--color-surface-bright` | `#f7f9fb` |
| `--color-surface-container-lowest` | `#ffffff` |
| `--color-surface-container-low` | `#f2f4f6` |
| `--color-surface-container` | `#eceef0` |
| `--color-surface-container-high` | `#e6e8ea` |
| `--color-surface-container-highest` | `#e0e3e5` |
| `--color-on-surface` | `#191c1e` |
| `--color-on-surface-variant` | `#5b403f` |
| `--color-inverse-surface` | `#2d3133` |
| `--color-inverse-on-surface` | `#eff1f3` |
| `--color-outline` | `#8f6f6e` |
| `--color-outline-variant` | `#e4bebc` |
| `--color-surface-tint` | `#bb152c` |
| `--color-primary` | `#b7102a` |
| `--color-on-primary` | `#ffffff` |
| `--color-primary-container` | `#db313f` |
| `--color-on-primary-container` | `#fffbff` |
| `--color-inverse-primary` | `#ffb3b1` |
| `--color-secondary` | `#006d43` |
| `--color-on-secondary` | `#ffffff` |
| `--color-secondary-container` | `#75f8b3` |
| `--color-on-secondary-container` | `#007147` |
| `--color-tertiary` | `#465d81` |
| `--color-on-tertiary` | `#ffffff` |
| `--color-tertiary-container` | `#5f759b` |
| `--color-on-tertiary-container` | `#fefcff` |
| `--color-error` | `#ba1a1a` |
| `--color-on-error` | `#ffffff` |
| `--color-error-container` | `#ffdad6` |
| `--color-on-error-container` | `#93000a` |
| `--color-primary-fixed` | `#ffdad8` |
| `--color-primary-fixed-dim` | `#ffb3b1` |
| `--color-on-primary-fixed` | `#410007` |
| `--color-on-primary-fixed-variant` | `#92001c` |
| `--color-secondary-fixed` | `#78fbb6` |
| `--color-secondary-fixed-dim` | `#59de9b` |
| `--color-on-secondary-fixed` | `#002111` |
| `--color-on-secondary-fixed-variant` | `#005232` |
| `--color-tertiary-fixed` | `#d5e3ff` |
| `--color-tertiary-fixed-dim` | `#b0c7f1` |
| `--color-on-tertiary-fixed` | `#001b3c` |
| `--color-on-tertiary-fixed-variant` | `#30476a` |
| `--color-background` | `#f7f9fb` |
| `--color-on-background` | `#191c1e` |
| `--color-surface-variant` | `#e0e3e5` |

### Requirement: Semantic typography tokens

The `@theme` block SHALL declare six typography tokens with paired line-height, letter-spacing, and font-weight suffixes where applicable.

#### Scenario: Typography tokens generate combined utilities

- GIVEN `app/globals.css` exists
- WHEN the `@theme` block is parsed
- THEN it SHALL contain:
  - `--text-headline-xl: 48px;` `--text-headline-xl--line-height: 56px;` `--text-headline-xl--letter-spacing: -0.02em;` `--text-headline-xl--font-weight: 700;`
  - `--text-headline-lg: 32px;` `--text-headline-lg--line-height: 40px;` `--text-headline-lg--letter-spacing: -0.01em;` `--text-headline-lg--font-weight: 600;`
  - `--text-headline-lg-mobile: 24px;` `--text-headline-lg-mobile--line-height: 32px;` `--text-headline-lg-mobile--font-weight: 600;`
  - `--text-body-md: 16px;` `--text-body-md--line-height: 24px;` `--text-body-md--font-weight: 400;`
  - `--text-body-sm: 14px;` `--text-body-sm--line-height: 20px;` `--text-body-sm--font-weight: 400;`
  - `--text-label-caps: 12px;` `--text-label-caps--line-height: 16px;` `--text-label-caps--letter-spacing: 0.05em;` `--text-label-caps--font-weight: 600;`

### Requirement: Font family tokens

The `@theme` block SHALL declare font family tokens that reference the `next/font` CSS variables.

#### Scenario: Font tokens point to next/font variables

- GIVEN `app/globals.css` exists
- WHEN the `@theme` block is parsed
- THEN it SHALL contain:
  - `--font-hanken: var(--font-hanken-grotesk), ui-sans-serif, system-ui, sans-serif;`
  - `--font-inter: var(--font-inter), ui-sans-serif, system-ui, sans-serif;`
  - `--font-material-symbols: var(--font-material-symbols), "Material Symbols Outlined", sans-serif;`

### Requirement: Spacing tokens

The `@theme` block SHALL declare seven spacing tokens from `DESIGN.md`.

#### Scenario: Spacing tokens are available as utilities

- GIVEN `app/globals.css` exists
- WHEN the `@theme` block is parsed
- THEN it SHALL contain:
  - `--spacing-base: 8px;`
  - `--spacing-stack-sm: 12px;`
  - `--spacing-stack-md: 24px;`
  - `--spacing-stack-lg: 48px;`
  - `--spacing-margin-mobile: 16px;`
  - `--spacing-gutter: 24px;`
  - `--container-max: 1200px;`

### Requirement: Radius tokens

The `@theme` block SHALL declare six radius tokens.

#### Scenario: Radius tokens cover card and button radii

- GIVEN `app/globals.css` exists
- WHEN the `@theme` block is parsed
- THEN it SHALL contain:
  - `--radius: 0.5rem;` (DEFAULT — the `rounded` utility)
  - `--radius-sm: 0.25rem;`
  - `--radius-md: 0.75rem;`
  - `--radius-lg: 1rem;`
  - `--radius-xl: 1.5rem;`
  - `--radius-full: 9999px;`

### Requirement: Ambient shadow tokens

The `@theme` block SHALL declare the two ambient shadow tokens from `DESIGN.md`.

#### Scenario: Shadow utilities exist

- GIVEN `app/globals.css` exists
- WHEN the `@theme` block is parsed
- THEN it SHALL contain:
  - `--shadow-ambient: 0 10px 40px -10px rgba(70, 93, 129, 0.08);`
  - `--shadow-ambient-hover: 0 20px 40px -10px rgba(70, 93, 129, 0.12);`

### Requirement: Material Symbols filled utility

`app/globals.css` SHALL define a custom `@utility material-symbols-filled` that sets `font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`.

#### Scenario: Filled icon variant works

- GIVEN `app/globals.css` exists
- WHEN the `@utility material-symbols-filled` rule is read
- THEN it SHALL set `font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`

---

## Capability: navigation

### Requirement: Nav Server Component structure

`app/_components/nav/nav.tsx` SHALL be a Server Component (no `"use client"` directive) and SHALL render a fixed, glassmorphic navigation bar containing brand, desktop links, CTA, and mobile menu container.

#### Scenario: Nav renders required layout

- GIVEN `app/_components/nav/nav.tsx` exists
- WHEN its source is read
- THEN it SHALL NOT contain `"use client"`
- AND the root `<nav>` SHALL have `className` including `fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md shadow-sm`
- AND it SHALL render a brand link with the Material Symbol `apartment` (filled) and the text `Axil`
- AND it SHALL render four desktop anchor links
- AND it SHALL render a CTA anchor button
- AND it SHALL render a mobile menu container

### Requirement: Nav anchor targets and labels

Desktop and mobile nav links SHALL anchor to the section identifiers defined in the Stitch structural reference, and labels SHALL be Spanish placeholders pending section confirmation.

#### Scenario: Links point to the correct anchors

- GIVEN the nav component is rendered
- WHEN the link labels and `href` attributes are inspected
- THEN the desktop links SHALL be `Problema` → `#problema`, `Soluciones` → `#soluciones`, `Producto` → `#producto`, `FAQ` → `#faq`
- AND the desktop CTA SHALL read `Demo` and link to `#contacto`
- AND the mobile CTA SHALL read `Solicitar Demo` and link to `#contacto`
- AND a TODO comment SHALL mark the four nav labels as placeholders

### Requirement: Mobile menu toggle Client Component

`app/_components/nav/mobile-menu-toggle.tsx` SHALL be a Client Component that owns the mobile menu open/closed state and renders the hamburger trigger visible only below the `md` breakpoint.

#### Scenario: Toggle controls mobile menu visibility

- GIVEN `app/_components/nav/mobile-menu-toggle.tsx` exists
- WHEN its source is read
- THEN it SHALL contain `"use client"`
- AND it SHALL declare `const [isOpen, setIsOpen] = useState(false)`
- AND the trigger button SHALL be hidden on `md` and wider (`md:hidden`)
- AND clicking the trigger SHALL toggle `isOpen`

### Requirement: Mobile menu responsive visibility

The mobile menu container SHALL be hidden by default on `md` and wider, and SHALL be displayed when the toggle state is open.

#### Scenario: Menu respects breakpoint and state

- GIVEN the nav is rendered on a viewport narrower than `md`
- WHEN the mobile menu toggle is clicked
- THEN the mobile menu container SHALL become visible
- AND on viewports `md` and wider the mobile menu container SHALL remain hidden regardless of state

### Requirement: Nav scroll-shadow effect

`mobile-menu-toggle.tsx` SHALL attach a scroll listener that adds `shadow-md` to the nav when `window.scrollY > 20` and removes it when the page is scrolled back to the top.

#### Scenario: Shadow appears after scroll

- GIVEN the page is at `window.scrollY === 0`
- WHEN the user scrolls more than 20 pixels
- THEN the `<nav>` element SHALL gain the class `shadow-md`
- AND when the user scrolls back to the top the class SHALL be removed

---

## Capability: page-placeholder

### Requirement: Spanish coming-soon placeholder

`app/page.tsx` SHALL render a `<main>` element that clears the fixed nav and centers a Spanish "Próximamente" notice.

#### Scenario: Placeholder is visible and in Spanish

- GIVEN the dev server is running
- WHEN the root route `/` is loaded
- THEN `<main>` SHALL have `className` including `pt-32 flex min-h-screen items-center justify-center`
- AND it SHALL render a headline reading `Próximamente`
- AND it SHALL render supporting copy reading `Estamos construyendo la nueva experiencia de Axil.`
- AND all rendered text SHALL be in Spanish

---

## Capability: tooling

### Requirement: Prettier configuration

`.prettierrc` SHALL exist at the repository root with the project formatting conventions.

#### Scenario: Prettier config matches project style

- GIVEN `.prettierrc` exists
- WHEN it is parsed
- THEN `tabWidth` SHALL be `2`
- AND `useTabs` SHALL be `false`
- AND `singleQuote` SHALL be `true`
- AND `trailingComma` SHALL be `"all"`
- AND `printWidth` SHALL be `100`
- AND `semi` SHALL be `true`

### Requirement: Prettier ignore file

`.prettierignore` SHALL exist and exclude generated and dependency directories.

#### Scenario: Ignored paths are listed

- GIVEN `.prettierignore` exists
- WHEN it is read
- THEN it SHALL contain `node_modules`, `.next`, `pnpm-lock.yaml`, and `openspec/`

### Requirement: EditorConfig

`.editorconfig` SHALL exist at the repository root with consistent editor settings.

#### Scenario: EditorConfig is present and correct

- GIVEN `.editorconfig` exists
- WHEN it is read
- THEN it SHALL set `charset = utf-8`
- AND `indent_size = 2`
- AND `indent_style = space`
- AND `end_of_line = lf`
- AND `insert_final_newline = true`

### Requirement: Husky pre-commit hook

`.husky/pre-commit` SHALL exist and execute `pnpm lint-staged`.

#### Scenario: Pre-commit hook runs lint-staged

- GIVEN `.husky/pre-commit` exists
- WHEN it is read
- THEN its contents SHALL include `pnpm lint-staged`

### Requirement: Package scripts and lint-staged config

`package.json` SHALL include `prepare`, `format`, and `lint-staged` configurations.

#### Scenario: Scripts and lint-staged are configured

- GIVEN `package.json` exists
- WHEN it is parsed
- THEN `scripts.prepare` SHALL be `"husky"`
- AND `scripts.format` SHALL be `"prettier --write ."`
- AND `lint-staged` SHALL be `{ "*.{ts,tsx,js,jsx,json,css,md}": ["prettier --write", "eslint --fix"] }`

### Requirement: Husky installation on install

Running `pnpm install` SHALL trigger the `prepare` script and install the Husky hook so that `.husky/pre-commit` is executable.

#### Scenario: Install sets up the hook

- GIVEN a clean checkout with `package.json` present
- WHEN `pnpm install` completes
- THEN `.husky/pre-commit` SHALL exist and be executable
- AND `husky` SHALL be listed in `devDependencies`
- AND `lint-staged` SHALL be listed in `devDependencies`
- AND `prettier` SHALL be listed in `devDependencies`

---

## Cross-cutting verification

### Requirement: Dev server boots cleanly

After implementation, `pnpm dev` SHALL start without errors, `pnpm lint` SHALL exit `0`, and `pnpm tsc --noEmit` SHALL exit `0`.

#### Scenario: Quality gates pass

- GIVEN all files are written
- WHEN `pnpm install`, `pnpm lint`, and `pnpm tsc --noEmit` run sequentially
- THEN `pnpm install` SHALL exit `0`
- AND `pnpm lint` SHALL exit `0`
- AND `pnpm tsc --noEmit` SHALL exit `0`
- AND `pnpm dev` SHALL start without throwing

### Requirement: No manual memoization in client component

The client component `mobile-menu-toggle.tsx` SHALL NOT use `useMemo` or `useCallback`, consistent with the React 19 compiler convention.

#### Scenario: Client component follows React 19 patterns

- GIVEN `app/_components/nav/mobile-menu-toggle.tsx` exists
- WHEN its source is read
- THEN it SHALL NOT contain `useMemo` or `useCallback`
- AND it SHALL use named imports from `react` (`import { useState, useEffect } from "react"`)
