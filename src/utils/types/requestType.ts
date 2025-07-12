export interface I_Response {
    data?: any | any[]
    status: number
    error?: string
}

export interface I_CourseCard {
    id: string,
    description: string,
    thumbnail: string,
    tutor: string,
    slug: string,
    createdAt: number,
    state: string[],
    niche: string, 
    title: string, 
    modules: number
}