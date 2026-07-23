'use client'
import { useTranslations } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import { DownloadButton } from '@_entities/cv'
import { ASCII_LOGO } from '../model/constants'
import styles from './Header.module.scss'

interface TabletHeaderProps {
    className?: string
}

export const TabletHeader = ({ className }: TabletHeaderProps) => {
    const t = useTranslations('whoami')

    return (
        <header className={classNames(styles.header, {}, [className])}>
            <pre className={styles.logo}>{ASCII_LOGO}</pre>
            <div className={styles.right}>
                <span className={styles.available}>● {t('available')}</span>
                <DownloadButton />
            </div>
        </header>
    )
}
