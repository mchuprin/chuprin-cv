import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import TerminalSection from '@_shared/ui/terminal-section'
import { SKILLS_DATA } from '../model/constants'

interface SkillsProps {
    className?: string
}

export const Skills = ({ className }: SkillsProps) => {
    const t = useTranslations('skills')

    return (
        <div className={classNames('t-content', {}, [className])}>
            <TerminalSection text="skills">
                <div>
                    {SKILLS_DATA.map(({ key, items }) => (
                        <div key={key} className="t-row">
                            <span className="t-label">{t(`categories.${key}`)}</span>
                            <span className="t-sep">:</span>
                            <span className="t-value">{items.join(', ')}</span>
                        </div>
                    ))}
                </div>
            </TerminalSection>
        </div>
    )
}
