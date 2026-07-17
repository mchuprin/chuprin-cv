import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
})

export type Locale = (typeof routing.locales)[number]
