<h1 align="center">Cyberpunk CV</h1>

<p align="center">
  Terminal-style developer portfolio built with Next.js 16, React 19, and Feature-Sliced Design
</p>

<p align="center">
  <a href="https://mchuprin.github.io/chuprin-cv/">Live Demo</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-approach--decisions">Architecture</a>
</p>

<p align="center">
  <img src=".github/assets/demo.png" alt="Cyberpunk CV Demo" width="800" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Sass-CC6699?logo=sass" alt="Sass" />
  <img src="https://img.shields.io/badge/next--intl-4-000000" alt="next-intl" />
  <img src="https://img.shields.io/badge/FSD-Architecture-000000" alt="Feature-Sliced Design" />
  <img src="https://img.shields.io/badge/ESLint-9-4B32E3?logo=eslint" alt="ESLint" />
  <img src="https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier" alt="Prettier" />
  <img src="https://img.shields.io/badge/Steiger-FSD_Linter-000000" alt="Steiger" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2024-2088FF?logo=githubactions" alt="GitHub Actions" />
</p>

<p align="center">
  <a href="README.ru.md">🇷🇺 Русская версия</a>
</p>

---

## Task

Build a developer portfolio that looks and feels like a real terminal — complete with command input, scanline effects, glow, and a cyberpunk aesthetic. The site should be fully static, bilingual (RU/EN), and follow Feature-Sliced Design architecture.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Sass (SCSS Modules) |
| State Management | React Context |
| Internationalization | next-intl (RU/EN) |
| Architecture | Feature-Sliced Design |
| Linting | ESLint, Prettier, Steiger (FSD linter) |
| Deployment | GitHub Actions → GitHub Pages |

## Project Structure

```
src/
├── _app/                  # App layer: providers, layouts, global styles
│   ├── layouts/           # Main page layout
│   ├── providers/         # Context providers (i18n)
│   ├── router/            # App router config
│   └── styles/            # Global SCSS styles
├── _pages/                # Pages layer: route components
│   └── main/              # Main (and only) page
├── widgets/               # UI blocks composing the page
│   ├── command-palette/   # Command palette overlay (Ctrl+K)
│   ├── footer/            # Terminal footer
│   ├── header/            # Terminal header (title bar)
│   ├── horizontal-tabs/   # Tablet navigation tabs
│   ├── sidebar/           # Sidebar with navigation & CV download
│   └── terminal-input/    # Terminal command input
├── entities/              # Business domain entities
│   ├── whoami/            # Developer bio & name card
│   ├── skills/            # Skills in neofetch style
│   ├── projects/          # Project directory listing
│   ├── experience/        # Work experience timeline
│   ├── help/              # Help command output
│   ├── contact/           # Contact information
│   ├── cv/                # Resume data & PDF download
│   └── unknown-command/   # Fallback for unrecognized commands
├── features/              # User-facing features
│   └── locale-switcher/   # Language toggle (RU ↔ EN)
└── shared/                # Reusable: components, hooks, config, types
    ├── api/               # API layer (unused currently)
    ├── config/            # i18n config (request, routing, messages)
    ├── lib/               # Utilities: classNames, contexts, hooks
    ├── model/             # Shared types & constants
    └── ui/                # UI kit: button, card, input, navlink, overlay, terminal-section

.github/
├── assets/
│   └── demo.png           # Screenshot for README
└── workflows/
    └── deploy.yml          # GitHub Pages deployment

public/
├── cv/                    # PDF resumes (RU + EN)
├── me.jpeg                # Author photo
└── ...                    # Favicon, icons, SVGs

app/                       # Next.js App Router root
├── [locale]/              # Locale-aware routing
├── layout.tsx             # Root HTML layout
├── page.tsx               # Root redirect → /[locale]
└── globals.css            # CSS reset & globals
```

## Approach & Decisions

### Feature-Sliced Design

Every piece of code lives in its FSD layer with strict import rules. Entities expose only public API via `index.ts`. This keeps the codebase maintainable and prevents circular dependencies.

**Layers:** `_app` → `_pages` → `widgets` → `entities` → `features` → `shared`

### Terminal UI

The entire interface mimics a terminal emulator — scanline overlay, glowing text, monospace font, custom cursor, and command-based navigation. Desktop uses a full terminal layout; tablets switch to horizontal tabs; mobile uses a bottom nav bar.

### Static Export with i18n

`next-intl` provides full RU/EN localization. The app is statically exported (`output: 'export'`) and deployed to GitHub Pages — zero server runtime. PDF resumes are locale-aware and download from `public/cv/`.

### Responsive Design

Three breakpoints:
- **Desktop** (>1024px): full terminal layout with sidebar
- **Tablet** (768–1024px): horizontal tabs replace sidebar
- **Mobile** (<768px): bottom navigation bar, simplified layout

## Terminal Commands

| Command | Description |
|---------|-------------|
| `whoami` | Developer bio and name card |
| `skills` | Skills displayed in neofetch style |
| `projects` | Project directory listing |
| `experience` | Work experience timeline |
| `contact` | Contact information |
| `cv` | Download resume as PDF |
| `help` | List all available commands |
| `clear` | Reset terminal to initial state |
| `sudo hire-me` | Easter egg → contact information |

## Features

- **Terminal UI** — cyberpunk-themed interface with scanline effects, glow, and custom cursor
- **i18n** — full Russian/English localization via `next-intl`
- **Resume Download** — download PDF resume from sidebar (locale-aware: RU/EN)
- **Static Export** — fully static site deployed to GitHub Pages
- **FSD Architecture** — strict layer separation for scalable, maintainable code
- **Responsive Design** — desktop (terminal), tablet (tabs), mobile (bottom nav) layouts
- **Command Palette** — quick command access via `Ctrl+K`
- **Animated Transitions** — smooth section transitions

## Limitations

- **PWA** — not implemented yet
- **Semantic HTML** — possible future improvement
- **Meta Preview** — Open Graph / social preview images not configured
- **Pixel Art Photo** — planned for `whoami` section
- **Fetch CV Bug** — CV download in Command Palette may not work

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 9+

### Development

```bash
git clone git@github.com:mchuprin/chuprin-cv.git
cd chuprin-cv
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
# Output → out/
```

### Lint

```bash
pnpm lint        # ESLint
pnpm lint:fsd    # Feature-Sliced Design linter (Steiger)
```

### Resume PDF

Place your PDF resume files in `public/cv/`:
- `public/cv/Максим_Чуприн_CV.pdf` — Russian version
- `public/cv/Maksim_Chuprin_CV.pdf` — English version

## Deployment

The project deploys automatically to GitHub Pages on every push to `main`.

**Workflow:**
1. Push to `main`
2. GitHub Actions installs deps with pnpm
3. Builds static export (`next build` with `output: 'export'`)
4. Deploys `out/` directory to GitHub Pages

Base path: `/chuprin-cv`

## Author

**Maksim Chuprin** — Frontend Developer (6+ years)

- Telegram: [@maks_chuprin](https://t.me/maks_chuprin)
- Email: chuprin.web.dev@gmail.com
- GitHub: [mchuprin](https://github.com/mchuprin)
