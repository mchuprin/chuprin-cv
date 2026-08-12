import { classNames } from '@_shared/lib/classNames/classNames'
import TerminalSection from '@_shared/ui/terminal-section'
import { Button } from '@_shared/ui/button'
import styles from './Contact.module.scss'
import { CONTACT_LINKS } from '../model/constants'
import { DownloadButton } from '@_entities/cv'

interface ContactProps {
    className?: string
}

export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames('t-content', {}, [className])}>
            <TerminalSection text="contact">
                <div className={styles.wrapper}>
                    <div>
                        {CONTACT_LINKS.map(({ label, value }) => (
                            <div key={label} className="t-row">
                                <span className="t-label">{label}</span>
                                <span className="t-value">{value}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.links}>
                        {CONTACT_LINKS.map(({ label, href }) => (
                            <Button
                                key={label}
                                href={href}
                                variant="cyan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.action}
                            >
                                ↗ {label}
                            </Button>
                        ))}
                    </div>

                    <DownloadButton className={styles.download} />
                </div>
            </TerminalSection>
        </div>
    )
}
