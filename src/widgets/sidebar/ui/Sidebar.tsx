'use client'
import Navlink from '@_shared/ui/navlink'
import { useActiveComponents } from '@/shared/lib/activeComponents'
import { AvailablesCommands } from '@/shared/types'
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

    return (
        <aside className={styles.sidebar}>
            <h1 className={styles.title}>Navigation</h1>
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
        </aside>
    )
}
