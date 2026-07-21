'use client'
import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface PaletteContextType {
    isOpen: boolean
    open: () => void
    toggle: () => void
    close: () => void
}

const PaletteContext = createContext<PaletteContextType>({
    isOpen: false,
    open: () => {},
    toggle: () => {},
    close: () => {},
})

export const PaletteProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    const open = useCallback(() => setIsOpen(true), [])
    const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
    const close = useCallback(() => setIsOpen(false), [])

    return (
        <PaletteContext.Provider value={{ isOpen, open, toggle, close }}>
            {children}
        </PaletteContext.Provider>
    )
}

export const usePalette = () => useContext(PaletteContext)
