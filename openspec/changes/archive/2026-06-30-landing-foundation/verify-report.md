# Verify Report: landing-foundation

## Executive Summary

- **Verdict**: READY-FOR-ARCHIVE
- **Total requirements**: 29
- **PASS**: 27
- **FAIL (CRITICAL)**: 0
- **DEVIATION (WARNING)**: 2
- **SUGGESTION**: 1

The implementation satisfies the functional intent of all 29 delta-spec requirements. Quality gates (`pnpm tsc --noEmit`, `pnpm lint`, `pnpm prettier --check .`) pass, the dev server boots cleanly, and the rendered HTML contains the expected Spanish document root, glassmorphic nav, Material Symbols icon, and placeholder content. The only material issue is the documented Material Symbols loading deviation: Next.js 16.2.9 does not export `Material_Symbols_Outlined` from `next/font/google`, so the font is loaded via a Google Fonts CDN `<link>` instead. The functional outcome is verified (FILL axis present, `apartment` icon uses the `material-symbols-filled` utility, no fallback `□`). This is reported as a WARNING, not a blocker.

---

## Capability: scaffold

### Requirement: Next.js 15 project scaffold

- **Status**: PASS
- **Evidence**:
  - All required scaffold files exist at repository root / in `app/`:
    - `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, `eslint.config.mjs`, `.gitignore`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
  - `package.json` dependencies reflect the scaffold baseline:
    - `next: 16.2.9`, `react: 19.2.4`, `react-dom: 19.2.4`, `tailwindcss: ^4`, `@tailwindcss/postcss: ^4`
- **Notes**: The spec command uses `pnpm create next-app@latest`, which installed Next.js 16.2.9 rather than the spec's referenced "Next.js 15". This is a version drift caused by `@latest`, not a functional defect, and is noted as a SUGGESTION rather than a warning.

### Requirement: Node engine pinning

- **Status**: PASS
- **Evidence**:
  - `package.json` line 5-7: `"engines": { "node": ">=22.0.0 <23.0.0" }`
  - `.nvmrc` line 1: `22`
- **Notes**: Exact match.

---

## Capability: root-layout

### Requirement: Spanish HTML document and viewport

- **Status**: PASS
- **Evidence**:
  - `app/layout.tsx` line 35: `<html lang="es" ...>`
  - `app/layout.tsx` lines 24-27:
    ```tsx
    export const viewport: Viewport = {
      width: 'device-width',
      initialScale: 1,
    };
    ```
  - Rendered HTML from `curl http://localhost:3000/`:
    - `<html lang="es" ...>`
    - `<meta name="viewport" content="width=device-width, initial-scale=1"/>`
- **Notes**: Verified at runtime.

### Requirement: Font variable wiring

- **Status**: DEVIATION (WARNING)
- **Evidence**:
  - `app/layout.tsx` line 2 imports only `Hanken_Grotesk` and `Inter` from `next/font/google`.
  - `app/layout.tsx` lines 6-16 declare the two `next/font` variables with correct weights and CSS variables:
    - `Hanken_Grotesk`: `variable: '--font-hanken-grotesk'`, `weight: ['400', '600', '700', '800']`
    - `Inter`: `variable: '--font-inter'`, `weight: ['400', '500', '600']`
  - `app/layout.tsx` line 35 applies only the Hanken and Inter variable classes plus `scroll-smooth`:
    ```tsx
    <html lang="es" className={`${hankenGrotesk.variable} ${inter.variable} scroll-smooth`}>
    ```
  - `app/layout.tsx` lines 36-41 load Material Symbols via Google Fonts CDN `<link>` with an explanatory comment:
    ```tsx
    {/* Material Symbols Outlined is not exposed by next/font/google in Next.js 16.2.9; load via Google Fonts CDN. */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0&display=swap" />
    ```
- **Notes**: This is the documented deviation. The spec requires `Material_Symbols_Outlined` to be imported from `next/font/google` with `variable: "--font-material-symbols"` and `axes`. Next.js 16.2.9 does not export that font. The CDN link includes the `FILL`, `wght`, `GRAD`, and `opsz` axes, and the brand icon renders correctly as a filled symbol. Functional outcome is preserved.

