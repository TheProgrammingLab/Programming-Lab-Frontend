import { v4 as uuidV4 } from "uuid"

const COLORS = [
    '#5a1b1b',
    '#3c260f',
    '#3c0f23',
    '#09270c'
]

export function generateRandomId (): string {    
    return uuidV4();
}

export function generateRandomColor (): string {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
}