import { Locale, useLocale } from 'next-intl'
import { classNames } from '@_shared/lib/classNames/classNames'
import TerminalSection from '@_shared/ui/terminal-section'
import { Card } from '@_shared/ui/card'
import { EXPERIENCE_DATA, STACK_LABEL } from '../model/constants'
import styles from './Experience.module.scss'

interface ExperienceProps {
    className?: string
}

export const Experience = ({ className }: ExperienceProps) => {
    const locale = useLocale() as Locale

    return (
        <div className={classNames('t-content', {}, [className])}>
            <TerminalSection text="experience">
                <div className={styles.list}>
                    {EXPERIENCE_DATA.map((job) => (
                        <Card key={job.company}>
                            <div className={styles.job}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.role}>
                                        {locale === 'en' ? job.role : job.roleRu}
                                    </span>
                                    <span className={styles.period}>
                                        {locale === 'en' ? job.period : job.periodRu}
                                    </span>
                                    <span className={styles.location}>
                                        {locale === 'en' ? job.location : job.locationRu}
                                    </span>
                                </div>
                                <p className={classNames(styles.company, {}, ['t-value'])}>{job.company}</p>
                                <p className='t-value'>
                                    {locale === 'en' ? job.desc : job.descRu}
                                </p>
                                <ul className={styles.achievements}>
                                    {(locale === 'en' ? job.achievements : job.achievementsRu).map(
                                        (achievement) => (
                                            <li key={achievement} className={classNames(styles.achievement, {}, ['t-value'])}>
                                                {achievement}
                                            </li>
                                        )
                                    )}
                                </ul>

                                <div className={classNames(styles.stack, {}, ['t-value'])}>
                                    <span className={styles.stackLabel}>
                                        {STACK_LABEL[locale] || STACK_LABEL.en}:
                                    </span>{' '}
                                    {job.stack}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </TerminalSection>
        </div>
    )
}
