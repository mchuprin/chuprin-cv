'use client'
import { useState, type ReactNode } from 'react'
import { AppLoading } from '@_shared/ui/app-loading'
import { Header } from '@_widgets/header'
import { HorizontalTabs } from '@_widgets/horizontal-tabs'
import Sidebar from '@_widgets/sidebar'
import TerminalInput from '@_widgets/terminal-input'
import { CommandPalette } from '@_widgets/command-palette'
import Footer from '@_widgets/footer'
import styles from './DefaultLayout.module.scss'
import { classNames } from '@_shared/lib/classNames/classNames'

interface DefaultLayoutProps {
    children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    const [booted, setBooted] = useState(false)

    return (
        <>
            <div className="viewport-glare" />
            <div className="scanlines" />
            {!booted && <AppLoading onDone={() => setBooted(true)} />}
            <div className={classNames(styles.default, { [styles.hidden]: !booted }, [])}>
                <Header />

                <div className={styles.content}>
                    <Sidebar className={styles.desktopOnly} />
                    <HorizontalTabs className={styles.horizontalTabs} />

                    <div className={styles.mainWrapper}>
                        <main className={styles.main}>{children}</main>
                        <TerminalInput className={styles.desktopOnly} />
                    </div>
                </div>

                <CommandPalette />
                <Footer className={styles.notMobileOnly} />
            </div>
        </>
    )
}
