'use client'
import { useState, useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { Overlay } from '@_shared/ui/overlay'
import Input from '@_shared/ui/input'
import { SECTION_KEYS } from '@_shared/model/constants'
import { SectionKey } from '@_shared/model/types'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import { usePalette } from '@_shared/lib/contexts/palette'
import styles from './CommandPalette.module.scss'

export const CommandPalette = () => {
    const { isOpen, toggle, close } = usePalette()
    const { addSection } = useActiveComponents()
    const t = useTranslations('help')
    const [query, setQuery] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)

    const commands = Object.values(SECTION_KEYS)

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

    const handleSelect = useCallback(
        (cmd: SectionKey) => {
            addSection(cmd)
            close()
        },
        [addSection, close]
    )

    const handleInputKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault()
                setActiveIndex((prev) => Math.min(prev + 1, commands.length - 1))
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setActiveIndex((prev) => Math.max(prev - 1, 0))
            } else if (e.key === 'Enter' && commands.length > 0) {
                e.preventDefault()
                handleSelect(commands[activeIndex])
            }
        },
        [commands, activeIndex, handleSelect]
    )

    const handleInputChange = useCallback((value: string) => {
        setQuery(value)
    }, [])

    const onCloseDialog = () => {
        close()
        setQuery('')
        setActiveIndex(0)
    }

    return (
        <Overlay isOpen={isOpen} onClose={onCloseDialog}>
            <div
                className={styles.palette}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') close()
                }}
                role="dialog"
                tabIndex={-1}
            >
                <div className={styles.searchWrapper}>
                    <span className="prompt">&#36;</span>
                    <Input
                        value={query}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        placeholder={t('title')}
                        className={styles.input}
                    />
                </div>
                <div className={styles.list}>
                    {commands.map((cmd, index) => (
                        <button
                            key={cmd}
                            type="button"
                            className={`${styles.item} ${index === activeIndex ? styles.itemActive : ''}`}
                            onClick={() => handleSelect(cmd)}
                            onMouseEnter={() => setActiveIndex(index)}
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
