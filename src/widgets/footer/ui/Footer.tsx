'use client'
import { useTranslations } from 'next-intl'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import styles from './Footer.module.scss'
import { classNames } from '@_shared/lib/classNames/classNames'

interface FooterProps {
    className?: string
}

export const Footer = ({ className }: FooterProps) => {
    const { lastSection } = useActiveComponents()
    const t = useTranslations('footer')
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone

    return (
        <footer className={classNames(styles.footer, {}, [className])}>
            <div className={styles.left}>
                <span className={styles.normal}>NORMAL</span>
                <span className={styles.muted}>
                    {t('section')}:{' '}
                    <span className={styles.sectionValue}>{lastSection || 'help'}</span>
                </span>
                <span className={styles.muted}>{t('enc')}</span>
            </div>
            <div className={styles.right}>
                <span className={styles.muted}>
                    <span className={styles.dot}>●</span> {t('connected')}
                </span>
                <span className={styles.muted}>{tz}</span>
            </div>
        </footer>
    )
}
