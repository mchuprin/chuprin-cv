import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import CommandLine from '@_shared/ui/command-line'

interface HelpProps {
    className?: string
}

const COMMAND_KEYS = [
    'whoami',
    'projects',
    'skills',
    'experience',
    'contact',
    'help',
    'clear',
    'sudo hire-me',
] as const

export const Help = ({ className }: HelpProps) => {
    const t = useTranslations('help')

    return (
        <div className={classNames('t-content', {}, [className])}>
            <CommandLine text="help">
                <div className="t-label">{t('title')}</div>
                {COMMAND_KEYS.map((cmd) => (
                    <div key={cmd} className="t-row">
                        <span className="t-cmd">{cmd}</span>
                        <span className="t-muted">— {t(`commands.${cmd}`)}</span>
                    </div>
                ))}
            </CommandLine>
        </div>
    )
}
