'use client'
import Projects from '@_entities/projects'
import Skills from '@_entities/skills'
import Whoami from '@_entities/whoami'
import Experience from '@_entities/experience'
import Help from '@_entities/help'
import { AvailablesCommands } from '@/shared/types'
import { useActiveComponents } from '@/shared/lib/activeComponents'
import { ComponentType } from 'react'
import TerminalInput from '@_widgets/terminal-input'
import styles from './MainPage.module.scss'

interface MainPageProps {
    className?: string
}

const componentsMap: Record<AvailablesCommands, ComponentType> = {
    whoami: Whoami,
    projects: Projects,
    experience: Experience,
    skills: Skills,
    contact: () => <div>Contact</div>,
    help: Help
}

export const MainPage = (props: MainPageProps) => {
    const { sections } = useActiveComponents()

    return (
        <div className={styles.main}>
            <div className={styles.sections}>
                {sections.map((item) => {
                    const Component = componentsMap[item.name]
                    return <Component key={item.id} />
                })}
            </div>
            <TerminalInput />
        </div>
    )
}
