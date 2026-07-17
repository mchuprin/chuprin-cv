import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import CommandLine from '@_shared/ui/command-line'

interface SkillsProps {
    className?: string
}

const SKILLS_DATA = [
    { key: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Redux', 'Redux Toolkit', 'React Query', 'MobX', 'Vue', 'Nuxt', 'Pinia', 'Vuex'] },
    { key: 'UI', items: ['Tailwind', 'Element Plus', 'Vuetify', 'Bootstrap'] },
    { key: 'Build & CI', items: ['Vite', 'Webpack', 'Docker', 'Nginx', 'GitLab CI', 'GitHub Actions'] },
    { key: 'Quality', items: ['ESLint', 'Prettier', 'Husky', 'FSD', 'Storybook'] },
    { key: 'AI Tools', items: ['Claude Code', 'Cursor', 'Deep Seek', 'ChatGPT', 'Perplexity'] },
]

export const Skills = ({ className }: SkillsProps) => {
    const t = useTranslations('skills')

    return (
        <div className={classNames('t-content', {}, [className])}>
            <CommandLine text="neofetch --skills">
                <div>
                    {SKILLS_DATA.map(({ key, items }) => (
                        <div key={key} className="t-row">
                            <span className="t-label">{t(`categories.${key}`)}</span>
                            <span className="t-sep">:</span>
                            <span className="t-value">{items.join(', ')}</span>
                        </div>
                    ))}
                </div>
            </CommandLine>
        </div>
    )
}
