# N7 Frontend

A modern fintech landing page built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. The app features a polished dark UI, responsive layout, animated navigation, and content-driven sections for a new banking platform.

## What’s included

- Responsive homepage built with the App Router
- Animated dropdowns and mobile navigation using `framer-motion`
- Custom reusable UI components for buttons, sections, and layout
- Tailwind CSS utility styling with modern gradients, glassmorphism, and dark mode presentation
- Image optimization with `next/image`
- Clean, semantic structure split into sections:
  - `Hero`
  - `Features`
  - `CloudBased`
  - `FeatureSplit`
  - `OutOfTheBox`
  - `Insight`
  - `CaseStudies`
  - `BottomCTA`

## Project structure

- `src/app/` — root layout and page entry
- `src/components/layout/` — global navigation and footer
- `src/components/sections/` — page sections and landing page content
- `src/components/common/` — shared UI primitives like `Button`
- `src/utils/` — helper utilities

## Technology stack

- `next` 16.2.6
- `react` 19.2.4
- `typescript`
- `tailwindcss` v4
- `framer-motion`
- `lucide-react`
- `react-intersection-observer`
- `clsx`

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build and production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```


## Code quality

Lint the project with:

```bash
npm run lint
```

## Customize

- Update the homepage sections in `src/app/page.tsx`
- Change global fonts and metadata in `src/app/layout.tsx`
- Adjust navigation links and footer content in `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx`

## Notes

This repo is a clean landing page shell for a fintech brand called `N7`. It is optimized for modern frontend development and easy iteration on layout, copy, and section structure.