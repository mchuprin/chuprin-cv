interface HeaderProps {
  className?: string
}
import styles from './Header.module.scss'

export const Header = ({ className }: HeaderProps) => {
  return <header className={styles.header}>Header</header>
}
