"use client"
import "@/styles/components.ui.css"
import { tButton } from "@/lib/types"
import { useRouter } from "next/navigation"

type tSmallButton = Omit<tButton, 'action'> & {
    nav: string
}

export function SmallButton({ type='button', label, componentClass, nav }: tSmallButton) {
    
    const router = useRouter()

    return (
        <button 
            type={type}
            className={componentClass === 'Primary'  ? 'primary-small-btn' : 'secondary-small-btn'}
            onClick={() => router.push(nav)}
        >
            { label }
        </button>
    )
}