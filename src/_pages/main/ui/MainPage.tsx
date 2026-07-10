'use client'
import Projects from '@_entities/projects'
import Skills from '@_entities/skills'
import Whoami from '@_entities/whoami'
import Experience from '@_entities/experience'
import { AvailablesSections } from '@/shared/constants'
import { useActiveComponents } from '@/shared/lib/activeComponents'
import { ComponentType } from 'react'
import TerminalInput from '@_widgets/terminal-input'
import styles from './MainPage.module.scss'

interface MainPageProps {
    className?: string
}

const componentsMap: Record<AvailablesSections, ComponentType> = {
    whoami: Whoami,
    projects: Projects,
    experience: Experience,
    skills: Skills,
    contact: () => <div>Contact</div>,
    help: () => <div>Help</div>
}

export const MainPage = (props: MainPageProps) => {
    const { sections } = useActiveComponents()

    return (
        <div className={styles.main}>
            <div className={styles.sections}>
                {sections.map((name) => {
                    const Component = componentsMap[name]
                    return <Component key={name} />
                })}
            </div>
            <TerminalInput />
        </div>
    )
}
