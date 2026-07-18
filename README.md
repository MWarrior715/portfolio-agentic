# Manuel Guerrero — AI Product Builder & Systems Integrator

> I close the gap between a complex idea and a working product. I connect development, AI, automation, and business strategy.

🌍 **Live:** [portfolio-agentic.vercel.app](https://portfolio-agentic.vercel.app/)
📦 **Repo:** [github.com/MWarrior715/portfolio-agentic](https://github.com/MWarrior715/portfolio-agentic)

This is not a code showcase. It is a live demonstration of agentic orchestration — a portfolio built to show how specialized agents coordinate to ship production software, anchored by the real case study **QUIKLII**.

---

## ✨ Features

- **Dual theme** — Dark by default, with a Light toggle (class-based `dark:` variant, persisted in `localStorage`, no flash on load).
- **Bilingual UI** — ES / EN with a type-safe dictionary and live switching (no page reload).
- **Code-splitting** — Below-the-fold sections load on demand via `React.lazy` + `Suspense`.
- **Motion** — Subtle scroll-triggered animations with Framer Motion.
- **Accessible & responsive** — Mobile-first, keyboard-focusable, semantic markup.
- **Strict TypeScript** — Zero `any`, inferred and explicit types throughout.

## 🧱 Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 + Vite |
| Language | TypeScript (strict) |
| Styling | TailwindCSS v4 |
| Animation | Framer Motion |
| State | Zustand (+ `persist` middleware) |
| Icons | lucide-react + custom SVG marks |
| Deploy | Vercel |

## 📐 Sections

1. **Hero** — title, value proposition, and a live typewriter of QUIKLII's orchestration architecture.
2. **AI-First Engineering** — three abstract agent roles: Orchestrator, Builder, Reasoning.
3. **Projects** — three product case studies in `Problem → Solution → Impact → Savings` format.
4. **QUIKLII Case Study** — positioned as an Integration Lab: real stack (React, Node, PostgreSQL, Wompi/Nequi/PSE/Cash, Socket.io), three architectural layers, and key metrics.
5. **Experience** — an impact-focused timeline (real history, rewritten around outcomes).
6. **Contact** — verified channels: email, WhatsApp, phone, GitHub, location, languages.

## 🗂️ Project Structure

```
src/
├── components/      # UI only (receive props, render)
│   ├── layout/      # Navbar, Footer
│   ├── hero/        # Hero, CodeTypewriter
│   ├── sections/    # AiFirstEngineering, Projects, QuikliiCaseStudy, Experience, Contact
│   ├── projects/    # ProjectCard
│   ├── quiklii/     # LayerCard
│   ├── experience/  # TimelineItem
│   ├── contact/     # ContactCard
│   └── ui/          # GitHubIcon, WhatsAppIcon
├── data/            # Static, typed, bilingual content (Localized<T>)
├── hooks/           # Reusable logic (useTranslation)
├── lib/             # Pure utilities (animations)
├── store/           # Global state (useThemeStore, useLanguageStore)
└── types/           # Type definitions only
```

## 🚀 Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check + production build
npm run build

# preview the production build locally
npm run preview
```

## 🏗️ Architecture Highlights

- **Theme** — A Zustand store toggles a `dark` class on `<html>`. Tailwind's `dark:` variant is bound to that class (not the OS media query), so the toggle is deterministic. An inline script applies the persisted preference before first paint to avoid FOUC.
- **i18n** — UI strings live in a typed dictionary; `en` is checked against the shape of `es` at compile time, so missing keys fail the build. Content data is `Localized<T>` (`Record<'es' | 'en', T>`), consumed as `data[lang]`.
- **Performance** — Initial bundle ships only the above-the-fold sections; the rest are separate chunks fetched on scroll. Fonts load asynchronously via `rel="preload"`.

## 👤 Author

**Manuel Guerrero** — AI Product Builder & Systems Integrator · Bogotá, Colombia

- 📧 mguerrerom715@gmail.com
- 💬 WhatsApp: +57 320 952 9591
- 🐙 [github.com/MWarrior715](https://github.com/MWarrior715)

## 📄 License

MIT — free to use as a reference. Content (copy, case studies, contact data) is personal and should not be repurposed without permission.