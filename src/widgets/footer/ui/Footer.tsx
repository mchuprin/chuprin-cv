import styles from './Footer.module.scss'

interface FooterProps {
    className?: string
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={styles.footer}>
            Footer
        </footer>
    );
};
