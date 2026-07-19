import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './CommandLine.module.scss'
import { ReactNode } from 'react'

interface CommandLineProps {
    text: string
    children: ReactNode
}

export const CommandLine = ({ text, children }: CommandLineProps) => {
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
