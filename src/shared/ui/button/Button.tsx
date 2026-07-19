import { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button className={classNames(styles.btn, {}, [className])} {...rest}>
            {children}
        </button>
    )
}