### Requirement: Spanish metadata

- **Status**: PASS
- **Evidence**:
  - `app/layout.tsx` lines 18-22:
    ```tsx
    export const metadata: Metadata = {
      title: 'Axil - Digitalización de Alquileres en República Dominicana',
      description:
        'Axil digitaliza la gestión de alquileres en República Dominicana para propietarios, inquilinos y administradores de propiedades.',
    };
    ```
  - Rendered HTML `<title>` and `<meta name="description">` match exactly.
- **Notes**: Exact match.

### Requirement: Smooth scrolling

- **Status**: PASS
- **Evidence**:
  - `app/layout.tsx` line 35: `<html lang="es" className={`... scroll-smooth`}>`
  - Rendered HTML: `<html ... class="... scroll-smooth">`
- **Notes**: Exact match.

---

## Capability: design-tokens

### Requirement: Tailwind 4 CSS entry

- **Status**: PASS
- **Evidence**:
  - `app/globals.css` line 1: `@import 'tailwindcss';`
  - No `@tailwind base`, `@tailwind components`, or `@tailwind utilities` directives present.
- **Notes**: Exact match.

### Requirement: PostCSS registration

- **Status**: PASS
- **Evidence**:
  - `postcss.config.mjs` lines 1-7:
    ```js
    const config = {
      plugins: {
        '@tailwindcss/postcss': {},
      },
    };
    export default config;
    ```
- **Notes**: Exact match.

### Requirement: Full Axil Core color palette

- **Status**: PASS
- **Evidence**:
  - `app/globals.css` lines 5-51 declare 47 `--color-*` tokens.
  - Command result: `grep -c "^\s*--color-" app/globals.css` → `47`
  - Every token/value pair in the spec table is present verbatim (e.g., `--color-primary: #b7102a;`, `--color-on-secondary-container: #007147;`, `--color-surface-container-lowest: #ffffff;`).
- **Notes**: Exact match.

### Requirement: Semantic typography tokens

- **Status**: PASS
- **Evidence**:
  - `app/globals.css` lines 54-79 declare all six base typography tokens with paired suffixes:
    - `--text-headline-xl` (48px, lh 56px, ls -0.02em, fw 700)
    - `--text-headline-lg` (32px, lh 40px, ls -0.01em, fw 600)
    - `--text-headline-lg-mobile` (24px, lh 32px, fw 600)
    - `--text-body-md` (16px, lh 24px, fw 400)
    - `--text-body-sm` (14px, lh 20px, fw 400)
    - `--text-label-caps` (12px, lh 16px, ls 0.05em, fw 600)
  - Strict count command: `grep -cE "^\s*--text-(headline|body|label)-[a-z]+(-mobile)?:" app/globals.css` → `6`
- **Notes**: Exact match.

### Requirement: Font family tokens

- **Status**: DEVIATION (WARNING)
- **Evidence**:
  - `app/globals.css` lines 82-83 match the spec for Hanken and Inter:
    ```css
    --font-hanken: var(--font-hanken-grotesk), ui-sans-serif, system-ui, sans-serif;
    --font-inter: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
    ```
  - `app/globals.css` line 84-85 do **not** match the spec's Material Symbols token:
    ```css
    --font-material-symbols: 'Material Symbols Outlined';
    --font-material-symbols--font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    ```
    The spec expects:
    ```css
    --font-material-symbols: var(--font-material-symbols), "Material Symbols Outlined", sans-serif;
    ```
- **Notes**: This is a direct consequence of WARN-001 (Material Symbols not available via `next/font/google`). The current token references the Google Fonts family name directly and works in combination with the `material-symbols-filled` utility. Functional outcome is preserved.

### Requirement: Spacing tokens

- **Status**: PASS
- **Evidence**:
  - `app/globals.css` lines 88-94 declare all seven spacing/container tokens:
    - `--spacing-base: 8px;`
    - `--spacing-stack-sm: 12px;`
    - `--spacing-stack-md: 24px;`
    - `--spacing-stack-lg: 48px;`
    - `--spacing-margin-mobile: 16px;`
    - `--spacing-gutter: 24px;`
    - `--container-max: 1200px;`
