'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import { LocaleSwitcher } from '@_features/locale-switcher'
import { Button } from '@_shared/ui/button'
import { usePalette } from '@_shared/lib/contexts/palette'
import { ASCII_LOGO } from '../model/constants'
import styles from './Header.module.scss'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const { open } = usePalette()

    return (
        <header className={classNames(styles.header, {}, [className])}>
            <div className={styles.trafficLights}>
                <span className={`${styles.dot} ${styles.dot_red}`} />
                <span className={`${styles.dot} ${styles.dot_yellow}`} />
                <span className={`${styles.dot} ${styles.dot_green}`} />
            </div>
            <pre className={styles.logo}>{ASCII_LOGO}</pre>
            <div className={styles.right}>
                <LocaleSwitcher />
                <Button type="button" onClick={open}>
                    <span>⌘K</span>
                    <span className={styles.paletteLabel}>Command palette</span>
                </Button>
                <div className={styles.time}>
                    {new Date()
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
                        .replace(/\//g, '-')}
                </div>
            </div>
        </header>
    )
}
