'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import Navlink from '@_shared/ui/navlink'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import { SECTIONS } from '@_shared/model/constants'
import styles from './HorizontalTabs.module.scss'
import { ICONS } from '../model/constants'

interface HorizontalTabsProps {
    className?: string
}

export const HorizontalTabs = ({ className }: HorizontalTabsProps) => {
    const { selectSection, lastSection } = useActiveComponents()

    return (
        <>
            {/* Tablet */}
            <nav className={classNames(styles.tabsTablet, {}, [className, styles.tabletOnly])}>
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

            {/* Mobile */}
            <nav className={classNames(styles.tabsMobile, {}, [className, styles.mobileOnly])}>
                {SECTIONS.map((section) => {
                    const isActive = lastSection === section
                    return (
                        <button
                            key={section}
                            type="button"
                            className={classNames(styles.tab, { [styles.active]: isActive })}
                            onClick={() => selectSection(section)}
                        >
                            <span className={styles.icon}>{ICONS[section]}</span>
                            <span className={styles.label}>{section.toUpperCase()}</span>
                        </button>
                    )
                })}
            </nav>
        </>
    )
}
