import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import TerminalSection from '@_shared/ui/terminal-section'
import { SECTION_KEYS } from '@_shared/model/constants'

interface HelpProps {
    className?: string
}

export const Help = ({ className }: HelpProps) => {
    const t = useTranslations('help')

    return (
        <div className={classNames('t-content', {}, [className])}>
            <TerminalSection text="help">
                <div className="t-label">{t('title')}</div>
                {Object.values(SECTION_KEYS).map((cmd) => (
                    <div key={cmd} className="t-row">
                        <span className="t-cmd">{t(`commands.${cmd}`)}</span>
                        <span className="t-muted">— {t(`commandsDesc.${cmd}`)}</span>
                    </div>
                ))}
            </TerminalSection>
        </div>
    )
}
