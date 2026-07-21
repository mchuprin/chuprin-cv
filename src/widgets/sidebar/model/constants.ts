import { AvailablesCommands } from "@_shared/model/types";

export const SECTIONS: Exclude<AvailablesCommands, 'help'>[] = [
    'whoami',
    'projects',
    'experience',
    'skills',
    'contact'
]
