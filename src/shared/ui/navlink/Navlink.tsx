'use client'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Navlink.module.scss'

interface NavlinkProps {
    className?: string
    label: string
    isActive?: boolean
    onClick?: () => void
}

export const Navlink = ({
    className,
    label,
    isActive = false,
    onClick: onClickProp
}: NavlinkProps) => {
    const onClick = () => {
        onClickProp?.()
    }

    return (
        <button
            type="button"
            className={classNames(styles.Navlink, { [styles.active]: isActive }, [className])}
            onClick={onClick}
        >
            <span className={styles.indicator}>&#9654;</span>
            {label}
        </button>
    )
}
