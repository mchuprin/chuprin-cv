<h1 align="center">Cyberpunk CV</h1>

<p align="center">
  Terminal-style developer portfolio built with Next.js 16, React 19, and Feature-Sliced Design
</p>

<p align="center">
  <a href="https://mchuprin.github.io/chuprin-cv/">Live Demo</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-architecture">Architecture</a>
</p>

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Sass (SCSS Modules) |
| State Management | React Context |
| Internationalization | next-intl (RU/EN) |
| Architecture | Feature-Sliced Design |
| Linting | ESLint, Prettier, Steiger (FSD linter) |
| Deployment | GitHub Actions → GitHub Pages |

## Features

- **Terminal UI** — cyberpunk-themed interface with scanline effects, glow, and custom cursor
- **i18n** — full Russian/English localization via `next-intl`
- **Resume Download** — download PDF resume from sidebar (locale-aware: RU/EN)
- **Static Export** — fully static site deployed to GitHub Pages
- **FSD Architecture** — strict layer separation for scalable, maintainable code
- **Responsive Design** — adapts to different screen sizes

## Terminal Commands

| Command | Description |
|---------|-------------|
| `whoami` | Developer bio and name card |
| `skills` / `neofetch` | Skills displayed in neofetch style |
| `projects` | Project directory listing |
| `experience` | Work experience (coming soon) |
| `contact` / `sudo hire-me` | Contact information (coming soon) |
| `help` | List all available commands |
| `clear` | Reset terminal to initial state |

## Getting Started

```bash
# Clone the repository
git clone git@github.com:mchuprin/chuprin-cv.git
cd chuprin-cv

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Resume PDF

Place your PDF resume files in `public/cv/`:
- `public/cv/Максим_Чуприн_CV.pdf` — Russian version
- `public/cv/Maksim_Chuprin_CV.pdf` — English version

## Project Structure

```
src/
├── _app/                  # App layer: providers, layouts, global styles
├── _pages/                # Pages layer: route components
├── widgets/               # UI blocks: header, sidebar, footer, terminal-input, command-palette
├── entities/              # Business entities: whoami, skills, projects, experience, help, contact, resume
├── features/              # User-facing features: locale-switcher
└── shared/                # Reusable: UI components, hooks, contexts, config, types, constants
```

## Architecture

The project follows **Feature-Sliced Design** — an architectural methodology for frontend projects.

| Layer | Purpose |
|-------|---------|
| `_app` | App-level setup: providers, global layout, styles |
| `_pages` | Page components mapped to routes |
| `widgets` | Large UI blocks composing the page (header, sidebar, terminal) |
| `entities` | Business domain entities (skills, projects, experience, resume) |
| `features` | User interactions (locale switching, command palette) |
| `shared` | Cross-cutting: reusable components, utilities, config, types |

Architecture linting is configured via **Steiger** with the FSD plugin.

## Linting & Formatting

```bash
pnpm lint        # ESLint
pnpm lint:fsd    # Feature-Sliced Design linter (Steiger)
```

Prettier config: no semicolons, single quotes, 4-space tabs, 100-char line width.

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

---

## О проекте (RU)

**Cyberpunk CV** —терминальное портфолио-резюме, построенное на Next.js 16 и Feature-Sliced Design.

Интерфейс оформлен в стиле киберпанк-терминала со сканлайнами, эффектом свечения и кастомным курсором. Весь контент — биография, навыки, проекты — открывается через «команды» терминала или через навигацию в сайдбаре.

**Возможности:**
- Двуязычность (русский/английский) через `next-intl`
- Скачивание PDF-резюме через кнопку в сайдбаре (locale-aware)
- Полностью статичный сайт, деплой на GitHub Pages
- Архитектура Feature-Sliced Design с линтингом через Steiger
- Адаптивный дизайн

**Стек:** Next.js 16, React 19, TypeScript, Sass, next-intl

## Planned Features

- [ ] `experience` — отображение опыта работы из `cv/CV.md`
- [ ] `contact` — блок с контактными данными
- [ ] Команда скачивания резюме через терминал, соответственная секция в терминале
- [ ] Скриншот/GIF для README
- [ ] Адаптив на телефоны и планшеты
- [ ] Иконка приложения
- [x] Как-то обработать дубли при вводе одной и той же команды несколько раз
- [x] Логика выбора команды в CommandPalette

- [x] Скачивание файла резюме через кнопку в сайдбаре
- [x] `command palette` — палитра команд для быстрого доступа
- [x] Анимации переходов между секциями
