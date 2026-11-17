import { INFO } from '@_entities/whoami'
import { CONTACT_LINKS } from '@_entities/contact'
import { EXPERIENCE_DATA } from '@_entities/experience'
import { SKILLS_DATA } from '@_entities/skills'
import { SITE_URL } from '@_shared/model/constants'
import type { Locale } from '@_shared/model/types'

export function buildPersonJsonLd(locale: Locale) {
    const isEn = locale === 'en'
    const name = INFO.find(({ label }) => label === 'Name')
    const [currentJob] = EXPERIENCE_DATA
    const email = CONTACT_LINKS.find(({ href }) => href.startsWith('mailto:'))

    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: isEn ? name?.value : name?.valueRu,
        jobTitle: isEn ? currentJob.role : currentJob.roleRu,
        worksFor: { '@type': 'Organization', name: currentJob.company },
        url: `${SITE_URL}/${locale}/`,
        email: email?.value,
        sameAs: CONTACT_LINKS.filter(({ href }) => href.startsWith('https://')).map(
            ({ href }) => href
        ),
        knowsAbout: SKILLS_DATA.flatMap(({ items }) => items)
    }
}
