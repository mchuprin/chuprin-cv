import { SkillCategory } from './types'

export const SKILLS_DATA: SkillCategory[] = [
    { key: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Redux', 'Redux Toolkit', 'React Query', 'MobX', 'Vue', 'Nuxt', 'Pinia', 'Vuex'] },
    { key: 'UI', items: ['Tailwind', 'Element Plus', 'Vuetify', 'Bootstrap'] },
    { key: 'Build & CI', items: ['Vite', 'Webpack', 'Docker', 'Nginx', 'GitLab CI', 'GitHub Actions'] },
    { key: 'Quality', items: ['ESLint', 'Prettier', 'Husky', 'FSD', 'Storybook'] },
    { key: 'AI Tools', items: ['Claude Code', 'Cursor', 'Deep Seek', 'ChatGPT', 'Perplexity'] },
]
