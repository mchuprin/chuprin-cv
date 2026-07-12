'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './TerminalInput.module.scss'
import { useState, useRef, useEffect, useCallback } from 'react'
import { AvailablesCommands } from '@/shared/types'
import { useActiveComponents } from '@/shared/lib/activeComponents'

interface TerminalInputProps {
    className?: string
}

const commandPatterns: { pattern: RegExp; name: AvailablesCommands | 'clear' }[] = [
    { pattern: /^whoami$/, name: 'whoami' },
    { pattern: /^projects$/, name: 'projects' },
    { pattern: /^(skills|neofetch)$/, name: 'skills' },
    { pattern: /^experience$/, name: 'experience' },
    { pattern: /^(contact|sudo\s+hire-me)$/, name: 'contact' },
    { pattern: /^help$/, name: 'help' },
    { pattern: /^clear$/, name: 'clear' }
    // { pattern: /^matrix$/, name: 'matrix' },
    // { pattern: /^coffee$/, name: 'coffee' },
]

export const TerminalInput = ({ className }: TerminalInputProps) => {
    const [text, setText] = useState('')
    const [cursorPos, setCursorPos] = useState(0)
    const { addSection, clear } = useActiveComponents()
    const inputRef = useRef<HTMLInputElement>(null)
    const measureRef = useRef<HTMLSpanElement>(null)
    const [caretLeft, setCaretLeft] = useState(0)

    const measureCaret = useCallback(() => {
        if (measureRef.current) {
            setCaretLeft(measureRef.current.offsetWidth)
        }
    }, [])

    const updateCursorPos = () => {
        if (inputRef.current) {
            setCursorPos(inputRef.current.selectionStart ?? 0)
            requestAnimationFrame(measureCaret)
        }
    }

    useEffect(() => {
        inputRef.current?.focus()
        requestAnimationFrame(measureCaret)
        const handleInteraction = () => {
            inputRef.current?.focus()
        }
        document.addEventListener('click', handleInteraction)
        return () => document.removeEventListener('click', handleInteraction)
    }, [measureCaret])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowUp') {
        }

        if (event.key === 'ArrowDown') {
        }

        if (event.key === 'Enter') {
            const cmd = text.trim().toLowerCase()
            const match = commandPatterns.find(({ pattern }) => pattern.test(cmd))

            if (match) {
                switch (match.name) {
                    case 'clear':
                        return clear()
                    default:
                        addSection(match.name)
                }
                console.log(`Command matched: ${match.name}`)
            } else {
                console.log(`Unknown command: ${cmd}`)
            }

            setText('')
            setCursorPos(0)
        }
    }

    return (
        <div className={classNames(styles.terminal, {}, [className])}>
            <span className='prompt'>&#36;</span>
            <div
                className={styles.inputWrapper}
                style={{ '--caret-left': `${caretLeft}px` } as React.CSSProperties}
            >
                <span ref={measureRef} className={styles.measure}>{text.slice(0, cursorPos)}</span>
                <span className={styles.inputDisplay}>{text}</span>
                <span className={styles.caret} />
                {!text && <span className={styles.placeholder}>type a command...</span>}
                <input
                    ref={inputRef}
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value)
                        setCursorPos(event.target.selectionStart ?? 0)
                        requestAnimationFrame(measureCaret)
                    }}
                    onSelect={updateCursorPos}
                    onKeyUp={updateCursorPos}
                    className={styles.input}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    )
}
