import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Button.module.scss'

type ButtonVariant = 'default' | 'green' | 'cyan'

interface ButtonBaseProps {
    children: ReactNode
    variant?: ButtonVariant
    className?: string
    disabled?: boolean
}

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
}

type ButtonAsLink = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export const Button = ({ children, className, variant = 'default', disabled, ...rest }: ButtonProps) => {
    const classes = classNames(styles.btn, { [styles[variant]]: true, [styles.disabled]: disabled }, [className])

    if ('href' in rest && rest.href !== undefined) {
        const { href, ...anchorRest } = rest
        return (
            <a href={href} className={classes} {...anchorRest}>
                {children}
            </a>
        )
    }

    return (
        <button className={classes} disabled={disabled} {...rest}>
            {children}
        </button>
    )
}
