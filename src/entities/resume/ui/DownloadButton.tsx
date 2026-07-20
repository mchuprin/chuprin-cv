'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@_shared/ui/button'
import { Files } from '../model/constants'
import { type Locale } from '@_shared/model/types'

interface DownloadButtonProps {
    className?: string
}

export const DownloadButton = ({ className }: DownloadButtonProps) => {
    const t = useTranslations('resume')
    const locale = useLocale() as Locale

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = `/cv/${Files[locale]}`
        link.download = Files[locale]
        link.click()
        link.remove()
    }

    return (
        <Button variant="green" className={className} onClick={handleDownload}>
            ↓ {t('button')}
        </Button>
    )
}
