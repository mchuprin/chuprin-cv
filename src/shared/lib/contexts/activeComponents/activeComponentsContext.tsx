'use client'
import { SectionKey } from '@_shared/model/types'
import { commandPatterns, clearPattern } from '@_shared/model/constants'
import { createContext, ReactNode, useContext, useState } from 'react'

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
    const [sections, setSections] = useState<Section[]>([{ id: crypto.randomUUID(), name: 'help' }])
    const [lastSection, setLastSection] = useState<SectionKey | ''>('')

    const addSection = (name: SectionKey) => {
        if (name !== lastSection) {
            setSections((prev) => [...prev, { id: crypto.randomUUID(), name }])
            setLastSection(name)
        }
    }

    const addUnknownCommand = (command: string) => {
        setSections((prev) => [
            ...prev,
            { id: crypto.randomUUID(), name: 'unknown', command }
        ])
    }

    const selectSection = (name: SectionKey) => {
        setSections([{ id: crypto.randomUUID(), name }])
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
        setSections([{ id: crypto.randomUUID(), name: 'help' }])
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
