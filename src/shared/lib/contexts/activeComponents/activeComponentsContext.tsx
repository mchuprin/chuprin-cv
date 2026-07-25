'use client'
import { SectionKey } from '@_shared/model/types'
import { commandPatterns, clearPattern } from '@_shared/model/constants'
import { createContext, ReactNode, useCallback, useContext, useRef, useState, useId } from 'react'
import { useBreakpoint } from '@_shared/lib/hooks'

export interface Section {
    id: string
    name: SectionKey
    command?: string
}

interface ActiveComponentsContextType {
    sections: Section[]
    lastSection: SectionKey | ''
    addSection: (name: SectionKey) => void
    addUnknownCommand: (command: string) => void
    setLastSection: (section: SectionKey) => void
    selectSection: (section: SectionKey) => void
    processCommand: (command: string) => void
    clear: () => void
}

const ActiveComponentsContext = createContext<ActiveComponentsContextType>({
    sections: [],
    lastSection: '',
    addSection: () => {},
    addUnknownCommand: () => {},
    setLastSection: () => {},
    selectSection: () => {},
    processCommand: () => {},
    clear: () => {}
})

interface ActiveComponentsProviderProps {
    children: ReactNode
}

export function ActiveComponentsProvider({ children }: ActiveComponentsProviderProps) {
    const baseId = useId()
    const counterRef = useRef(1)
    const generateId = useCallback(() => `${baseId}-${counterRef.current++}`, [baseId])

    const [sections, setSections] = useState<Section[]>([])
    const [lastSection, setLastSection] = useState<SectionKey | ''>('')

    const { isDesktop } = useBreakpoint()

    const selectSection = useCallback(
        (name: SectionKey) => {
            setSections([{ id: generateId(), name }])
            setLastSection(name)
        },
        [setSections, setLastSection, generateId]
    )

    const addSection = useCallback(
        (name: SectionKey) => {
            if (name !== lastSection) {
                setSections((prev) => [...prev, { id: generateId(), name }])
                setLastSection(name)
            }
        },
        [generateId, lastSection]
    )

    const addUnknownCommand = useCallback(
        (command: string) => {
            setSections((prev) => [...prev, { id: generateId(), name: 'unknown', command }])
        },
        [generateId]
    )


    const clear = useCallback(() => {
        setLastSection('')
        setSections([{ id: generateId(), name: 'help' }])
    }, [generateId])

    const processCommand = useCallback(
        (raw: string) => {
            const cmd = raw.trim().toLowerCase()

            if (clearPattern.test(cmd)) {
                return clear()
            }

            const match = commandPatterns.find(({ pattern }) => pattern.test(cmd))

            if (match) {
                if (isDesktop) {
                    addSection(match.name)
                } else {
                    selectSection(match.name)
                }
            } else {
                addUnknownCommand(cmd)
            }
        },
        [addSection, addUnknownCommand, clear, isDesktop, selectSection]
    )

    return (
        <ActiveComponentsContext.Provider
            value={{
                sections,
                lastSection,
                addSection,
                addUnknownCommand,
                setLastSection,
                selectSection,
                processCommand,
                clear
            }}
        >
            {children}
        </ActiveComponentsContext.Provider>
    )
}

export const useActiveComponents = () => useContext(ActiveComponentsContext)
