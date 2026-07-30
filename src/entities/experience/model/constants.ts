import { ExperienceItem } from './types'

export const STACK_LABEL: Record<string, string> = { en: 'Stack', ru: 'Стек' }

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        company: 'ITFB Group',
        role: 'Frontend Developer',
        roleRu: 'Frontend-разработчик',
        period: 'Nov 2023 — Present',
        periodRu: 'Ноя 2023 — Настоящее время',
        location: 'Remote',
        locationRu: 'Удалённо',
        achievements: [
            'Built a scenario constructor for document processing — reduced business configuration time significantly',
            'Created a custom virtual scrolling solution — 3x faster rendering of document attributes',
            'Implemented seamless page rendering with pan & zoom (VBox)',
            'Refactored services using Feature-Sliced Design — 20% faster feature development, 50% faster onboarding for new developers',
            'Configured GitLab CI: builds, Docker images, Kubernetes deployment',
            'Standardized codebase: ESLint, Prettier, Husky pre-commit hooks',
        ],
        achievementsRu: [
            'Разработал конструктор сценариев для обработки документов — значительно сократил время настройки бизнес-процессов',
            'Создал кастомное решение для виртуального скроллинга — ускорение рендеринга атрибутов документов в 3 раза',
            'Реализовал бесшовный рендеринг страниц с функциями панорамирования и масштабирования (VBox)',
            'Рефакторинг сервисов с использованием Feature-Sliced Design — ускорение разработки фич на 20%, онбординг новых разработчиков в 2 раза быстрее',
            'Настроил GitLab CI: сборки, Docker-образы, развёртывание в Kubernetes',
            'Стандартизировал кодовую базу: ESLint, Prettier, Husky pre-commit хуки',
        ],
        stack: 'React, React Query, TypeScript, Vite, Tailwind, Storybook, Docker, Nginx',
    },
    {
        company: 'Idaproject',
        role: 'Frontend Developer',
        roleRu: 'Frontend-разработчик',
        period: 'Jun 2022 — Oct 2023',
        periodRu: 'Июн 2022 — Окт 2023',
        location: 'Remote',
        locationRu: 'Удалённо',
        achievements: [
            'Migrated project from jQuery to React + TypeScript — 40% faster development, 30% smaller bundle size',
            'Migrated templates from Django to Next.js — 2x faster page load',
            'Built dynamic room filtering module',
            'Created external iframe survey for user analytics',
        ],
        achievementsRu: [
            'Миграция проекта с jQuery на React + TypeScript — ускорение разработки на 40%, уменьшение размера бандла на 30%',
            'Миграция шаблонов с Django на Next.js — ускорение загрузки страницы в 2 раза',
            'Разработка модуля динамической фильтрации комнат',
            'Создание внешнего iframe-опроса для аналитики пользователей',
        ],
        stack: 'React, Next.js, TypeScript, Django Templates, jQuery, Webpack',
    },
    {
        company: 'Fortech',
        role: 'Frontend Developer',
        roleRu: 'Frontend-разработчик',
        period: 'Feb 2020 — May 2022',
        periodRu: 'Фев 2020 — Май 2022',
        location: 'Remote',
        locationRu: 'Удалённо',
        achievements: [
            'Hotel Analytics Dashboard — built analytics dashboard with JWT authentication, configured ESLint, Prettier, Webpack, TypeScript',
            '3D Kitchen Configurator — redesigned UI based on new design system, implemented Storybook — documented entire UI, 50% less duplicated code',
        ],
        achievementsRu: [
            'Панель аналитики отелей — разработка дашборда с JWT-аутентификацией, настройка ESLint, Prettier, Webpack, TypeScript',
            '3D-конфигуратор кухонь — редизайн UI на основе новой дизайн-системы, внедрение Storybook — документирование всего UI, уменьшение дублирующегося кода на 50%',
        ],
        stack: 'React, Redux, TypeScript, Webpack, Bootstrap / Vue, TypeScript, Webpack, Storybook, Vuetify',
    },
]
