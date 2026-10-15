# ZAIRA CREATIVE DESIGN — Official Website

A luxury, editorial-style business website for **ZAIRA CREATIVE DESIGN**, specializing in custom curtains and window blinds, interior design, gypsum false ceilings, custom metal fabrication, and modern staircase design.

Built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **Google Outfit Typography**.

---

## Brand Identity & Color System

| Token | Hex Value | Usage |
|---|---|---|
| **Primary Rose Gold** | `#C99583` | Buttons, fine lines, active states, icons, and highlights |
| **Deep Rose Brown** | `#78564C` | Eyebrow badges, dark accents, subheadings |
| **Soft Blush** | `#F7EFEB` | Pill backgrounds, subtle badge fills |
| **Main Background** | `#FFFFFF` | Primary content panels, cards |
| **Secondary Background** | `#FAF8F6` | Alternate section fills, input backgrounds |
| **Primary Text** | `#25211F` | High-contrast headings and body copy |
| **Secondary Text** | `#77716D` | Subtitles, descriptions, captions |
| **Borders** | `#EAE3DF` | Delicate dividers and card outlines |

**Typography**: Google Font **Outfit** is configured sitewide via `next/font/google` for optimal web font performance.

---

## Key Features & Structure

1. **Brand Hero & Introduction**:
   - Immersive living room hero featuring drapery and natural daylight.
   - Core headline: *"Transform Your Space with Timeless Elegance"*.
   - Direct CTAs: *"Explore Our Curtains"* and *"Get a Free Quote"*.

2. **The 10 Curtains & Blinds Categories**:
   - Complete showcase of all 10 distinct categories with dedicated photography:
     1. Zebra Blinds
     2. Roller Blinds
     3. Roman Blinds
     4. Venetian Blinds
     5. Vertical Blinds
     6. Wooden Blinds
     7. Bamboo Blinds
     8. Honeycomb Blinds
     9. Sheer Curtains
     10. Blackout Curtains
   - Features light-filtering indicators, ideal room tags, material options, and one-click WhatsApp inquiries pre-filled with the category name.

3. **Explore Our Services**:
   - Curtains & Blinds (Featured prominent showcase)
   - Residential Interior Design
   - Gypsum Work & False Ceilings with indirect cove lighting
   - Custom Architectural Metal Fabrication
   - Modern Staircase Design & Railings

4. **Interactive Global Quote Modal**:
   - Accessible via the navigation bar and every service card.
   - Validates client details, dimensions, preferred contact mode (WhatsApp, Phone, Email).
   - Posts directly to `/api/contact` with instant confirmation.

5. **Curated Gallery & Lightbox**:
   - Responsive masonry grid with category filters (*All, Curtains & Blinds, Interiors, Gypsum, Fabrication, Staircases*).
   - Fullscreen keyboard-accessible Lightbox (`Esc`, `ArrowLeft`, `ArrowRight`).

6. **Contact Integration & WhatsApp**:
   - Floating WhatsApp button with interactive message badge.
   - Dual-validated contact form with spam protection (honeypot).
   - Phone dialer links, email mailto protocols, and Google Maps directions embed.

---

## Editable Business Configuration

All company contact details, phone numbers, WhatsApp numbers, showroom addresses, and opening hours are centralized in a single file:

```typescript
// data/siteConfig.ts
export const siteConfig = {
  name: "ZAIRA CREATIVE DESIGN",
  contact: {
    phone: "+91 98450 12345",
    whatsapp: "919845012345",
    email: "enquiry@zairacreativedesign.com",
    address: {
      display: "Showroom #12, Design Avenue, Interior Craft Boulevard, Metro City",
      ...
    },
    ...
  }
};
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## Deployment on Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into [Vercel](https://vercel.com).
3. The build command `npm run build` will automatically run without any extra configuration.
4. Your site will be deployed with edge caching, automated SSL, and image optimization.
