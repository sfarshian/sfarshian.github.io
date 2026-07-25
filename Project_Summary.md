# Project Summary — sfarshian.github.io

**Date of Assessment:** July 2026
**Repository:** `git@github.com:sfarshian/sfarshian.github.io.git`
**Live URL:** https://sfarshian.github.io
**Branch:** `main` (3 commits, clean working tree)

---

## 1. Executive Overview

A personal portfolio website for **Sahand Farshian** — a Software Developer and Industrial Engineer. The site is a single-page application (SPA) built with React 19, TypeScript 6, and Tailwind CSS 3.4, bundled via Vite 8, and deployed to GitHub Pages via the `gh-pages` package. It presents a polished, minimalist professional presence with sections for a hero/landing, work experience timeline, skills/competencies, project portfolio, education, and contact information.

| Metric | Value |
|---|---|
| Deployment | GitHub Pages (static) |
| Total source lines | 547 LOC (TypeScript + TSX) |
| Production build size | 236 KB (208 KB JS + 14 KB CSS, gzip ~60 KB) |
| Lint status | 0 warnings, 0 errors (oxlint) |
| Build toolchain | TypeScript 6 → Vite 8 |
| Dependencies | 4 runtime, 10 dev |

---

## 2. Technology Stack

### 2.1 Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.2.7 | UI library (functional components + hooks) |
| `react-dom` | ^19.2.7 | DOM rendering |
| `lucide-react` | ^1.24.0 | SVG icon library (~8 icons used) |
| `react-router-dom` | ^7.18.1 | Included but **not used** — dead dependency |

### 2.2 Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `typescript` | ~6.0.2 | Type checking, strict mode |
| `vite` | ^8.1.1 | Dev server + production bundler (Rollup-based) |
| `@vitejs/plugin-react` | ^6.0.3 | JSX transform, Fast Refresh |
| `tailwindcss` | ^3.4.19 | Utility-first CSS framework |
| `postcss` | ^8.5.19 | CSS processing (required by Tailwind) |
| `autoprefixer` | ^10.5.4 | Vendor prefix injection |
| `oxlint` | ^1.71.0 | Rust-based linter (replaces ESLint) |
| `gh-pages` | ^6.3.0 | GitHub Pages deployment automation |
| `@types/react` | ^19.2.17 | React type definitions |
| `@types/react-dom` | ^19.2.3 | ReactDOM type definitions |
| `@types/node` | ^24.13.2 | Node.js type definitions |

### 2.3 Linting & Type Safety

- **oxlint** configured via `.oxlintrc.json` with plugins: `react`, `typescript`, `oxc`
- Enforced rules: `react/rules-of-hooks` (error), `react/only-export-components` (warn)
- TypeScript strict flags: `noUnusedLocals: true`, `noUnusedParameters: true`, `noFallthroughCasesInSwitch: true`, `erasableSyntaxOnly: true`
- Target: `ES2023` with DOM libs, module resolution: `bundler`, JSX: `react-jsx`

---

## 3. Architecture

### 3.1 Component Tree

```
main.tsx
 └─ App (root layout)
     ├─ Navbar          (sticky top nav, scroll-aware, mobile hamburger)
     ├─ Hero            (landing section: name, title, bio, social links)
     ├─ WorkExperience  (timeline with cards, 2 entries)
     ├─ TechnicalArsenal (4-column skill grid)
     ├─ Projects        (2-column project cards)
     ├─ Education       (single card with metadata)
     └─ Contact         (email/Telegram CTAs + social icon row)
```

### 3.2 Data Layer

All content is centralized in `src/data.ts`, which exports:

- **Type definitions:** `WorkExperience`, `Project`, `SkillCategory` interfaces
- **Profile object:** name, title, bio, email, social handles
- **Content arrays:** `workExperience[]`, `skillCategories[]`, `projects[]`, `socialLinks[]`, `navSections[]`
- **Static object:** `education`

No API calls, no backend, no state management library. This is pure static content, making it ideal for GitHub Pages hosting.

### 3.3 Styling Architecture

Custom Tailwind design tokens defined in `tailwind.config.ts`:

