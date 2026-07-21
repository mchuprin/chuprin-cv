import styles from './TerminalSection.module.scss'
import { ReactNode } from 'react'

interface TerminalSectionProps {
    text: string
    children: ReactNode
}

export const TerminalSection = ({ text, children }: TerminalSectionProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.command}>
                <span className="prompt">&#36;</span>
                <span className={styles.text}>{text}</span>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    )
}
