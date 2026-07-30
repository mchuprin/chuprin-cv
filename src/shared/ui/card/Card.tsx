import { ReactNode } from 'react'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Card.module.scss'

interface CardProps {
    children: ReactNode
    className?: string
}

export const Card = ({ children, className }: CardProps) => (
    <div className={classNames(styles.card, {}, [className])}>
        {children}
    </div>
)
