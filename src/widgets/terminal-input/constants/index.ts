import { AvailablesCommands } from '@_shared/types'

export const commandPatterns: { pattern: RegExp; name: AvailablesCommands }[] = [
    { pattern: /^whoami$/, name: 'whoami' },
    { pattern: /^projects$/, name: 'projects' },
    { pattern: /^(skills|neofetch)$/, name: 'skills' },
    { pattern: /^experience$/, name: 'experience' },
    { pattern: /^(contact|sudo\s+hire-me)$/, name: 'contact' },
    { pattern: /^help$/, name: 'help' }
]
export const clearPattern: RegExp = /^clear$/
