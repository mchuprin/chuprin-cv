export const SECTION_KEYS = {
    WHOAMI: 'whoami',
    PROJECTS: 'projects',
    SKILLS: 'skills',
    EXPERIENCE: 'experience',
    CONTACT: 'contact',
    HELP: 'help',
    CV: 'cv',
} as const

export type SectionKey = typeof SECTION_KEYS[keyof typeof SECTION_KEYS]

export interface CommandPattern {
    pattern: RegExp
    name: SectionKey
}

export const commandPatterns: CommandPattern[] = [
    { pattern: /^whoami$/, name: SECTION_KEYS.WHOAMI },
    { pattern: /^projects$/, name: SECTION_KEYS.PROJECTS },
    { pattern: /^(skills|neofetch)$/, name: SECTION_KEYS.SKILLS },
    { pattern: /^experience$/, name: SECTION_KEYS.EXPERIENCE },
    { pattern: /^(contact|sudo\s+hire-me)$/, name: SECTION_KEYS.CONTACT },
    { pattern: /^help$/, name: SECTION_KEYS.HELP },
    { pattern: /^fetch\s+cv$/, name: SECTION_KEYS.CV }
] as const

export const clearPattern: RegExp = /^clear$/

export const SECTIONS: Exclude<SectionKey, 'help' | 'cv'>[] = [
    'whoami',
    'projects',
    'experience',
    'skills',
    'contact'
]
