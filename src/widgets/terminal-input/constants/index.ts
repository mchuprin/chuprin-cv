import { CommandPattern } from '../model/types'

export const commandPatterns: CommandPattern[] = [
    { pattern: /^whoami$/, name: 'whoami' },
    { pattern: /^projects$/, name: 'projects' },
    { pattern: /^(skills|neofetch)$/, name: 'skills' },
    { pattern: /^experience$/, name: 'experience' },
    { pattern: /^(contact|sudo\s+hire-me)$/, name: 'contact' },
    { pattern: /^help$/, name: 'help' }
]
export const clearPattern: RegExp = /^clear$/
