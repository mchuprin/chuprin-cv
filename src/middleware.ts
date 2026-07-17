import createMiddleware from 'next-intl/middleware'
import { routing } from '@_shared/config/i18n/routing'

export default createMiddleware(routing)

export const config = {
    matcher: ['/', '/(en|ru)/:path*'],
}
