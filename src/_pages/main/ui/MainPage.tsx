'use client'
import Projects from '@_entities/projects'
import Skills from '@_entities/skills'
import Whoami from '@_entities/whoami'
import Experience from '@_entities/experience'
import Help from '@_entities/help'
import Contact from '@_entities/contact'
import { useActiveComponents } from '@/shared/lib/contexts/activeComponents'
import { ComponentType, useRef, useEffect } from 'react'
import TerminalInput from '@_widgets/terminal-input'
import { CommandPalette } from '@_widgets/command-palette'
import styles from './MainPage.module.scss'
import { AvailablesCommands } from '@_shared/model/types'

interface MainPageProps {
    className?: string
}

const componentsMap: Record<AvailablesCommands, ComponentType> = {
    whoami: Whoami,
    projects: Projects,
    experience: Experience,
    skills: Skills,
    contact: Contact,
    help: Help
}

export const MainPage = (props: MainPageProps) => {
    const { sections } = useActiveComponents()
    const sectionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = sectionsRef.current
        if (container) {
            const lastChild = container.lastElementChild
            if (lastChild) {
                lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' })
            }
        }
    }, [sections.length])

    return (
        <div className={styles.main}>
            <div className={styles.sections} ref={sectionsRef}>
                {sections.map((item) => {
                    const Component = componentsMap[item.name]
                    return (
                        <div key={item.id} className={styles.sectionItem}>
                            <Component />
                        </div>
                    )
                })}
            </div>
            <TerminalInput />
            <CommandPalette />
        </div>
    )
}
