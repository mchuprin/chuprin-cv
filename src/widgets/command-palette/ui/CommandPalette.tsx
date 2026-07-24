'use client'
import { useState, useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { Overlay } from '@_shared/ui/overlay'
import Input from '@_shared/ui/input'
import { AVAILABLE_COMMANDS } from '@_shared/model/constants'
import { SectionKey } from '@_shared/model/types'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import { usePalette } from '@_shared/lib/contexts/palette'
import styles from './CommandPalette.module.scss'

export const CommandPalette = () => {
    const { isOpen, toggle, close } = usePalette()
    const { addSection } = useActiveComponents()
    const t = useTranslations('help')
    const [command, setCommand] = useState('')
    const [activeIndex, setActiveIndex] = useState(-1)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault()
                toggle()
            }
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [toggle])

    const onCloseDialog = useCallback(() => {
        close()
        setCommand('')
        setActiveIndex(-1)
    }, [close])

    const handleSelect = useCallback(
        (cmd: SectionKey) => {
            addSection(cmd)
            onCloseDialog()
        },
        [addSection, onCloseDialog]
    )

    const handleInputKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault()
                const next = Math.min(activeIndex + 1, AVAILABLE_COMMANDS.length - 1)
                setActiveIndex(next)
                setCommand(AVAILABLE_COMMANDS[next])
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                const prev = Math.max(activeIndex - 1, -1)
                setActiveIndex(prev)
                setCommand(prev === -1 ? '' : AVAILABLE_COMMANDS[prev])
            } else if (e.key === 'Enter' && activeIndex >= 0) {
                e.preventDefault()
                handleSelect(AVAILABLE_COMMANDS[activeIndex])
            }
        },
        [activeIndex, handleSelect]
    )

    const handleInputChange = useCallback((value: string) => {
        setCommand(value)
    }, [])

    const handleOnClick = (index: number) => {
        setActiveIndex(index)
        setCommand(AVAILABLE_COMMANDS[index])
    }

    return (
        <Overlay isOpen={isOpen} onClose={onCloseDialog}>
            <div
                className={styles.palette}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') onCloseDialog()
                }}
                role="dialog"
                tabIndex={-1}
            >
                <div className={styles.searchWrapper}>
                    <span className="prompt">&#36;</span>
                    <Input
                        value={command}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        className={styles.input}
                    />
                </div>
                <div className={styles.list}>
                    {AVAILABLE_COMMANDS.map((cmd, index) => (
                        <button
                            key={cmd}
                            type="button"
                            className={`${styles.item} ${index === activeIndex ? styles.itemActive : ''}`}
                            onClick={() => handleOnClick(index)}
                        >
                            <span className={styles.name}>{t(`commands.${cmd}`)}</span>
                            <span className={styles.description}>{t(`commandsDesc.${cmd}`)}</span>
                        </button>
                    ))}
                </div>
                <div className={styles.footer}>
                    <span>↑↓ to navigate</span>
                    <span>Enter to run</span>
                    <span>ESC to close</span>
                </div>
            </div>
        </Overlay>
    )
}
