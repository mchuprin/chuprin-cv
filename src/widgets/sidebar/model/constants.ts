import { SectionKey } from "@_shared/model/types";

export const SECTIONS: Exclude<SectionKey, 'help' | 'cv'>[] = [
    'whoami',
    'projects',
    'experience',
    'skills',
    'contact'
]
