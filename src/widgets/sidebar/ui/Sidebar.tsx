'use client'
import { useTranslations } from 'next-intl'
import Navlink from '@_shared/ui/navlink'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import { DownloadButton } from '@_entities/cv'
import { SECTIONS } from '@_shared/model/constants'
import styles from './Sidebar.module.scss'
import { classNames } from '@_shared/lib/classNames/classNames'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { addSection, lastSection } = useActiveComponents()
    const t = useTranslations('nav')

    return (
        <aside className={classNames(styles.sidebar, {}, [className])}>
            <h1 className={styles.title}>{t('title')}</h1>
            <div className={styles.navigation}>
                {SECTIONS.map((section) => (
                    <Navlink
                        key={section}
                        isActive={lastSection === section}
                        label={section.toUpperCase()}
                        onClick={() => addSection(section)}
                    />
                ))}
            </div>
            <div className={styles.downloadButton}>
                <DownloadButton />
            </div>
            <div className={styles.hints}>
                <div>
                    <span className={styles.hintKey}>↑↓</span> — {t('history')}
                </div>
                <div>
                    <span className={styles.hintKey}>clear</span> — {t('clear')}
                </div>
            </div>
        </aside>
    )
}
