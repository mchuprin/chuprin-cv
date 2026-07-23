'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Navlink.module.scss'

type NavlinkVariant = 'vertical' | 'horizontal'

interface NavlinkProps {
    className?: string
    label: string
    isActive?: boolean
    variant?: NavlinkVariant
    onClick?: () => void
}

export const Navlink = ({
    className,
    label,
    isActive = false,
    variant = 'vertical',
    onClick: onClickProp
}: NavlinkProps) => {
    const onClick = () => {
        onClickProp?.()
    }

    return (
        <button
            type="button"
            className={classNames(
                styles.Navlink,
                { [styles.active]: isActive, [styles.horizontal]: variant === 'horizontal' },
                [className]
            )}
            onClick={onClick}
        >
            <span className={styles.indicator}>&#9654;</span>
            {label}
        </button>
    )
}
