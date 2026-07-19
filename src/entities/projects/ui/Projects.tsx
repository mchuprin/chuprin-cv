import { classNames } from '@_shared/lib/classNames/classNames'
import CommandLine from '@_shared/ui/command-line'
import { PROJECTS, STATUS_COLOR } from '../model/constants'
import styles from './Projects.module.scss'

interface ProjectsProps {
    className?: string
}

export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className={classNames('t-content', {}, [className])}>
            <CommandLine text="projects">
                <div className={styles.total}>total {PROJECTS.length} directories</div>
                <div className={styles.list}>
                    {PROJECTS.map((p) => (
                        <div key={p.name} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.permissions}>drwxr-xr-x</span>
                                <span className={styles.name}>{p.name}/</span>
                                <span className={styles.meta}>{p.lang} · {p.year}</span>
                                <span className={styles.status} style={{ color: STATUS_COLOR[p.status], borderColor: `${STATUS_COLOR[p.status]}44` }}>
                                    {p.status}
                                </span>
                                <span className={styles.stars}>★ {p.stars}</span>
                            </div>
                            <p className={styles.desc}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </CommandLine>
        </div>
    )
}
