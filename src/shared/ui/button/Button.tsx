import { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Button.module.scss'

type ButtonVariant = 'default' | 'green'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: ButtonVariant
}

export const Button = ({ children, className, variant = 'default', ...rest }: ButtonProps) => {
    return (
        <button className={classNames(styles.btn, { [styles[variant]]: true }, [className])} {...rest}>
            {children}
        </button>
    )
}
