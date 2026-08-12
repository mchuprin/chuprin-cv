import { classNames } from '@_shared/lib/classNames/classNames'
import TerminalSection from '@_shared/ui/terminal-section'
import { Card } from '@_shared/ui/card'
import { Button } from '@_shared/ui/button'
import { PROJECTS } from '../model/constants'
import styles from './Projects.module.scss'
import { type Locale, useLocale } from 'next-intl'

interface ProjectsProps {
    className?: string
}

export const Projects = ({ className }: ProjectsProps) => {
    const locale = useLocale() as Locale

    return (
        <div className={classNames('t-content', {}, [className])}>
            <TerminalSection text="projects">
                <div className={styles.total}>total {PROJECTS.length} directories</div>
                <div className={styles.list}>
                    {PROJECTS.map((p) => (
                        <Card key={p.name}>
                            <div className={styles.cardHeader}>
                                <span className={styles.permissions}>drwxr-xr-x</span>
                                <span className={classNames(styles.name, {}, ['t-value'])}>{p.name}/</span>
                                <span className={styles.meta}>
                                    {p.lang} · {p.year}
                                </span>
                            </div>
                            <p className={styles.desc}>{locale === 'en' ? p.desc : p.descRu}</p>
                            <div className={styles.actions}>
                                {p.github ? (
                                    <Button
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ⌥ GitHub
                                    </Button>
                                ) : (
                                    <Button disabled>private repo</Button>
                                )}

                                {p.demo ? (
                                    <Button
                                        href={p.demo}
                                        variant="cyan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ↗ Live demo
                                    </Button>
                                ) : (
                                    <Button disabled>no demo</Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </TerminalSection>
        </div>
    )
}
