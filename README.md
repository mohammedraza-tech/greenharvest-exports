<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:064e3b,50:16a34a,100:4ade80&height=200&section=header&text=GreenHarvest%20Exports&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Premium%20B2B%20Agricultural%20Export%20Landing%20Page&descAlignY=58&descSize=18" width="100%" alt="GreenHarvest Exports banner" />

**From farm to global markets, presented as a polished, responsive buyer journey.**

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Frontend_Showcase-16a34a?style=for-the-badge)

<!-- Add this line after deploying to Vercel:
[**🌐 Live Demo**](https://your-vercel-link.vercel.app) · -->
[**📂 Source Code**](https://github.com/mohammedraza-tech/greenharvest-exports) · [**🐛 Report Issue**](https://github.com/mohammedraza-tech/greenharvest-exports/issues)

</div>

> [!NOTE]
> **Demo content disclaimer:** GreenHarvest Exports is a fictional brand built for portfolio purposes. All business statistics, certifications, testimonials and contact details are sample content. The consultation form is simulated locally and nothing is sent or stored on a server.

<!-- Add screenshots after you capture them:
<div align="center">
  <img src="docs/screenshots/hero.png" width="49%" alt="Hero section" />
  <img src="docs/screenshots/booking.png" width="49%" alt="Consultation form" />
</div>
-->

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Website Sections](#-website-sections)
- [Consultation Form](#-consultation-form)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Build & Deployment](#-build--deployment)
- [Accessibility](#-accessibility)
- [Limitations & Roadmap](#-limitations--roadmap)
- [Author](#-author)

---

## 🌍 Overview

GreenHarvest Exports is a demonstration brand supplying **spices, grains, coffee, tea and specialty foods** to international buyers. The site is designed for importers, distributors, food businesses and sourcing teams.

It walks a visitor through the full buyer journey: discovering the company, understanding its offering and quality process, then starting a sourcing conversation through a consultation form.

**Project goals**

- Present an agricultural export brand with a consistent visual identity
- Organize business information into clear, readable sections
- Demonstrate responsive desktop and mobile layouts
- Build a usable inquiry form with validation and submission feedback
- Show practical React component composition and state management

---

## ✨ Features

| | Feature | Details |
|:--|:--|:--|
| 🧭 | **Smart navigation** | Fixed translucent header with scroll-dependent shadow, smooth anchor scrolling with header offset, and a collapsible mobile menu |
| 🗺️ | **Custom SVG trade map** | Hand-built hero illustration with location labels, trade routes and floating stat cards |
| 📦 | **Product portfolio** | Four categories (Spices & Herbs, Grains & Pulses, Coffee & Tea, Specialty Foods) with accent colors and inquiry actions |
| 🏅 | **Quality assurance** | Six certification cards and a six-stage export workflow |
| 💬 | **Testimonials** | Data-driven social proof cards rendered from local arrays |
| 📝 | **Consultation form** | Field-level validation, touched-state feedback, loading state, success view and reset |
| 📱 | **Fully responsive** | CSS Grid and Flexbox layouts that adapt across mobile, tablet and desktop |
| ♿ | **Accessibility-minded** | Semantic landmarks, labeled controls, ARIA error associations, focus styles |
| 🎨 | **Design system** | Green-led palette, Inter and Poppins typography, rounded cards, subtle motion |

---

## 🧱 Website Sections

<details>
<summary><b>1. Navigation</b></summary>

Globe logo and wordmark on the left, links in the center (Home, About, Products, Quality, Contact), and a **Book Consultation** button on the right. Below the `xl` breakpoint it becomes a collapsible menu that closes when a link is selected, with its expanded state exposed through ARIA attributes.
</details>

<details>
<summary><b>2. Hero</b></summary>

A stacked headline with green emphasis, supporting description, buyer trust badge and two actions: **Book Free Consultation** and **Explore Products**. The right side holds the custom SVG trade-map illustration with floating statistics. Four supporting stats sit in a two-by-two grid, and a bouncing down arrow scrolls to About. The map is an illustration, not a live tracking system.
</details>

<details>
<summary><b>3. About</b></summary>

| Feature | Message |
|:--|:--|
| Direct Farm Sourcing | Grower relationships and traceability |
| Rigorous Quality Control | Testing and quality assurance |
| Regulatory Compliance | Documentation for international markets |
| Dedicated Account Management | Support for orders, logistics and buyer requirements |
</details>

<details>
<summary><b>4. Product Portfolio</b></summary>

| Category | Products displayed |
|:--|:--|
| Spices & Herbs | Turmeric, cumin, coriander, cardamom, black pepper, cloves, cinnamon, ginger |
| Grains & Pulses | Basmati rice, wheat, chickpeas, lentils, mung beans, quinoa, millet, sorghum |
| Coffee & Tea | Arabica, Robusta, black tea, green tea, herbal tea, matcha, rooibos, yerba mate |
| Specialty Foods | Dried fruits, nuts and seeds, cold-pressed oils, honey, superfoods, organic snacks, plant proteins, functional ingredients |

This is a marketing overview only: no cart, checkout, inventory or live pricing.
</details>

<details>
<summary><b>5. Quality Assurance</b></summary>

**Certification cards (showcase content):** ISO 22000 · HACCP · USDA Organic · FSSC 22000 · BRCGS · Kosher & Halal

**Export workflow**
1. Farm Audit & Selection
2. Harvest & Primary Processing
3. Lab Testing & Certification
4. Processing & Packaging
5. Quality Assurance & Documentation
6. Cold Chain Logistics
</details>

<details>
<summary><b>6. Testimonials, Booking, Contact and Footer</b></summary>

- **Testimonials:** sample client quotes stored in a local array
- **Booking:** green section pairing consultation benefits with the inquiry form
- **Contact:** email, telephone and office cards using `mailto:` and `tel:` links
- **Footer:** brand intro, social icons, Company / Resources / Support groups, dynamic copyright year and policy links (some destinations are `#` placeholders)
</details>

---

## 📝 Consultation Form

| Field | Required | Rule |
|:--|:-:|:--|
| Full name | ✅ | At least 2 characters after trimming |
| Business email | ✅ | Basic email-format check |
| Company name | ✅ | At least 2 characters after trimming |
| Phone | ❌ | If provided, at least 10 permitted characters (digits, spaces, hyphens, plus signs, parentheses) |
| Product interest | ✅ | Non-empty selection |
| Expected monthly volume | ✅ | Non-empty selection (under 1 MT to 100+ MT per month) |
| Additional details | ❌ | Free text |

**Submission flow**

```text
Fill form → validate on blur → validate all on submit → loading state (controls disabled)
         → 1.5s simulated request → success view + cleared values → "Submit Another Request"
```

> [!IMPORTANT]
> No email, database write, CRM update or appointment booking occurs. The submission is simulated with a timeout, and a network-failure flow is not yet implemented.

---

## 🛠️ Tech Stack

| Technology | Role |
|:--|:--|
| **React 19** + React DOM | Components, rendering, state and events |
| **Vite 8** | Development server and production build |
| **Tailwind CSS 4** | Utility styling with CSS-defined theme tokens (`@theme`) |
| **PostCSS** | Tailwind processing |
| **JavaScript / JSX** | Application logic and markup |
| **Inline SVG** | Icons and trade-map illustration |
| **Oxlint** | Static lint checks |
| **Google Fonts** | Inter (body) and Poppins (headings) with system fallbacks |

State is handled with `useState` and `useEffect` (menu, form and scroll listener). Navigation uses section hashes, so there is no routing library, global state library, backend or authentication layer.

---

## 🚀 Getting Started

**Prerequisites:** Node.js `^20.19.0` or `>=22.12.0`, npm, and a modern browser.

```bash
# 1. Clone the repository
git clone https://github.com/mohammedraza-tech/greenharvest-exports.git
cd greenharvest-exports

# 2. Install dependencies
npm ci

# 3. Start the dev server
npm run dev
```

Open the address printed by Vite (the port may change if the default is busy). No environment variables or API keys are needed.

> [!TIP]
> If Windows PowerShell blocks `npm.ps1`, use `npm.cmd ci` and `npm.cmd run dev`.

### Available Scripts

| Command | Purpose |
|:--|:--|
| `npm run dev` | Start the development server |
| `npm run build` | Generate production files in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

---

## 📂 Project Structure

```text
greenharvest-exports/
├── public/
│   ├── favicon.svg          # Browser tab icon
│   └── icons.svg            # Additional SVG asset
├── src/
│   ├── assets/              # Image and starter assets
│   ├── App.jsx              # Page sections, content and form behavior
│   ├── App.css              # Unused starter styles
│   ├── index.css            # Active theme, shared styles, animations
│   └── main.jsx             # React entry point (Strict Mode)
├── index.html               # HTML shell, metadata, fonts
├── package.json             # Dependencies and scripts
├── postcss.config.js        # Tailwind PostCSS integration
├── tailwind.config.js       # Additional Tailwind configuration
└── vite.config.js           # Vite and React plugin configuration
```

**Components in `src/App.jsx`:** `Navigation` · `Hero` · `About` · `Products` · `Quality` · `Testimonials` · `BookingForm` · `Contact` · `Footer`

---

## 🎛️ Customization

| Change | Where |
|:--|:--|
| Brand, navigation, hero copy | `Navigation` and `Hero` in `src/App.jsx` |
| Company benefits | `features` in `About` |
| Products | `categories` in `Products` |
| Certifications and process stages | `certifications` and `processSteps` in `Quality` |
| Testimonials | `testimonials` in `Testimonials` |
| Form options and validation | `BookingForm` |
| Contact details | `Contact` |
| Footer and social links | `footerLinks` and `socialLinks` in `Footer` |
| Colors, cards, buttons | `src/index.css` |
| Title, description, fonts | `index.html` |

**To enable real submissions:** replace the timeout in `handleSubmit` with an API request, add server-side validation and network-error handling, and keep any service credentials on the server, never in the frontend bundle.

---

## 🌐 Build & Deployment

```bash
npm run build      # outputs to dist/
npm run preview    # test the build locally
```

Deploy `dist/` on any static host.

| Setting | Value |
|:--|:--|
| Build command | `npm run build` |
| Output directory | `dist` |
| Framework preset | Vite |

For subdirectory hosting, configure Vite's `base` option and verify asset URLs.

---

## ♿ Accessibility

- Semantic sections and a `main` landmark
- Labeled form controls with error messages associated to fields
- `aria-invalid` and alert roles on validation messages
- Labels on icon-only links; decorative SVGs hidden from assistive tech
- Visible focus styling on buttons and fields
- Partial reduced-motion handling (card transitions and scroll cue)

No full accessibility audit or compliance certification is claimed.

---

## 🧭 Limitations & Roadmap

**Current scope**
- Frontend demonstration, not an operational export service
- Form data lives only in component state and is not persisted
- No live scheduling, payments, shipment tracking or catalog downloads
- Some social, resource and policy links are `#` placeholders
- No automated tests or measured performance report
- Starter assets and an unused stylesheet remain in the repo

**Planned improvements**
- [ ] Connect the consultation form to a backend, email service or CRM
- [ ] Add time-zone-aware scheduling
- [ ] Replace sample claims, contact details and placeholder links
- [ ] Add downloadable catalogs and product specifications
- [ ] Split components and content into separate modules
- [ ] Add form and navigation tests plus network-failure handling
- [ ] Complete keyboard, screen-reader, contrast and reduced-motion review
- [ ] Add social-sharing metadata (Open Graph) and a sitemap
- [ ] Capture screenshots and measure production performance

---

## 👨‍💻 Author

<div align="center">

**Mohammed Raza**
*AI Engineer · Agentic Systems · Full-Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mohammedraza-tech)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mohammedraza-tech)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mohammedrazatech@gmail.com)

**Portfolio summary:** Designed and built a responsive B2B agricultural export landing page with React, Vite and Tailwind CSS, featuring a custom SVG trade-map illustration, reusable card styles, mobile navigation, and a consultation form with client-side validation and simulated submission feedback.

⭐ If you found this project useful, consider giving it a star.

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4ade80,50:16a34a,100:064e3b&height=100&section=footer" width="100%" alt="footer" />
