import type { Locale } from '@_shared/model/types'
import { buildPersonJsonLd } from '../lib/buildPersonJsonLd'

interface PersonJsonLdProps {
    locale: Locale
}

export const PersonJsonLd = ({ locale }: PersonJsonLdProps) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildPersonJsonLd(locale)).replace(/</g, '\\u003c')
        }}
    />
)
