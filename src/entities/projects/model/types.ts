export type ProjectStatus = 'ACTIVE' | 'STABLE' | 'BETA'

export interface Project {
    name: string
    lang: string
    year: number
    desc: string
    descRu: string
    status: ProjectStatus
    stars: number
}
