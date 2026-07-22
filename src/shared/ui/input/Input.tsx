'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import { useEffect, useRef, useState } from 'react'
import { useCustomCursor } from '@_shared/lib/hooks'
import { useTranslations } from 'next-intl'

interface InputProps {
    value: string
    onChange: (value: string, cursorPos: number) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

export const Input = ({ value, onChange, onKeyDown, placeholder = '', className }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const isUserInput = useRef(false)
    const t = useTranslations('input')
    const placeholderText = placeholder || t('placeholder')

    const { measureRef, caretLeft, cursorPos, setCursorPos } = useCustomCursor({
        inputRef,
        value
    })

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        isUserInput.current = true
        const newPos = event.target.selectionStart ?? event.target.value.length
        setCursorPos(newPos)
        onChange(event.target.value, newPos)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            setCursorPos((prev) => Math.max(0, prev - 1))
            return
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            setCursorPos((prev) => Math.min(value.length, prev + 1))
            return
        }

        onKeyDown?.(event)
    }

    useEffect(() => {
        if (!isUserInput.current) {
            setCursorPos(value.length)
        }
        isUserInput.current = false
    }, [value, setCursorPos])

    return (
        <div
            className={classNames(styles.inputWrapper, {}, [className])}
            style={{ '--caret-left': `${caretLeft}px` } as React.CSSProperties}
        >
            <span ref={measureRef} className={styles.measure}>
                {value.slice(0, cursorPos)}
            </span>
            <span className={styles.inputDisplay}>{value}</span>
            <span className={styles.caret} />
            {!value && <span className={styles.placeholder}>{placeholderText}</span>}
            <input
                ref={inputRef}
                value={value}
                onChange={handleOnChange}
                className={styles.input}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}
