import { useSyncExternalStore } from 'react'

const DESKTOP_QUERY = '(min-width: 1024px)'
const TABLET_QUERY = '(min-width: 640px) and (max-width: 1023px)'

function subscribe(query: string) {
    return (callback: () => void) => {
        const mql = window.matchMedia(query)
        mql.addEventListener('change', callback)
        return () => mql.removeEventListener('change', callback)
    }
}

function getSnapshot(query: string) {
    return window.matchMedia(query).matches
}

function getServerSnapshot() {
    return false
}

export function useBreakpoint() {
    const isDesktop = useSyncExternalStore(
        subscribe(DESKTOP_QUERY),
        () => getSnapshot(DESKTOP_QUERY),
        () => getServerSnapshot()
    )

    const isTablet = useSyncExternalStore(
        subscribe(TABLET_QUERY),
        () => getSnapshot(TABLET_QUERY),
        () => getServerSnapshot()
    )

    return { isDesktop, isTablet, isMobile: !isDesktop && !isTablet }
}
