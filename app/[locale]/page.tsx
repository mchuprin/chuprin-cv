import { MainPage, PersonJsonLd } from '@_pages/main'
import type { Locale } from '@_shared/model/types'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params

    return (
        <>
            <PersonJsonLd locale={locale as Locale} />
            <MainPage />
        </>
    )
}
