# Flat Six Media Landing Page - Design System

This document outlines the design foundation extracted from the Stitch project "Flat Six Media Landing Page". It details the color palette, typography tokens, spacing rules, and a breakdown of the core components used in the UI.

## 🎨 Color Palette

The color scheme is designed for a "Light Mode" aesthetic with premium, cinematic undertones.

*   **Primary (Dark Green):** `#1c3123` - Used for primary text, headings, buttons, and dark sections.
*   **Background Light (Cream/Off-White):** `#f9f7f2` - The primary background color for the application.
*   **Background Dark:** `#161c18` - Used for contrast and deep footer/dark sections.
*   **Accent Variants:** Opacity variants of the primary color (e.g., `primary/10`, `primary/30`, `primary/95`) are heavily used for borders, subtle backgrounds, and gradients.
*   **Text Colors:** 
    *   Headings & Primary Text: `#1c3123`
    *   Body Text: Slate 600 (`text-slate-600`), Slate 700 (`text-slate-700`), or Slate 900 (`text-slate-900`).
    *   Inverted Text (on primary backgrounds): White or Background Light with various opacities (e.g., `white/80`, `background-light/90`).

## ✍️ Typography Tokens

The typography is built around the **Inter** font family, emphasizing bold, legible, and tight styles for a modern, high-performance feel.

*   **Font Family:** `Inter`, sans-serif
*   **Font Weights:** 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold), 900 (Black)
*   **Key Styles:**
    *   **Headings (H1/H2):** `font-black` (900 weight), `tracking-tight` (negative letter-spacing), `leading-tight`.
    *   **Subheadings / Prominent Body Text:** `font-medium` (500 weight) or `font-bold` (700 weight), `leading-relaxed`.
    *   **Labels / Tags:** `text-xs`, `uppercase`, `tracking-widest`, `font-black`. Example: "Core Pillars".
    *   **Quotes:** `italic`, `font-bold`, `leading-snug`.

## 📏 Spacing & Sizing Rules

*   **Container Max-Width:** `max-w-6xl` (approx. 1152px) for general content, `max-w-4xl` for narrower focused content like the Hero text or CTA Footer.
*   **Section Padding:** Standard vertical padding is `py-24` (96px). Top/Bottom padding adjustments apply to specific contexts (e.g., `pb-32`, `pt-12`).
*   **Horizontal Padding:** `px-6` (24px) acts as the standard edge padding (gutter).
*   **Grid Gaps:** `gap-8` (32px) for standard 3-column layouts, scaling up to `gap-16` or `gap-20` for larger split layouts.
*   **Border Radius:**
    *   Default / Buttons: `rounded-lg` (0.5rem), `rounded-xl` (0.75rem).
    *   Cards / Inner Containers: `rounded-2xl` (1rem).
    *   Large Feature Containers: `rounded-3xl` (1.5rem) or `rounded-[2.5rem]` (40px).

## 🧩 Component Breakdown

### 1. Floating Navigation Bar
*   **Positioning:** Fixed at `top-6`, `z-50`.
*   **Styling:** "Glassmorphism" effect using `background: rgba(249, 247, 242, 0.85)` and `backdrop-filter: blur(16px)`. Border `primary/15`, rounded corners (`rounded-xl`), and shadow (`shadow-lg`).
*   **Elements:** Logo (Icon + Text), Desktop Nav Links (hover opacity), and a primary solid CTA button.

### 2. Cinematic Hero Section
*   **Layout:** Full viewport height (`h-screen`, `min-h-[850px]`). Content sits at the bottom (`items-end`).
*   **Background:** An inset image container wrapped in a dark gradient (`from-primary/95 to-transparent`) overlaying an image.
*   **Content:** Large `text-white`, `font-black` headline, medium-weight subheadline, and a prominent solid inverted button (`bg-background-light text-primary`).

### 3. Feature Cards (e.g., "Our Expertise")
*   **Layout:** 3-column CSS Grid (`grid-cols-3`).
*   **Styling:** White background, `rounded-2xl`, border (`border-primary/10`), hover effects (border darkens, shadow increases).
*   **Icon:** Encased in a square block (`w-16 h-16 bg-primary rounded-xl text-background-light`).

### 4. Specialized Services Grid
*   **Layout:** Dense 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
*   **Styling:** White background, `rounded-xl` borders, `flex items-start gap-5`.
*   **Content:** A simple material icon placed directly beside a strong heading and small descriptive text. Section features a subtle background tint (`bg-primary/5`).

### 5. Media & Stats Section
*   **Layout:** 2-column flex or grid (`flex-col md:flex-row`).
*   **Content Area:** Large headline, body text, and a `grid-cols-2` layout for statistics.
*   **Image Area:** Square aspect ratio (`aspect-square`), `rounded-3xl`, large image wrapped natively with an overlay blend (`bg-primary/20 mix-blend-multiply`).

### 6. The Principal Profile
*   **Layout:** Light text on dark background section (`bg-primary`). 2-column layout.
*   **Image:** A prominent portrait (`aspect-[4/5]`, `rounded-[2.5rem]`). Styled with grayscale and high contrast, revealing color and scaling on hover.
*   **Bio Text:** Founder tag, large name, italicized pull quote, and standard paragraphs grouped together.

### 7. Enclosed CTA Footer
*   **Layout:** A compact block inside a light-background section.
*   **Styling:** `bg-primary`, deeply rounded (`rounded-[2.5rem]`), high padding (`p-12 md:p-24`), and large drop shadow. Features subtle blurred glowing orbs in the background.
*   **Actions:** Group of main buttons: standard solid and a transparent outlined variant (`border-2 border-white/30`).
