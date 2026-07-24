'use client'
import { SectionKey } from '@_shared/model/types'
import { commandPatterns, clearPattern } from '@_shared/model/constants'
import { createContext, ReactNode, useCallback, useContext, useRef, useState, useId } from 'react'

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

    const [sections, setSections] = useState<Section[]>([{ id: `${baseId}-0`, name: 'help' }])
    const [lastSection, setLastSection] = useState<SectionKey | ''>('')

    const addSection = (name: SectionKey) => {
        if (name !== lastSection) {
            setSections((prev) => [...prev, { id: generateId(), name }])
            setLastSection(name)
        }
    }

    const addUnknownCommand = (command: string) => {
        setSections((prev) => [
            ...prev,
            { id: generateId(), name: 'unknown', command }
        ])
    }

    const selectSection = (name: SectionKey) => {
        setSections([{ id: generateId(), name }])
        setLastSection(name)
    }

    const processCommand = (raw: string) => {
        const cmd = raw.trim().toLowerCase()

        if (clearPattern.test(cmd)) {
            return clear()
        }

        const match = commandPatterns.find(({ pattern }) => pattern.test(cmd))

        if (match) {
            addSection(match.name)
        } else {
            addUnknownCommand(cmd)
        }
    }

    const clear = () => {
        setLastSection('')
        setSections([{ id: generateId(), name: 'help' }])
    }

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
