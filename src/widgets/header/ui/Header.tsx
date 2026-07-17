import { classNames } from '@_shared/lib/classNames/classNames'
import LocaleSwitcher from '@_shared/ui/locale-switcher'
import styles from './Header.module.scss'

const ASCII_LOGO = ` 
 ██████╗██╗  ██╗██╗   ██╗██████╗ ██████╗ ██╗███╗   ██╗     ██████╗██╗   ██╗
██╔════╝██║  ██║██║   ██║██╔══██╗██╔══██╗██║████╗  ██║    ██╔════╝██║   ██║
██║     ███████║██║   ██║██████╔╝██████╔╝██║██╔██╗ ██║    ██║     ██║   ██║
██║     ██╔══██║██║   ██║██╔═══╝ ██╔══██╗██║██║╚██╗██║    ██║     ╚██╗ ██╔╝
╚██████╗██║  ██║╚██████╔╝██║     ██║  ██║██║██║ ╚████║    ╚██████╗ ╚████╔╝ 
 ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝     ╚═════╝  ╚═══╝  `

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
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
                <button className={styles.paletteBtn}>
                    <span>⌘K</span>
                    <span className={styles.paletteLabel}>Command palette</span>
                </button>
                <div className={styles.time}>
                    {new Date().toISOString().slice(0, 19).replace('T', ' ')} UTC
                </div>
            </div>
        </header>
    )
}
