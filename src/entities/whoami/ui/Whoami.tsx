import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import TerminalSection from '@_shared/ui/terminal-section'

interface WhoamiProps {
    className?: string
}

export const Whoami = ({ className }: WhoamiProps) => {
    const t = useTranslations('whoami')

    const INFO = [
        { label: t('name'), value: t('fullname') },
        { label: t('role'), value: t('roleValue') },
        { label: t('location'), value: 'Remote' },
        { label: t('status'), value: `● ${t('available')}`, status: true },
        { label: t('english'), value: 'B2 (Upper-Intermediate)' },
    ]

    return (
        <div className={classNames('t-content', {}, [className])}>
            <TerminalSection text="whoami">
                {INFO.map(({ label, value, status }) => (
                    <div key={label} className="t-row">
                        <span className="t-label">{label}</span>
                        <span className="t-sep">:</span>
                        <span className={status ? 't-status' : 't-value'}>{value}</span>
                    </div>
                ))}
                <div className="t-muted">{t('bio')}</div>
            </TerminalSection>
        </div>
    )
}
