'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './TerminalInput.module.scss'
import { useState } from 'react'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import { useHistoryNavigation } from '@_shared/lib/hooks'
import Input from '@_shared/ui/input'

interface TerminalInputProps {
    className?: string
}

export const TerminalInput = ({ className }: TerminalInputProps) => {
    const [command, setCommand] = useState('')
    const { processCommand } = useActiveComponents()
    const { addToHistory, navigateUp, navigateDown, resetIndex } = useHistoryNavigation<string>()

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
            addToHistory(cmd)
            processCommand(cmd)
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
