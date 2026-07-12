import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Help.module.scss'
import CommandLine from '@_shared/ui/command-line'

interface HelpProps {
    className?: string
}

const COMMANDS: Record<string, string> = {
    whoami: 'About me',
    projects: 'View my work',
    skills: 'Technologies (neofetch style)',
    experience: 'Work history',
    contact: 'Get in touch',
    help: 'Show available commands',
    clear: 'Clear terminal',
    'sudo hire-me': 'Open contact form'
}

export const Help = ({ className }: HelpProps) => {
    return (
        <div className={classNames(styles.help, {}, [className])}>
            <CommandLine text="help">
                <div className={styles.title}>Available commands:</div>
                {Object.entries(COMMANDS).map(([cmd, desc]) => (
                    <div key={cmd} className={styles.row}>
                        <span className={styles.command}>{cmd}</span>
                        <span className={styles.desc}>— {desc}</span>
                    </div>
                ))}
            </CommandLine>
        </div>
    )
}
