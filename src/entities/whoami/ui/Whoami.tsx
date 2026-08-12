import { Locale, useLocale } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import TerminalSection from '@_shared/ui/terminal-section'
import { INFO, BIO } from '../model/constants'
import styles from './Whoami.module.scss'

interface WhoamiProps {
    className?: string
}

export const Whoami = ({ className }: WhoamiProps) => {
    const locale = useLocale() as Locale
    const isEn = locale === 'en'

    return (
        <div className={classNames('t-content', {}, [className])}>
            <TerminalSection text="whoami">
                {INFO.map(({ label, labelRu, value, valueRu, status }) => (
                    <div key={label} className="t-row">
                        <span className="t-label">{isEn ? label : labelRu}</span>
                        {/* className={status ? 't-status' : 't-value'} */}
                        <span className={classNames(styles.desc, {'t-value': !status, 't-status': status}, [])}>
                            {isEn ? value : valueRu}
                        </span>
                    </div>
                ))}
                <div className={classNames(styles.summary, {}, ['t-value'])}>{isEn ? BIO.en : BIO.ru}</div>
            </TerminalSection>
        </div>
    )
}
