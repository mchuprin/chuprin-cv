import { Project } from './types'

export const PROJECTS: Project[] = [
    {
        name: 'cv-portfolio',
        lang: 'Nuxt, TypeScript',
        year: 2026,
        desc: 'Terminal-themed developer portfolio built with Next.js, featuring cyberpunk UI and command-line interface.',
        descRu: 'Портфолио разработчика в стиле терминала на Next.js с киберпанок интерфейсом и командной строкой.',
        github: 'https://github.com/mchuprin/chuprin-cv',
        demo: 'https://mchuprin.github.io/chuprin-cv/',
    },
    {
        name: 'minesweeper',
        lang: 'React, TypeScript',
        year: 2026,
        desc: 'Classic Minesweeper game built with React 19, Zustand 5, and Feature-Sliced Design',
        descRu: 'Классическая игра «Сапер», созданная с использованием React 19, Zustand 5 и Feature-Sliced ​​Design.',
        github: 'https://github.com/mchuprin/minesweeper',
        demo: 'https://mchuprin.github.io/minesweeper/',
    },
    {
        name: 'grindi-landing',
        lang: 'Vue, TypeScript',
        year: 2025,
        desc: `Landing page for Diana Grinenko's Chinese language school.`,
        descRu: 'Лендинг для школы китайского языка Дианы Гриненко.',
        github: null,
        demo: 'https://diana-chinese.ru/',
    },
]
