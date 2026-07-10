'use client'
import { AvailablesSections } from '@_shared/constants'
import { createContext, ReactNode, useContext, useState } from 'react'

interface ActiveComponentsContextType {
    sections: AvailablesSections[]
    lastSection: AvailablesSections | ''
    addSection: (section: AvailablesSections) => void
    setLastSection: (section: AvailablesSections) => void
}

const ActiveComponentsContext = createContext<ActiveComponentsContextType>({
    sections: [],
    lastSection: '',
    addSection: () => {},
    setLastSection: () => {}
})

interface ActiveComponentsProviderProps {
    children: ReactNode
}

export function ActiveComponentsProvider({ children }: ActiveComponentsProviderProps) {
    const [sections, setSections] = useState<AvailablesSections[]>(['help'])
    const [lastSection, setLastSection] = useState<AvailablesSections | ''>('')

    const addSection = (section: AvailablesSections) => {
        setSections((prev) => [...prev, section])
        setLastSection(section)
    }

    return (
        <ActiveComponentsContext.Provider
            value={{ sections, lastSection, addSection, setLastSection }}
        >
            {children}
        </ActiveComponentsContext.Provider>
    )
}

export const useActiveComponents = () => useContext(ActiveComponentsContext)
