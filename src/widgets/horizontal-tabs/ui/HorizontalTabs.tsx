'use client'
import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import Navlink from '@_shared/ui/navlink'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import { SECTIONS } from '@_shared/model/constants'
import styles from './HorizontalTabs.module.scss'

interface HorizontalTabsProps {
    className?: string
}

export const HorizontalTabs = ({ className }: HorizontalTabsProps) => {
    const { selectSection, lastSection } = useActiveComponents()
    const t = useTranslations('nav')

    return (
        <nav className={classNames(styles.tabs, {}, [className])}>
            {SECTIONS.map((section) => (
                <Navlink
                    key={section}
                    variant="horizontal"
                    isActive={lastSection === section}
                    label={section.toUpperCase()}
                    onClick={() => selectSection(section)}
                />
            ))}
        </nav>
    )
}
