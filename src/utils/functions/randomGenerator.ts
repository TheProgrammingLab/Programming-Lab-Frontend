import { v4 as uuidV4 } from "uuid"

export function generateRandomId (): string {    
    return uuidV4();
}