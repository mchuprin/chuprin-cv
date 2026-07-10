'use client'
import { classNames } from '@_shared/lib/classNames/classNames'
import styles from './TerminalInput.module.scss'
import { useState } from 'react'

interface TerminalInputProps {
    className?: string
}

export const TerminalInput = ({ className }: TerminalInputProps) => {
    const [text, setText] = useState('')
    return (
        <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            className={classNames(styles.TerminalInput, {}, [className])}
        ></input>
    )
}
