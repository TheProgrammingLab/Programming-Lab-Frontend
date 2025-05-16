'use client'
import { tIconButton } from '@/lib/types'
import '@/styles/components.ui.css'

export function IconButton ({ icon, action }: tIconButton) {
    return (
        <div className='icon-button' onClick={action}>
            {icon}
        </div>
    )
}