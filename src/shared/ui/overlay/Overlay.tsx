'use client'
import { ReactNode, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Overlay.module.scss'

interface OverlayProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    className?: string
}

export const Overlay = ({ isOpen, onClose, children, className }: OverlayProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    if (!isOpen) return null

    return createPortal(
        <div
            className={classNames(styles.overlay, {}, [className])}
            onClick={onClose}
            tabIndex={-1}
        >
            {children}
        </div>,
        document.body
    )
}
