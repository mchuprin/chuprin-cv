'use client'
import { ReactNode } from 'react'
import Header, { TabletHeader } from '@_widgets/header'
import { HorizontalTabs } from '@_widgets/horizontal-tabs'
import Sidebar from '@_widgets/sidebar'
import TerminalInput from '@_widgets/terminal-input'
import { CommandPalette } from '@_widgets/command-palette'
import Footer from '@_widgets/footer'
import styles from './DefaultLayout.module.scss'

interface DefaultLayoutProps {
    children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className={styles.default}>
            <div className="viewport-glare" />
            <div className="scanlines" />

            <Header className={styles.desktopOnly} />
            <TabletHeader className={styles.tabletOnly} />

            <div className={styles.content}>
                <HorizontalTabs className={styles.tabletOnly} />
                <Sidebar className={styles.desktopOnly} />

                <div className={styles.mainWrapper}>
                    <main className={styles.main}>{children}</main>
                    <TerminalInput className={styles.desktopOnly} />
                </div>
            </div>

            <CommandPalette />
            <Footer />
        </div>
    )
}
