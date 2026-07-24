'use client'
import Projects from '@_entities/projects'
import Skills from '@_entities/skills'
import Whoami from '@_entities/whoami'
import Experience from '@_entities/experience'
import Help from '@_entities/help'
import Contact from '@_entities/contact'
import { useActiveComponents } from '@_shared/lib/contexts/activeComponents'
import { ComponentType, useRef, useEffect } from 'react'
import styles from './MainPage.module.scss'
import { SectionKey } from '@_shared/model/types'
import { SECTION_KEYS } from '@_shared/model/constants'
import { CV } from '@_entities/cv'
import { UnknownCommand } from '@_entities/unknown-command'

interface MainPageProps {
    className?: string
}

const componentsMap: Record<Exclude<SectionKey, 'unknown'>, ComponentType> = {
    [SECTION_KEYS.WHOAMI]: Whoami,
    [SECTION_KEYS.PROJECTS]: Projects,
    [SECTION_KEYS.EXPERIENCE]: Experience,
    [SECTION_KEYS.SKILLS]: Skills,
    [SECTION_KEYS.CONTACT]: Contact,
    [SECTION_KEYS.HELP]: Help,
    [SECTION_KEYS.CV]: CV
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
                    if (item.name === SECTION_KEYS.UNKNOWN) {
                        return (
                            <div key={item.id} className={styles.sectionItem}>
                                <UnknownCommand command={item.command} />
                            </div>
                        )
                    }

                    const Component = componentsMap[item.name]
                    return (
                        <div key={item.id} className={styles.sectionItem}>
                            <Component />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
