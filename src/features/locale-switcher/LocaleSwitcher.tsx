'use client'
import { usePathname, useRouter } from 'next/navigation'
import { routing } from '@_shared/config/i18n/routing'
import { Button } from '@_shared/ui/button'

export const LocaleSwitcher = () => {
    const pathname = usePathname()
    const router = useRouter()

    const currentLocale = pathname.split('/')[1] || routing.defaultLocale
    const nextLocale = currentLocale === 'ru' ? 'en' : 'ru'

    const switchLocale = () => {
        const segments = pathname.split('/')
        segments[1] = nextLocale
        router.push(segments.join('/'))
    }

    return (
        <Button type="button" onClick={switchLocale}>
            <span>{nextLocale.toUpperCase()}</span>
        </Button>
    )
}
