'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@_shared/ui/button'
import { CV_FILES } from '../model/constants'
import { type Locale } from '@_shared/model/types'

interface DownloadButtonProps {
  className?: string
}

export const DownloadButton = ({ className }: DownloadButtonProps) => {
  const t = useTranslations('resume')
  const locale = useLocale() as Locale
  const { path, downloadName } = CV_FILES[locale]

  return (
    <Button href={path} download={downloadName} variant="green" className={className}>
      ↓ {t('button')}
    </Button>
  )
}
