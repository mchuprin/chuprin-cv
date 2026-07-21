import { classNames } from '@_shared/lib/classNames/classNames';
import styles from './Contact.module.scss';

interface ContactProps {
    className?: string
}

export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.Contact, {}, [className])}>
            Contact
        </div>
    );
};
