import { Locale } from '@_shared/model/types'
import { BASE_PATH } from '@_shared/model/constants'
import type { CvFile } from './types'

export const CV_FILES: Record<Locale, CvFile> = {
    ru: { path: `${BASE_PATH}/cv/Maksim_Chuprin_CV_ru.pdf`, downloadName: 'Максим_Чуприн_CV.pdf' },
    en: { path: `${BASE_PATH}/cv/Maksim_Chuprin_CV.pdf`, downloadName: 'Maksim_Chuprin_CV.pdf' }
}
