'use client'
import { SectionKey } from '@_shared/model/types'
import { createContext, ReactNode, useContext, useState } from 'react'

export interface Section {
    id: string
    name: SectionKey
}

interface ActiveComponentsContextType {
    sections: Section[]
    lastSection: SectionKey | ''
    addSection: (name: SectionKey) => void
    setLastSection: (section: SectionKey) => void
    selectSection: (section: SectionKey) => void
    clear: () => void
}

const ActiveComponentsContext = createContext<ActiveComponentsContextType>({
    sections: [],
    lastSection: '',
    addSection: () => {},
    setLastSection: () => {},
    selectSection: () => {},
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

    const selectSection = (name: SectionKey) => {
        setSections([{ id: crypto.randomUUID(), name }])
    }

    const clear = () => {
        setLastSection('')
        setSections([{ id: crypto.randomUUID(), name: 'help' }])
    }

    return (
        <ActiveComponentsContext.Provider
            value={{ sections, lastSection, addSection, setLastSection, selectSection, clear }}
        >
            {children}
        </ActiveComponentsContext.Provider>
    )
}

export const useActiveComponents = () => useContext(ActiveComponentsContext)
