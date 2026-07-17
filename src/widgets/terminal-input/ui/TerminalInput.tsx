'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './TerminalInput.module.scss'
import { useState, useRef } from 'react'
import { AvailablesCommands } from '@_shared/types'
import { useActiveComponents } from '@_shared/lib/activeComponents'
import { clearPattern, commandPatterns } from '../constants'
import { useCustomCursor, useHistoryNavigation } from '@_shared/lib/hooks'

interface TerminalInputProps {
    className?: string
}

export const TerminalInput = ({ className }: TerminalInputProps) => {
    const [command, setCommand] = useState('')
    const { addSection, clear } = useActiveComponents()
    const inputRef = useRef<HTMLInputElement>(null)
    const [history, setHistory] = useState<AvailablesCommands[]>([])

    const { measureRef, caretLeft, cursorPos, setCursorPos } = useCustomCursor({
        inputRef,
        value: command,
    })

    const { navigateUp, navigateDown, resetIndex } = useHistoryNavigation(history)

    const updateCommand = (text: string, newPos: number) => {
        setCommand(text)
        setCursorPos(newPos)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPos = event.target.selectionStart ?? event.target.value.length
        updateCommand(event.target.value, newPos)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            setCursorPos((prev) => Math.max(0, prev - 1))
            return
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            setCursorPos((prev) => Math.min(command.length, prev + 1))
            return
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault()
            const item = navigateUp()
            if (item) updateCommand(item, item.length)
            return
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault()
            const item = navigateDown()
            if (item) {
                updateCommand(item, item.length)
            } else {
                updateCommand('', 0)
            }
            return
        }

        resetIndex()

        if (event.key === 'Enter') {
            const cmd = command.trim().toLowerCase()

            if (clearPattern.test(cmd)) {
                updateCommand('', 0)
                return clear()
            }

            const match = commandPatterns.find(({ pattern }) => pattern.test(cmd))

            if (match) {
                setHistory((prev) => [...prev, match.name])
                addSection(match.name)
            }

            updateCommand('', 0)
        }
    }

    return (
        <div className={classNames(styles.terminal, {}, [className])}>
            <span className='prompt'>&#36;</span>
            <div
                className={styles.inputWrapper}
                style={{ '--caret-left': `${caretLeft}px` } as React.CSSProperties}
            >
                <span ref={measureRef} className={styles.measure}>
                    {command.slice(0, cursorPos)}
                </span>
                <span className={styles.inputDisplay}>{command}</span>
                <span className={styles.caret} />
                {!command && <span className={styles.placeholder}>type a command...</span>}
                <input
                    ref={inputRef}
                    value={command}
                    onChange={handleOnChange}
                    className={styles.input}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    )
}
