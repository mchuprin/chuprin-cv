import { AvailablesCommands } from '@_shared/types'

export const SECTIONS: Exclude<AvailablesCommands, 'help'>[] = [
    'whoami',
    'projects',
    'experience',
    'skills',
    'contact'
]
