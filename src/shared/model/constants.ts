import { AvailablesCommands } from './types'

export interface CommandPattern {
    pattern: RegExp
    name: AvailablesCommands
}

export const commandPatterns: CommandPattern[] = [
    { pattern: /^whoami$/, name: 'whoami' },
    { pattern: /^projects$/, name: 'projects' },
    { pattern: /^(skills|neofetch)$/, name: 'skills' },
    { pattern: /^experience$/, name: 'experience' },
    { pattern: /^(contact|sudo\s+hire-me)$/, name: 'contact' },
    { pattern: /^help$/, name: 'help' }
]
export const clearPattern: RegExp = /^clear$/

export const commandDescriptions: Record<AvailablesCommands, string> = {
    whoami: 'About me',
    projects: 'View my work',
    skills: 'Technologies (neofetch style)',
    experience: 'Work history',
    contact: 'Get in touch',
    help: 'Show available commands',
}