- **Notes**: Exact match.

### Requirement: Radius tokens

- **Status**: PASS
- **Evidence**:
  - `app/globals.css` lines 97-102 declare six radius tokens:
    - `--radius: 0.5rem;`
    - `--radius-sm: 0.25rem;`
    - `--radius-md: 0.75rem;`
    - `--radius-lg: 1rem;`
    - `--radius-xl: 1.5rem;`
    - `--radius-full: 9999px;`
- **Notes**: Exact match to the spec (which differs from an older `design.md` draft that mapped `--radius-md` to 0.5rem).

### Requirement: Ambient shadow tokens

- **Status**: PASS
- **Evidence**:
  - `app/globals.css` lines 105-106:
    ```css
    --shadow-ambient: 0 10px 40px -10px rgba(70, 93, 129, 0.08);
    --shadow-ambient-hover: 0 20px 40px -10px rgba(70, 93, 129, 0.12);
    ```
- **Notes**: Exact match.

### Requirement: Material Symbols filled utility

- **Status**: PASS
- **Evidence**:
  - `app/globals.css` lines 109-115:
    ```css
    @utility material-symbols-filled {
      font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
    }
    ```
- **Notes**: Exact match.

---

## Capability: navigation

### Requirement: Nav Server Component structure

- **Status**: PASS
- **Evidence**:
  - `app/_components/nav/nav.tsx` has no `"use client"` directive.
  - `app/_components/nav/nav.tsx` lines 15-21 render the root `<nav>` with the required glassmorphic classes:
    ```tsx
    <nav
      id="navbar"
      className={cn(
        'fixed top-0 z-50 w-full bg-surface-container-lowest/80 shadow-sm backdrop-blur-md',
        'transition-shadow',
      )}
    >
    ```
  - Brand: lines 23-30 with `apartment` icon + `Axil` text.
  - Desktop links: lines 32-41.
  - Desktop CTA: lines 42-50.
  - Mobile menu container: `<MobileMenuToggle />` at line 53.
- **Notes**: `transition-shadow` is an additive enhancement; all required classes are present.

### Requirement: Nav anchor targets and labels

- **Status**: PASS
- **Evidence**:
  - `app/_components/nav/nav.tsx` line 5: `// TODO: nav labels are placeholders pending section confirmation`
  - `navLinks` lines 6-11:
    ```ts
    const navLinks = [
      { href: '#problema', label: 'Problema' },
      { href: '#soluciones', label: 'Soluciones' },
      { href: '#producto', label: 'Producto' },
      { href: '#faq', label: 'FAQ' },
    ];
    ```
  - Desktop CTA at line 42-50: `Demo` → `#contacto`
  - Mobile CTA at `mobile-menu-toggle.tsx` lines 64-73: `Solicitar Demo` → `#contacto`
- **Notes**: Exact match.

### Requirement: Mobile menu toggle Client Component

- **Status**: PASS
- **Evidence**:
  - `app/_components/nav/mobile-menu-toggle.tsx` line 1: `'use client';`
  - Line 3: `import { useState, useEffect } from 'react';`
  - Line 15: `const [isOpen, setIsOpen] = useState(false);`
  - Lines 39-49 render the trigger button inside a wrapper with `className="md:hidden"` (line 38).
  - Line 41: `onClick={() => setIsOpen(!isOpen)}`
- **Notes**: Exact match.

### Requirement: Mobile menu responsive visibility

- **Status**: PASS
- **Evidence**:
  - The entire toggle subtree is wrapped in `className="md:hidden"` (`mobile-menu-toggle.tsx` line 38), so it is hidden on `md` and wider regardless of `isOpen`.
  - The mobile menu panel at line 52 is rendered only when `isOpen` is true.
- **Notes**: Verified by source inspection and responsive-class logic.

### Requirement: Nav scroll-shadow effect

- **Status**: PASS
- **Evidence**:
  - `app/_components/nav/mobile-menu-toggle.tsx` lines 17-35:
    ```tsx
    useEffect(() => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;
      const handleScroll = () => {
        if (window.scrollY > 20) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);
    ```
