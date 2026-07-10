import Sidebar from '@_widgets/sidebar'
import { ReactNode } from 'react'
import styles from './DefalutLayout.module.scss'
import Footer from '@_widgets/footer'
import Header from '@_widgets/header'

interface DefaultLayoutProps {
    children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className={styles.default}>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}
