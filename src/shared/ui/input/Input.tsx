'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import { useRef } from 'react'
import { useCustomCursor } from '@_shared/lib/hooks'

interface InputProps {
    value: string
    onChange: (value: string, cursorPos: number) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

export const Input = ({ value, onChange, onKeyDown, placeholder = 'type a command...', className }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const { measureRef, caretLeft, cursorPos, setCursorPos } = useCustomCursor({
        inputRef,
        value,
    })

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            {!value && <span className={styles.placeholder}>{placeholder}</span>}
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
