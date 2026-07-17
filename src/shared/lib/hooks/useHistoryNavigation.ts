import { useRef, useCallback } from 'react'

export function useHistoryNavigation<T>(items: T[]) {
    const historyIndex = useRef(-1)

    const navigateUp = useCallback((): T | null => {
        if (items.length === 0) return null

        if (historyIndex.current < 0) {
            historyIndex.current = items.length - 1
        } else if (historyIndex.current > 0) {
            historyIndex.current = historyIndex.current - 1
        }

        return items[historyIndex.current]
    }, [items])

    const navigateDown = useCallback((): T | null => {
        if (items.length === 0) return null

        if (historyIndex.current === items.length - 1) {
            historyIndex.current = -1
            return null
        }

        historyIndex.current = historyIndex.current + 1
        return items[historyIndex.current]
    }, [items])

    const resetIndex = useCallback(() => {
        historyIndex.current = -1
    }, [])

    return { navigateUp, navigateDown, resetIndex }
}
