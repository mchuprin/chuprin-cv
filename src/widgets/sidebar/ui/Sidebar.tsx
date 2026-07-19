'use client'
import { useTranslations } from 'next-intl'
import Navlink from '@_shared/ui/navlink'
import { useActiveComponents } from '@_shared/lib/activeComponents'
import { AvailablesCommands } from '@_shared/types'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

const sections: Exclude<AvailablesCommands, 'help'>[] = [
    'whoami',
    'projects',
    'experience',
    'skills',
    'contact'
]

export const Sidebar = (props: SidebarProps) => {
    const { addSection, lastSection } = useActiveComponents()
    const t = useTranslations('hints')

    return (
        <aside className={styles.sidebar}>
            <h1 className={styles.title}>NAVIGATION</h1>
            <div className={styles.navigation}>
                {sections.map((section) => (
                    <Navlink
                        key={section}
                        isActive={lastSection === section}
                        label={section.toUpperCase()}
                        onClick={() => addSection(section)}
                    />
                ))}
            </div>
            <div className={styles.hints}>
                <div><span className={styles.hintKey}>↑↓</span> — {t('history')}</div>
                <div><span className={styles.hintKey}>clear</span> — {t('clear')}</div>
            </div>
        </aside>
    )
}
