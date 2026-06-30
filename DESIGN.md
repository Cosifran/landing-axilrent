---
name: Axil Core
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#5b403f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#b7102a'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#006d43'
  on-secondary: '#ffffff'
  secondary-container: '#75f8b3'
  on-secondary-container: '#007147'
  tertiary: '#465d81'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f759b'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#78fbb6'
  secondary-fixed-dim: '#59de9b'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#005232'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#b0c7f1'
  on-tertiary-fixed: '#001b3c'
  on-tertiary-fixed-variant: '#30476a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style
The brand personality is **authoritative, efficient, and sophisticated**. As a proptech platform, it bridges the gap between traditional real estate and modern fintech reliability. The UI avoids the loud, saturated tones of the original reference in favor of a "Fintech-Modern" aesthetic—characterized by ample white space, razor-sharp typography, and a "Functional Elegance" that inspires trust in property owners and tenants alike.

The target audience is high-stakes property managers and professional renters. The emotional response should be one of **calm control**. We utilize a **Corporate Modern** style with subtle **Glassmorphic** accents for depth, ensuring the platform feels like a premium financial tool rather than a generic landing page.

## Colors
The palette is a refined evolution of the brand’s red and green. Instead of primary saturation, we use a **Sophisticated Red** (#E63946) for critical actions and brand presence, and a **Financial Green** (#00A86B) for success states, growth metrics, and trust signals.

- **Primary (Axil Red):** Used sparingly for primary CTAs and brand identity elements.
- **Secondary (Mint Success):** Used for "Verified" badges, positive trends, and secondary buttons.
- **Surface & Neutrals:** We use a cool-toned slate for text and a very light grey (#F8FAFC) for background layering to maintain a clean, airy feel.
- **Accents:** Dark Navy (#1D3557) provides a professional foundation for headers and high-contrast typography.

## Typography
We utilize **Hanken Grotesk** for headlines to provide a sharp, contemporary "fintech" edge that distinguishes the platform from generic corporate sites. **Inter** is used for all body and UI elements for its exceptional legibility in data-dense environments.

Hierarchy is established through weight and scale rather than color. Large headlines use tight letter-spacing for a premium, editorial feel. Labels and metadata utilize a semi-bold uppercase style to create clear "buckets" of information.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width of 1200px. On desktop, we utilize a 12-column grid with 24px gutters to allow for complex dashboard layouts and side-by-side card arrangements.

For mobile, the layout collapses to a single-column stack with 16px horizontal margins. Spacing is governed by a strict 8px linear scale. Section headers should maintain a "Stack-LG" (48px) separation, while related UI elements within cards use "Stack-SM" (12px) to maintain visual grouping.

## Elevation & Depth
This design system uses **Tonal Layering** combined with **Ambient Shadows**. Instead of traditional drop shadows, we use "diffused floor shadows"—high blur, low opacity (4-8%) with a tiny hint of the tertiary color to prevent them from looking "dirty" on the white background.

Interactive elements (cards, buttons) lift on hover, increasing their shadow spread. Backgrounds for sub-sections use subtle grey fills (#F1F5F9) to create a sense of depth without the need for borders.

## Shapes
Following the fintech aesthetic, the shape language is **Rounded-XL**. Cards and major containers feature a generous 1.5rem (24px) radius to soften the data-heavy nature of proptech. 

Primary buttons use a more moderate 0.5rem (8px) radius to maintain a sense of professional urgency and clickable "weight." Input fields and small UI chips follow this 8px standard for internal consistency.

## Components
- **Buttons:** Primary buttons are Solid Axil Red with white text. Secondary buttons use a "Ghost" style with a 1px Slate-200 border and Navy text.
- **Cards:** White background, 24px padding, 24px corner radius. They feature a 1px border (#E2E8F0) and an ambient shadow.
- **Input Fields:** Minimalist design with a 1px Slate border that transitions to a 2px Axil Red border on focus. Labels sit outside the input for clarity.
- **Chips/Badges:** Small, rounded-pill shapes with low-opacity background tints (e.g., Green 100 bg with Green 800 text) for status indicators like "Paid" or "Verified."
- **Data Lists:** Use alternating row highlights (Zebra-striping) only when data exceeds 10 rows; otherwise, use simple 1px dividers.