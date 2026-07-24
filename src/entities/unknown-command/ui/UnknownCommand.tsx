import { classNames } from '@_shared/lib/classNames/classNames'
import TerminalSection from '@_shared/ui/terminal-section'

interface UnknownCommandProps {
    command?: string
    className?: string
}

export const UnknownCommand = ({ command = '', className }: UnknownCommandProps) => {
    return (
        <div className={classNames('t-content', {}, [className])}>
            <TerminalSection text={command}>
                <div className="t-error">
                    {`zsh: command not found: ${command}`}
                </div>
            </TerminalSection>
        </div>
    )
}