```
Colors (light-only enterprise palette):
  primary:     #047857 (emerald) → hover #065f46
  background:  #fafafa
  surface:     #ffffff / #f8fafc (elevated)
  foreground:  #0f172a / #475569 (secondary) / #94a3b8 (muted)
  border:      #e2e8f0
  accent:      #0f766e (teal)

Typography:
  Serif:  EB Garamond (headings h1–h4)
  Sans:   Inter (body, UI, badges)

Reusable classes (index.css @layer components):
  .section-container  — max-w-5xl + responsive padding
  .section-padding    — py-20 / md:py-28
  .card               — rounded-lg border + subtle shadow
  .card-hover         — hover lift + border highlight
  .badge / .badge-primary / .badge-secondary
  .divider

Accessibility:
  - prefers-reduced-motion: disables all animations
  - scroll-behavior: smooth (unless reduced motion)
```

No dark mode, no glassmorphism, no heavy shadows — clean enterprise aesthetic.

### 3.4 Navigation

- Fixed-position nav bar: transparent when at top, white glass-morphism card with border when scrolled
- Desktop: horizontal pill-style links
- Mobile: hamburger toggle with vertical slide-down menu
- Smooth-scroll to sections via `element.scrollIntoView({ behavior: 'smooth' })`
- No routing library in use (despite `react-router-dom` being in `package.json`)

---

## 4. Build & Deployment Pipeline

### 4.1 NPM Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `vite` | Vite dev server with HMR |
| `build` | `tsc -b && vite build` | Full type-check + production bundle |
| `predeploy` | `npm run build` | Auto-run before deploy |
| `deploy` | `gh-pages -d dist` | Publish `dist/` to `gh-pages` branch |
| `lint` | `oxlint` | Rust-based fast linting |
| `preview` | `vite preview` | Local preview of production build |

### 4.2 Vite Configuration

- Plugin: `@vitejs/plugin-react`
- Base path: `/` (root-relative, suitable for GitHub Pages custom domain or user page)
- Mode-aware config function, though `base` is identical for both dev and build

### 4.3 TypeScript Configuration

**tsconfig.json** — project references to:
- `tsconfig.app.json` (source code: `src/`, ES2023, bundler resolution, JSX react-jsx)
- `tsconfig.node.json` (config files: `vite.config.ts`, NodeNext module, ES2023)

### 4.4 Deployment Architecture

```
Developer workstation
  │ npm run deploy
  ├─ tsc -b          (type-check: src/ + vite.config.ts)
  ├─ vite build       (Rollup: bundle → dist/)
  └─ gh-pages -d dist (force-push dist/ → origin/gh-pages)
                        │
                        ▼
              GitHub Pages serves from gh-pages branch
              URL: https://sfarshian.github.io
```

The `gh-pages` package caches the remote repo in `node_modules/.cache/gh-pages/` for incremental pushes.

---

## 5. Content Inventory

### 5.1 Sections

1. **Hero:** Full-viewport landing with name, title, bio paragraph, social link buttons, email/Telegram footer
2. **Work Experience:** Timeline layout (desktop) / cards (mobile), 2 positions
3. **Skills (Technical Arsenal):** 4-category grid of skill tags
4. **Projects:** 2-column linked cards with GitHub URLs
5. **Education:** Single card with degree, school, location, years
6. **Contact:** CTAs (email, Telegram) + social icon row + copyright footer

### 5.2 Professional Profile

- **Name:** Sahand Farshian
- **Title:** Software Developer & Industrial Engineer
- **Focus:** Python, Java, Spring Boot, FastAPI, databases (MySQL, Oracle, MongoDB), ML, mathematical optimization
- **Work History:** Faraboom Open Banking Solutions (Java/Spring Boot, 2022–2024), Savola Behshahr (Planning trainee, 2024)
- **Education:** B.Sc. Industrial Engineering, Kharazmi University (2020–2025)
- **Projects:** MADM Python framework, User Management Spring Boot backend

---

## 6. Code Quality Assessment

### 6.1 Strengths

- **Single source of truth:** All content in `data.ts` with proper TypeScript interfaces — changes never touch component markup
- **Clean component design:** Each component is a single concern, stateless where possible, props-free (imports data directly)
- **Accessibility:** `prefers-reduced-motion` respected, semantic HTML (`<nav>`, `<section>`, `<ul>`), `aria-label` on icon buttons
- **Performance:** Passive scroll listener, no runtime CSS-in-JS, Tailwind purges unused classes in production
- **Build hygiene:** TypeScript strict mode, no unused locals/params, zero lint warnings
- **Deployment automation:** Single-command deploy with pre-build step

### 6.2 Recommendations

