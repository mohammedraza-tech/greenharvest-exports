# GreenHarvest Exports

A responsive agricultural export business landing page built with **React, Vite, and Tailwind CSS**. This portfolio project showcases business-focused design, custom SVG graphics, responsive layouts, reusable styling, and a consultation form with client-side validation.

> **Project status:** Frontend showcase. Business statistics, certification claims, testimonials, and contact details are demonstration content. Form submissions are simulated locally; no inquiry is sent or stored on a server.

## Contents

- [Project overview](#project-overview)
- [Website sections](#website-sections)
- [Consultation form](#consultation-form)
- [Design and responsiveness](#design-and-responsiveness)
- [Technical implementation](#technical-implementation)
- [Local setup](#local-setup)
- [Project structure](#project-structure)
- [Customization](#customization)
- [Build and deployment](#build-and-deployment)
- [Verification](#verification)
- [Limitations and future work](#limitations-and-future-work)
- [Portfolio description](#portfolio-description)

## Project overview

GreenHarvest Exports is a demonstration brand supplying spices, grains, coffee, tea, and specialty foods to international buyers. The intended audience includes importers, distributors, food businesses, and sourcing teams.

The website presents a buyer journey from discovering the company to discussing sourcing requirements. Product categories explain the offering, quality information establishes the proposed process, and consultation calls to action provide a clear next step.

The main objectives are to:

- Present an agricultural export brand with a consistent visual identity.
- Organize business information into readable sections.
- Demonstrate responsive desktop and mobile layouts.
- Build a usable inquiry form with validation and submission feedback.
- Show practical React component composition and state management.

## Website sections

### 1. Navigation

The fixed header places the globe logo and wordmark on the left, navigation in the center, and a consultation button on the right. Desktop links lead to Home, About, Products, Quality, and Contact.

Smaller screens use a collapsible menu that closes when a link is selected. The toggle exposes its expanded state through ARIA attributes. The header uses a translucent background and a scroll-dependent shadow. Anchor navigation scrolls smoothly with an offset for the fixed header.

### 2. Hero

The hero introduces the agricultural export offering through a prominent headline, supporting description, buyer trust badge, and two actions: **Book Free Consultation** and **Explore Products**.

The desktop headline uses stacked words and green emphasis. On the right, a custom SVG trade-map illustration contains location labels, routes, and floating business statistics. It is an illustration rather than an interactive map or live tracking system.

Four supporting statistics appear in a two-by-two grid: countries served, ISO/HACCP certification, on-time delivery, and dedicated support. A clickable down arrow scrolls to About. All statistics are sample marketing content.

### 3. About

Four feature cards describe the proposed business value:

| Feature | Message |
| --- | --- |
| Direct Farm Sourcing | Grower relationships and traceability |
| Rigorous Quality Control | Testing and quality assurance |
| Regulatory Compliance | Documentation for international markets |
| Dedicated Account Management | Support for orders, logistics, and buyer requirements |

Cards combine green outline icons, pale green containers, clear titles, and explanatory text.

### 4. Product portfolio

| Category | Products displayed |
| --- | --- |
| Spices & Herbs | Turmeric, cumin, coriander, cardamom, black pepper, cloves, cinnamon, ginger |
| Grains & Pulses | Basmati rice, wheat, chickpeas, lentils, mung beans, quinoa, millet, sorghum |
| Coffee & Tea | Arabica coffee, Robusta coffee, black tea, green tea, herbal tea, matcha, rooibos, yerba mate |
| Specialty Foods | Dried fruits, nuts and seeds, cold-pressed oils, honey, superfoods, organic snacks, plant proteins, functional ingredients |

Category cards use distinct accent colors and inquiry actions. This is a marketing overview, without inventory management, a cart, checkout, or live pricing.

### 5. Quality assurance

Six compact certification cards present ISO 22000, HACCP, USDA Organic, FSSC 22000, BRCGS, and Kosher & Halal. These names are showcase content, not evidence of accreditation for a real business.

A six-stage workflow explains the proposed export process:

1. Farm Audit & Selection
2. Harvest & Primary Processing
3. Lab Testing & Certification
4. Processing & Packaging
5. Quality Assurance & Documentation
6. Cold Chain Logistics

### 6. Testimonials

Sample client testimonials demonstrate how social proof can support a business landing page. Their content is stored in a local array and rendered as cards.

### 7. Consultation booking

A green section pairs consultation benefits with a white inquiry form. It collects buyer details, product interests, expected volume, and additional requirements. The interface includes field errors, a loading state, a success view, and an option to submit another request.

It does not display calendar availability or reserve a meeting time.

### 8. Contact

Three contact cards display email, telephone, and office details. Email and telephone links use `mailto:` and `tel:` to open supported device applications. The WhatsApp number is text rather than a dedicated chat integration. Contact details and response-time claims are sample content.

### 9. Footer

The footer contains a brand introduction, social icons, Company/Resources/Support groups, a dynamic copyright year, and policy links. Its columns adapt to smaller screens.

Several social, resource, and legal destinations currently use `#` placeholders rather than implemented pages or external profiles.

## Consultation form

### Fields and validation

| Field | Required | Implemented rule |
| --- | --- | --- |
| Full name | Yes | At least two characters after trimming |
| Business email | Yes | Basic email-format check |
| Company name | Yes | At least two characters after trimming |
| Phone | No | If supplied, at least ten permitted characters: digits, spaces, hyphens, plus signs, or parentheses |
| Product interest | Yes | Nonempty selection |
| Expected monthly volume | Yes | Nonempty selection |
| Additional details | No | Free-text input |

The phone rule checks a simple character pattern; it does not verify an actual number or specifically require ten digits.

Product interests include all four categories and Multiple Categories. Volume options range from under 1 metric ton per month to 100+ metric tons per month.

### Submission behavior

1. React state tracks values, touched fields, errors, and submission status.
2. Leaving a field validates it; editing a touched field updates its feedback.
3. Submission validates all fields and stops if errors remain.
4. Valid input triggers a loading indicator and disables controls.
5. A 1.5-second timeout simulates a network request.
6. A success view appears and the values are cleared.
7. **Submit Another Request** returns to the form.

**No email, database write, CRM update, or appointment booking occurs.** The success message is part of the demonstration. A network-failure flow is not implemented, despite an error status being mentioned in a code comment.

## Design and responsiveness

| Element | Approach |
| --- | --- |
| Colors | Green accents, warm neutral text, white surfaces, pale backgrounds |
| Typography | Inter body text and Poppins headings, with system-font fallbacks |
| Cards | Rounded corners, light borders, restrained shadows, subtle hover feedback |
| Icons | Inline SVG graphics that inherit surrounding text color |
| Layout | CSS Grid and Flexbox |
| Spacing | Wide header/hero layout and constrained supporting sections |
| Motion | Entrance animations, hover transitions, and a bouncing scroll cue |

Hero columns stack on smaller screens, while card grids and footer groups adjust at breakpoints. Desktop navigation switches to a mobile menu below the `xl` breakpoint. Certification cards use compact icon-and-text layouts.

### Accessibility considerations

The implementation includes semantic sections, a main landmark, labeled form controls, error-message associations, `aria-invalid`, alert roles on validation messages, and labels for icon-only links. Decorative SVGs are hidden from assistive technology where appropriate.

Buttons and fields include focus styling. Reduced-motion handling exists for card transitions and the scroll cue, but is not comprehensive across all animation and smooth scrolling. No full accessibility audit or compliance certification is claimed.

### Metadata

`index.html` defines the language, viewport, title, description, theme color, SVG favicon, and Google Fonts connections. Social-sharing metadata, structured data, and a sitemap are not included.

## Technical implementation

| Technology | Role |
| --- | --- |
| React and React DOM 19 | Components, rendering, state, and events |
| Vite 8 | Development server and production build |
| Tailwind CSS 4 | Utility styling and CSS-defined theme tokens |
| Tailwind PostCSS plugin | Tailwind processing through PostCSS |
| JavaScript / JSX | Application logic and markup |
| Inline SVG | Icons and trade-map illustration |
| Oxlint | Static lint checks |

Exact dependency ranges are in `package.json`; `package-lock.json` records the resolution used by `npm ci`.

The application consists of `Navigation`, `Hero`, `About`, `Products`, `Quality`, `Testimonials`, `BookingForm`, `Contact`, and `Footer`. These components currently live in `src/App.jsx`. Repeated content is rendered from local arrays and objects.

`useState` manages menu and form interactions. `useEffect` registers and cleans up the header scroll listener. `src/main.jsx` mounts the application inside React Strict Mode.

Navigation uses section hashes rather than a routing library. There is no global state library, backend, database, or authentication layer.

## Local setup

### Prerequisites

- Node.js compatible with the installed Vite package: `^20.19.0` or `>=22.12.0`, according to its package metadata.
- npm and a modern browser.

From the project directory:

```bash
npm ci
npm run dev
```

Open the address printed by Vite. The port may change if the default is occupied.

If Windows PowerShell blocks `npm.ps1`, use:

```powershell
npm.cmd ci
npm.cmd run dev
```

No environment variables, API keys, or backend setup are required for this showcase.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Generate production files in `dist/` |
| `npm run preview` | Preview the built website locally |
| `npm run lint` | Run Oxlint |

## Project structure

```text
export-landing/
|-- public/
|   |-- favicon.svg          # Browser tab icon
|   `-- icons.svg            # Additional SVG asset
|-- src/
|   |-- assets/              # Image and starter assets
|   |-- App.jsx              # Page sections, content, and form behavior
|   |-- App.css              # Unused starter styles
|   |-- index.css            # Active theme, shared styles, animations
|   `-- main.jsx             # React entry point
|-- index.html               # HTML shell, metadata, fonts
|-- package.json             # Dependencies and scripts
|-- package-lock.json        # Dependency lockfile
|-- postcss.config.js        # Tailwind PostCSS integration
|-- tailwind.config.js       # Additional Tailwind configuration
|-- vite.config.js           # Vite and React plugin configuration
`-- README.md
```

The active theme uses `@theme` in `src/index.css`. The separate Tailwind configuration is not explicitly loaded by the current CSS. `App.css` is not imported by the application entry or `App.jsx`.

## Customization

| Change | Location |
| --- | --- |
| Brand, navigation, hero copy | `Navigation` and `Hero` in `src/App.jsx` |
| Company benefits | `features` in `About` |
| Products | `categories` in `Products` |
| Certifications and stages | `certifications` and `processSteps` in `Quality` |
| Testimonials | `testimonials` in `Testimonials` |
| Form options and validation | `BookingForm` |
| Contact information | `Contact` |
| Footer/social links | `footerLinks` and `socialLinks` in `Footer` |
| Colors, cards, buttons | `src/index.css` |
| Title, description, fonts | `index.html` |
| Favicon | `public/favicon.svg` |

To enable real submissions, replace the timeout in `handleSubmit` with an API request. Add server-side validation, network-error feedback, and success handling based on the actual response. Keep service credentials on the server rather than in the frontend bundle.

## Build and deployment

```bash
npm run build
npm run preview
```

The generated `dist/` folder can be served by a static host. Configure the host's build command as `npm run build` and publish directory as `dist`. Existing npm scripts do not deploy the site.

For subdirectory hosting, configure Vite's `base` option and verify asset URLs. The current configuration uses the default base path.

## Verification

The production build has completed successfully during development. Oxlint has reported four existing warnings: one about constructing `Date` during render for the footer year and three unnecessary escapes in phone validation.

There is no automated test suite or `test` script. A build verifies compilation, not browser behavior, accessibility, or performance scores.

Suggested manual checks:

- Review mobile, tablet, and desktop layouts for wrapping and overflow.
- Open the mobile menu and test section links.
- Confirm the down arrow reaches About below the fixed header.
- Submit an empty form and review field errors.
- Test invalid email and optional phone inputs.
- Submit valid sample data and verify loading, success, and reset behavior.
- Navigate by keyboard and inspect focus visibility.

## Limitations and future work

### Current scope

- Frontend demonstration rather than an operational export service.
- Form values exist only in component state and are not persisted.
- No live scheduling, payment, shipment tracking, catalog download, or customer portal.
- Several social, resource, and policy links remain placeholders.
- Business claims and testimonials need verified replacements for commercial use.
- Fonts are requested from Google Fonts, with system-font fallbacks.
- No automated browser tests, measured performance report, or full accessibility audit.
- Starter assets and an unused stylesheet remain in the repository.
- No license file is included; specify a license before offering the project for reuse.

### Proposed improvements

- Connect consultation requests to a backend, email service, or CRM.
- Add real scheduling with time-zone-aware availability.
- Replace sample claims, contact details, and placeholder links.
- Add downloadable catalogs and product specifications.
- Extract components and content into separate modules.
- Add form/navigation tests and network-failure handling.
- Complete keyboard, screen-reader, contrast, and reduced-motion review.
- Add social-sharing metadata and deployment-specific SEO assets.
- Capture portfolio screenshots and measure production performance.

These are planned possibilities, not delivered features.

## Portfolio description

This project demonstrates translating a business concept into a cohesive landing page with a clear buyer journey. It combines responsive composition, consistent styling, data-driven rendering, custom SVG graphics, and multiple form interaction states.

**Suggested portfolio summary:**

> Designed and built GreenHarvest Exports, a responsive B2B agricultural export landing page using React, Vite, and Tailwind CSS. Created a custom trade-map illustration, reusable card styles, product and quality sections, mobile navigation, and a consultation form with client-side validation and simulated submission feedback.
