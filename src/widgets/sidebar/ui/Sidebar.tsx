'use client'
import Navlink from '@_shared/ui/navlink'
import { useActiveComponents } from '@/shared/lib/activeComponents'
import { AvailablesSections } from '@/shared/constants'

interface SidebarProps {
  className?: string
}

const sections: Exclude<AvailablesSections, 'help'>[] = ['whoami', 'projects', 'experience', 'skills', 'contact']

export const Sidebar = (props: SidebarProps) => {
  const { addSection, lastSection } = useActiveComponents()

  return (
    <aside>
      <h1>Navigation</h1>
      {sections.map(section => (
        <Navlink
          key={section}
          isActive={lastSection === section}
          label={section.toUpperCase()}
          onClick={() => addSection(section)}
        />
      ))}
    </aside>
  )
}
