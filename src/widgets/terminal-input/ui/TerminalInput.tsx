'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './TerminalInput.module.scss'
import { useState } from 'react'
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
    { pattern: /^clear$/, name: 'clear' },
    // { pattern: /^matrix$/, name: 'matrix' },
    // { pattern: /^coffee$/, name: 'coffee' },
]

export const TerminalInput = ({ className }: TerminalInputProps) => {
    const [text, setText] = useState('')
    const { addSection, clear } = useActiveComponents()

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const cmd = text.trim().toLowerCase()
            const match = commandPatterns.find(({ pattern }) => pattern.test(cmd))

            if (match) {
                switch(match.name) {
                    case 'clear': return clear()
                    default: addSection(match.name)
                }
                console.log(`Command matched: ${match.name}`)
            } else {
                console.log(`Unknown command: ${cmd}`)
            }

            setText('')
        }
    }

    return (
        <div className={classNames(styles.terminal, {}, [className])}>
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
                className={styles.input}
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
            ></input>
        </div>
    )
}