- **Notes**: Listener is added/removed correctly and initial scroll position is checked on mount.

---

## Capability: page-placeholder

### Requirement: Spanish coming-soon placeholder

- **Status**: PASS
- **Evidence**:
  - `app/page.tsx` line 3:
    ```tsx
    <main className="flex min-h-screen items-center justify-center pt-32">
    ```
  - `app/page.tsx` line 5: `<h1 ...>Próximamente</h1>`
  - `app/page.tsx` lines 6-8: `<p ...>Estamos construyendo la nueva experiencia de Axil.</p>`
  - Rendered HTML contains exactly these strings with no English user-facing text.
- **Notes**: Exact match.

---

## Capability: tooling

### Requirement: Prettier configuration

- **Status**: PASS
- **Evidence**:
  - `.prettierrc` lines 1-8:
    ```json
    {
      "tabWidth": 2,
      "useTabs": false,
      "singleQuote": true,
      "trailingComma": "all",
      "printWidth": 100,
      "semi": true
    }
    ```
- **Notes**: Exact match.

### Requirement: Prettier ignore file

- **Status**: PASS
- **Evidence**:
  - `.prettierignore` lines 1-6 contain `node_modules`, `.next`, `pnpm-lock.yaml`, and `openspec/`.
- **Notes**: Exact match; additional entries `.atl/` and `DESIGN.md` are harmless.

### Requirement: EditorConfig

- **Status**: PASS
- **Evidence**:
  - `.editorconfig` lines 3-9:
    ```ini
    [*]
    charset = utf-8
    indent_style = space
    indent_size = 2
    end_of_line = lf
    insert_final_newline = true
    trim_trailing_whitespace = true
    ```
- **Notes**: All required settings present; `trim_trailing_whitespace` is an additive enhancement.

### Requirement: Husky pre-commit hook

- **Status**: PASS
- **Evidence**:
  - `.husky/pre-commit` line 1: `pnpm lint-staged`
  - File is executable (`-rwxrwxr-x`, mode `775`).
- **Notes**: Exact match.

### Requirement: Package scripts and lint-staged config

- **Status**: PASS
- **Evidence**:
  - `package.json` line 13: `"prepare": "husky"`
  - `package.json` line 14: `"format": "prettier --write ."`
  - `package.json` lines 16-21:
    ```json
    "lint-staged": {
      "*.{ts,tsx,js,jsx,json,css,md}": [
        "prettier --write",
        "eslint --fix"
      ]
    }
    ```
- **Notes**: Exact match.

### Requirement: Husky installation on install

- **Status**: PASS
- **Evidence**:
  - `.husky/pre-commit` exists and is executable.
  - `package.json` `devDependencies` include:
    - `husky: ^9` (line 36)
    - `lint-staged: ^17` (line 37)
    - `prettier: ^3` (line 38)
  - `scripts.prepare: "husky"` causes `pnpm install` to install the hook.
- **Notes**: Exact match.

---

## Cross-cutting verification

### Requirement: Dev server boots cleanly

- **Status**: PASS
- **Evidence**:
  - `pnpm tsc --noEmit` → exit 0 (no output)
  - `pnpm lint` → exit 0 (`$ eslint`)
  - `pnpm prettier --check .` → "All matched files use Prettier code style!"
  - `pnpm dev` started successfully; `curl http://localhost:3000/` returned HTTP 200 with the expected HTML.
- **Notes**: All quality gates pass.

### Requirement: No manual memoization in client component

- **Status**: PASS
- **Evidence**:
  - `app/_components/nav/mobile-menu-toggle.tsx` imports only `useState` and `useEffect` from `react`.
  - `grep -E "use(Memo|Callback)" app/_components/nav/mobile-menu-toggle.tsx` returns no matches.
- **Notes**: Exact match.

---

## Findings Summary

### CRITICAL (must fix before archive)

None.

### WARNING (deviations that need owner decision)

