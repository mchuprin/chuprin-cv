'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import { LocaleSwitcher } from '@_features/locale-switcher'
import { Button } from '@_shared/ui/button'
import { usePalette } from '@_shared/lib/contexts/palette'
import { DownloadButton } from '@_entities/cv'
import { ASCII_LOGO } from '../model/constants'
import styles from './Header.module.scss'

interface HeaderProps {
    className?: string
}

const formatTime = () =>
    new Date()
        .toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZoneName: 'short'
        })
        .replace(/\//g, '-')

export const Header = ({ className }: HeaderProps) => {
    const { open } = usePalette()
    const t = useTranslations('whoami')
    const [time, setTime] = useState(formatTime)

    useEffect(() => {
        const interval = setInterval(() => setTime(formatTime()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <header className={classNames(styles.header, {}, [className])}>
            {/* Traffic lights — desktop only */}
            <div className={classNames(styles.trafficLights, {}, [styles.desktopOnly])}>
                <span className={`${styles.dot} ${styles.dot_red}`} />
                <span className={`${styles.dot} ${styles.dot_yellow}`} />
                <span className={`${styles.dot} ${styles.dot_green}`} />
            </div>

            {/* ASCII logo — always */}
            <pre className={styles.logo}>{ASCII_LOGO}</pre>

            <div className={styles.right}>
                {/* Desktop: LocaleSwitcher */}
                <div className={styles.desktopOnly}>
                    <LocaleSwitcher />
                </div>

                {/* Desktop: Command palette button */}
                <Button type="button" onClick={open} className={styles.desktopOnly}>
                    <span>⌘K</span>
                    <span className={styles.paletteLabel}>Command palette</span>
                </Button>

                {/* Desktop: Time */}
                <div className={classNames(styles.time, {}, [styles.desktopOnly])} suppressHydrationWarning>
                    {time}
                </div>

                {/* Tablet/Mobile: ● AVAILABLE */}
                <span className={classNames(styles.available, {}, [styles.notDesktopOnly])}>
                    ● {t('available')}
                </span>

                {/* Tablet only: DownloadButton */}
                <div className={styles.tabletOnly}>
                    <DownloadButton />
                </div>
            </div>
        </header>
    )
}
