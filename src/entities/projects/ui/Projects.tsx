import { classNames } from '@_shared/lib/classNames/classNames'
import CommandLine from '@_shared/ui/command-line'
import styles from './Projects.module.scss'

interface ProjectsProps {
    className?: string
}

interface Project {
    name: string
    lang: string
    year: number
    desc: string
    descRu: string
    status: 'ACTIVE' | 'STABLE' | 'BETA'
    stars: number
}

const STATUS_COLOR: Record<string, string> = {
    ACTIVE: '#00d9ff',
    STABLE: '#39ff14',
    BETA: '#ff006e',
}

const PROJECTS: Project[] = [
    { name: 'cv-portfolio', lang: 'TypeScript', year: 2025, desc: 'Terminal-themed developer portfolio built with Next.js, featuring cyberpunk UI and command-line interface.', descRu: 'Портфолио разработчика в стиле терминала на Next.js с киберпанок интерфейсом и командной строкой.', status: 'ACTIVE', stars: 0 },
    { name: 'void-shell', lang: 'Rust', year: 2025, desc: 'Minimal async shell with zero-copy IPC and sandboxed plugin execution.', descRu: 'Минималистичный асинхронный шелл с zero-copy IPC и песочницей для плагинов.', status: 'STABLE', stars: 312 },
    { name: 'phantom-proxy', lang: 'Go', year: 2025, desc: 'Transparent traffic proxy with real-time ML anomaly detection pipeline.', descRu: 'Прозрачный трафик-прокси с пайплайном обнаружения аномалий ML в реальном времени.', status: 'ACTIVE', stars: 1203 },
    { name: 'darkframe', lang: 'TypeScript', year: 2024, desc: 'Zero-dependency UI framework built on native browser APIs with compiler-time CSS.', descRu: 'UI-фреймворк без зависимостей, построенный на нативных API браузера с CSS на этапе компиляции.', status: 'BETA', stars: 589 },
]

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
