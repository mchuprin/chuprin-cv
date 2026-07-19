import { Project } from './types'

export const STATUS_COLOR: Record<string, string> = {
    ACTIVE: '#00d9ff',
    STABLE: '#39ff14',
    BETA: '#ff006e',
}

export const PROJECTS: Project[] = [
    { name: 'cv-portfolio', lang: 'TypeScript', year: 2025, desc: 'Terminal-themed developer portfolio built with Next.js, featuring cyberpunk UI and command-line interface.', descRu: 'Портфолио разработчика в стиле терминала на Next.js с киберпанок интерфейсом и командной строкой.', status: 'ACTIVE', stars: 0 },
    { name: 'void-shell', lang: 'Rust', year: 2025, desc: 'Minimal async shell with zero-copy IPC and sandboxed plugin execution.', descRu: 'Минималистичный асинхронный шелл с zero-copy IPC и песочницей для плагинов.', status: 'STABLE', stars: 312 },
    { name: 'phantom-proxy', lang: 'Go', year: 2025, desc: 'Transparent traffic proxy with real-time ML anomaly detection pipeline.', descRu: 'Прозрачный трафик-прокси с пайплайном обнаружения аномалий ML в реальном времени.', status: 'ACTIVE', stars: 1203 },
    { name: 'darkframe', lang: 'TypeScript', year: 2024, desc: 'Zero-dependency UI framework built on native browser APIs with compiler-time CSS.', descRu: 'UI-фреймворк без зависимостей, построенный на нативных API браузера с CSS на этапе компиляции.', status: 'BETA', stars: 589 },
]