- **[WARN-001] Material Symbols loaded via Google Fonts CDN instead of `next/font/google`**
  - **Requirement**: "The root layout SHALL load Hanken Grotesk, Inter, and Material Symbols Outlined via `next/font/google`... `Material_Symbols_Outlined` SHALL use `variable: "--font-material-symbols"` and `axes: ["FILL", "wght", "GRAD", "opsz"]`"
  - **Issue**: `app/layout.tsx` only imports `Hanken_Grotesk` and `Inter` from `next/font/google`. Material Symbols Outlined is loaded via a Google Fonts `<link>` because Next.js 16.2.9 does not export `Material_Symbols_Outlined` from `next/font/google`. The `<html>` className therefore does not include a `--font-material-symbols` variable class.
  - **Remediation**: Owner should decide whether to accept the CDN workaround. If accepted, no code change is required. A future migration to `next/font/google` can happen if/when Next.js exposes `Material_Symbols_Outlined`. If rejected, the project would need to vendor the font or downgrade/patch Next.js.

- **[WARN-002] `--font-material-symbols` token does not reference the `next/font` variable**
  - **Requirement**: "`--font-material-symbols: var(--font-material-symbols), \"Material Symbols Outlined\", sans-serif;`"
  - **Issue**: Because Material Symbols is not loaded through `next/font`, the CSS variable in `app/globals.css` line 84 uses `'Material Symbols Outlined'` directly instead of `var(--font-material-symbols), ...`.
  - **Remediation**: Same as WARN-001 — accept the documented deviation, or migrate to `next/font/google` when available and update the token to include the variable fallback.

### SUGGESTION (optional improvements)

- **[SUGG-001] Pin Next.js major version if the project baseline truly requires v15**
  - **Issue**: The spec references a "Next.js 15" baseline, but the scaffold command (`create next-app@latest`) installed Next.js 16.2.9. This is not a functional problem, but it means the project is on a newer major than the spec explicitly named.
  - **Recommendation**: If the team intends to stay on Next.js 16, update the spec language to "Next.js 15+". If the team requires Next.js 15, pin `next` to `^15` in `package.json` and regenerate the lockfile.

---

## Cross-cutting checks

| Check | Result |
|---|---|
| `pnpm tsc --noEmit` | PASS (exit 0, no output) |
| `pnpm lint` | PASS (exit 0) |
| `pnpm prettier --check .` | PASS — all files Prettier-compliant |
| Dev server boots | yes — `curl http://localhost:3000/` returned HTTP 200 |
| `lang="es"` present | yes — rendered `<html lang="es">` |
| `scroll-smooth` present | yes — rendered `<html class="... scroll-smooth">` |
| Glassmorphic nav present | yes — `<nav class="... bg-surface-container-lowest/80 backdrop-blur-md shadow-sm ...">` |
| Material Symbols icon renders | yes — `<span class="material-symbols-filled font-material-symbols ...">apartment</span>`; Google Fonts URL includes `FILL` axis |
| 47 color tokens | yes — `grep -c "^\s*--color-" app/globals.css` → 47 |
| 6 typography base tokens | yes — strict regex count → 6 |
| 6 radius tokens | yes — `grep -cE "^\s*--radius(:\|-)" app/globals.css` → 6 |
| 7 spacing tokens | yes — 6 `--spacing-*` + 1 `--container-max` |
| 2 shadow tokens | yes — `grep -c "^\s*--shadow-" app/globals.css` → 2 |
| Husky hook executable | yes — mode `775`, `-rwxrwxr-x` |
| Node engine pinned | yes — `"node": ">=22.0.0 <23.0.0"` and `.nvmrc` = `22` |
| No `useMemo`/`useCallback` in Client Component | yes — none found in `mobile-menu-toggle.tsx` |

---

## Verdict

The `landing-foundation` change is **READY-FOR-ARCHIVE**. Twenty-seven of twenty-nine requirements pass cleanly. The two remaining items are the documented Material Symbols deviation (WARN-001) and its cascading effect on the `--font-material-symbols` token (WARN-002). Both are mechanically caused by Next.js 16.2.9 not exposing `Material_Symbols_Outlined` from `next/font/google`, and both preserve the intended functional outcome: the `apartment` icon renders, the FILL=1 filled variant is applied, the Google Fonts URL includes all required axes, and no fallback `□` is shown. Quality gates, runtime HTML inspection, and token counts all pass. There are no CRITICAL blockers.
