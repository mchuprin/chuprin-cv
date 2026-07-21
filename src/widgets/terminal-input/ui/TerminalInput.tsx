'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './TerminalInput.module.scss'
import { useState } from 'react'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import { clearPattern, commandPatterns } from '../constants'
import { useHistoryNavigation } from '@_shared/lib/hooks'
import Input from '@_shared/ui/input'
import { SectionKey } from '@_shared/model/types'

interface TerminalInputProps {
    className?: string
}

export const TerminalInput = ({ className }: TerminalInputProps) => {
    const [command, setCommand] = useState('')
    const { addSection, clear } = useActiveComponents()
    const [history, setHistory] = useState<SectionKey[]>([])

    const { navigateUp, navigateDown, resetIndex } = useHistoryNavigation(history)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault()
            const item = navigateUp()
            if (item) setCommand(item)
            return
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault()
            const item = navigateDown()
            if (item) {
                setCommand(item)
            } else {
                setCommand('')
            }
            return
        }

        resetIndex()

        if (event.key === 'Enter') {
            const cmd = command.trim().toLowerCase()

            if (clearPattern.test(cmd)) {
                setCommand('')
                return clear()
            }

            const match = commandPatterns.find(({ pattern }) => pattern.test(cmd))

            if (match) {
                setHistory((prev) => [...prev, match.name])
                addSection(match.name)
            }

            setCommand('')
        }
    }

    return (
        <div className={classNames(styles.terminal, {}, [className])}>
            <span className="prompt">&#36;</span>
            <Input
                value={command}
                onChange={(text) => setCommand(text)}
                onKeyDown={handleKeyDown}
                className={styles.input}
            />
        </div>
    )
}