| # | Issue | Severity | Recommendation |
|---|---|---|---|
| 1 | `react-router-dom` is an unused dependency | Low | Remove from `package.json` to reduce install size and avoid confusion |
| 2 | No responsive image strategy | Low | Favicon is SVG (good), but consider adding a `link rel="preload"` for the Inter + EB Garamond fonts |
| 3 | No analytics or SEO verification | Medium | Add Google Analytics tag or a privacy-friendly alternative (Plausible); add Google Search Console verification |
| 4 | Static `new Date().getFullYear()` in footer | Low | Already correct — dynamically renders current year. No action needed. |
| 5 | No `.gitignore` review | Low | Verify `dist/` and `node_modules/` are ignored; `dist/` may be tracked if deploy script left artifacts |
| 6 | Vite `base` is hardcoded to `/` | Info | This is correct for a `username.github.io` repo; if moved to a custom domain or project page, it would need updating |
| 7 | No automated CI/CD | Medium | Currently deployment is manual via `npm run deploy`. Consider GitHub Actions workflow for auto-deploy on push to `main` |
| 8 | Missing `robots.txt` and `sitemap.xml` | Medium | Add both for search engine discoverability |

---

## 7. Security & Privacy

- **No secrets in codebase:** Email and Telegram handle are public personal identifiers (acceptable for a portfolio)
- **No API keys or tokens**
- **No client-side data collection**
- **All external links use `rel="noopener noreferrer"`** — prevents `window.opener` phishing
- **No user input, forms, or authentication** — zero attack surface

---

## 8. Maintenance & Operations

### 8.1 Local Development

```bash
git clone git@github.com:sfarshian/sfarshian.github.io.git
cd sfarshian.github.io
npm install
npm run dev        # → http://localhost:5173
npm run lint       # verify code quality
npm run build      # verify production build
npm run preview    # preview production build locally
```

### 8.2 Deployment

```bash
npm run deploy     # builds + pushes to gh-pages branch
```

### 8.3 Adding Content

All content lives in `src/data.ts`. To add:
- **Work experience:** Append to `workExperience` array
- **Skill:** Append to the appropriate `skillCategories[].skills` array
- **Project:** Append to `projects` array (requires a lucide-react icon import)
- **Social link:** Append to `socialLinks` array

No component changes needed — the data-driven architecture handles new entries automatically.

---

## 9. File Map

```
sfarshian.github.io/
├── index.html                     # HTML entry point (Vite template)
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # Project references root
├── tsconfig.app.json               # App TypeScript config
├── tsconfig.node.json              # Config-file TypeScript config
├── vite.config.ts                  # Vite bundler config
├── tailwind.config.ts              # Tailwind custom theme
├── postcss.config.js               # PostCSS (auto-generated)
├── .oxlintrc.json                  # Linter rules
├── public/
│   └── favicon.svg                 # SF monogram favicon
├── dist/                           # Production build output (deployed)
│   ├── index.html
│   ├── favicon.svg
│   └── assets/
│       ├── index-DaWC3laN.js       # 208 KB
│       └── index-MVxq_JON.css      # 14 KB
└── src/
    ├── main.tsx                    # React root mount
    ├── App.tsx                     # Root component (section composition)
    ├── data.ts                     # All content, types, exports (144 lines)
    ├── index.css                   # Tailwind directives + custom components
    └── components/
        ├── Navbar.tsx              # Sticky nav with mobile menu (78 lines)
        ├── Hero.tsx                # Landing section (52 lines)
        ├── WorkExperience.tsx      # Timeline + cards (55 lines)
        ├── TechnicalArsenal.tsx    # Skill category grid (40 lines)
        ├── Projects.tsx            # Project cards with links (46 lines)
        ├── Education.tsx           # Education card (36 lines)
        └── Contact.tsx             # Contact CTAs + social row (63 lines)
```

---

## 10. Summary

This is a well-structured, maintainable portfolio website. The architecture follows React best practices: data/content separation, single-responsibility components, and a consistent design system via Tailwind tokens. The build pipeline is modern and fast (Vite + oxlint). The deployment to GitHub Pages is simple and effective for a static site.

**Key metrics:** 547 lines of source, zero lint errors, ~60 KB gzipped payload, sub-second build times.

The primary opportunities for improvement are operational: adding a CI/CD pipeline (GitHub Actions), search engine optimization (robots.txt, sitemap.xml), and removing the unused `react-router-dom` dependency.
