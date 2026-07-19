import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import CommandLine from '@_shared/ui/command-line'
import { SKILLS_DATA } from '../model/constants'

interface SkillsProps {
    className?: string
}

export const Skills = ({ className }: SkillsProps) => {
    const t = useTranslations('skills')

    return (
        <div className={classNames('t-content', {}, [className])}>
            <CommandLine text="skills">
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
