# Design System Strategy: Precision & Discipline

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Monolith."** 

This system rejects the ephemeral trends of glassmorphism and decorative gradients in favor of structural integrity and brutalist clarity. It is an editorial-inspired framework that marries the obsessive precision of high-end hardware with the approachable, geometric playfulness of modern educational interfaces. 

By leveraging the crane brand mark—a symbol of deliberate construction and sharp angles—the layout breaks away from generic "card-heavy" templates. We utilize intentional asymmetry, extreme whitespace, and a strict "solid-only" color philosophy to create an environment that feels silent, focused, and authoritative. Every pixel must feel earned; every margin must feel intentional.

---

## 2. Colors: The Tonal Architecture
The palette is rooted in a monochromatic base with a singular, high-vibrancy "Signal Green."

*   **Primary Palette:** 
    *   `background`: #FFFFFF (The Canvas)
    *   `on_background`: #1D1D1F (The Ink)
    *   `primary_container`: #34C759 (The Signal)
*   **The "No-Line" Rule:** We do not use borders to define space. High-end design is felt, not outlined. 1px solid borders are strictly prohibited for sectioning. Boundaries are created exclusively through background color shifts. For example, a `surface_container_low` (#F5F5F7) element should sit directly against a `background` (#FFFFFF) edge to define its footprint.
*   **Surface Hierarchy & Nesting:** Use surface tiers to create functional depth. 
    *   `surface_container_lowest`: Use for primary content cards that need to "pop" against a grey background.
    *   `surface_container_low`: Use for global background areas or secondary navigation blocks.
    *   `surface_container_high`: Use for recessed interactive elements like input fields or toggle tracks.
*   **The "Zero Gradient" Rule:** In accordance with the brand's discipline, all colors must be solid HEX values. Visual interest is generated through the juxtaposition of sharp blocks of color, not through faux-lighting effects or blurs.

---

## 3. Typography: Editorial Authority
We use **Inter** not as a standard system font, but as a Swiss-style architectural tool. 

*   **Display & Headline Scales:** Use `display-lg` (3.5rem) and `headline-lg` (2rem) to create dramatic, asymmetrical entry points on pages. Headers should often be left-aligned with significant "breathing room" (64px+) above them.
*   **The Scale Contrast:** To achieve a premium feel, pair large headlines with significantly smaller `label-md` metadata. The "tension" between a massive 3.5rem title and a 0.75rem label creates an editorial sophistication that medium-sized, safe fonts cannot achieve.
*   **Tracking & Weight:** Headers use `Medium` or `SemiBold` weights with tight tracking (-0.02em) to feel like physical blocks of type. Body copy stays at `Regular` with standard tracking for maximum legibility.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and glass effects are replaced by a philosophy of **Physicality through Tone.**

*   **The Layering Principle:** Depth is achieved by stacking. A `surface_container_lowest` (#FFFFFF) card is placed on a `surface_container_low` (#F5F5F7) background. This creates a "soft lift" that is visible yet disciplined.
*   **Ambient Shadows:** While flat colors are preferred, if a floating element (like a FAB or Tooltip) requires separation, use an "Ambient Shadow." 
    *   *Formula:* `0px 10px 30px rgba(29, 29, 31, 0.04)`. 
    *   The shadow color is derived from `on_surface` at an extremely low opacity to mimic natural room light rather than a digital effect.
*   **The "Ghost Border" Fallback:** If accessibility requirements demand a container boundary on white-on-white layouts, use the `outline_variant` token at **10% opacity**. It should be felt more than seen.

---

## 5. Components: The Geometric Toolkit

*   **Buttons**: 
    *   **Primary**: Solid `#34C759` with white text. Zero border-radius (none) or `md` (0.75rem) depending on the crane's geometric context. No gradients. No shadows.
    *   **Secondary**: Solid `#F5F5F7` with `#1D1D1F` text. Flat execution.
*   **Cards**: 
    *   Use `xl` (1.5rem) corner radius to lean into the "Duolingo" softness, but maintain "Apple" discipline by removing all borders and shadows. Use vertical whitespace (32px or 48px) instead of dividers.
*   **Inputs**: 
    *   Text fields use a solid `surface_container_high` fill. Upon focus, the label shifts to `primary` (#34C759) and the background remains flat.
*   **Chips**: 
    *   Selection chips are purely tonal. Unselected: `surface_container_low`. Selected: `primary` with white text.
*   **The Crane Brand Mark**: 
    *   The origami crane must always be placed in "High White" space. It should never be obscured by text or placed on top of complex imagery. Treat it as a structural anchor, often placed asymmetrically in the top-left or used as a centered "Zenith" point in empty states.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place a large `display-md` title on the left and leave the right 50% of the screen empty to convey "Precision."
*   **Use Tonal Shifts:** Define the footer of the app simply by changing the background from `background` (#FFFFFF) to `surface_container_low` (#F5F5F7).
*   **Prioritize Leading:** Ensure body text has a generous line-height (1.5x) to maintain the "high-end editorial" feel.

### Don't:
*   **No Dividers:** Never use a 1px line to separate list items. Use 16px of `surface_container_low` space or a simple vertical gap.
*   **No Glass/Blur:** Do not use `backdrop-filter`. If an element is on top of another, it must be 100% opaque.
*   **No Centered "Safe" Layouts:** Avoid putting everything in a center-aligned column. High-end design utilizes the full width of the grid to create "tension" between elements.
*   **No "Muddy" Colors:** Only use the specified HEX codes. Do not mix the Green accent with transparency to create "Light Green." Use the `primary_container` or `secondary_fixed` tokens for lighter variants.