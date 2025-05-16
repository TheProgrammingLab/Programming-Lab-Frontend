"use client"
import '@/styles/components.dashboard.css'
import { tSidebaritem } from "@/lib/types";
import { usePathname, useRouter } from 'next/navigation';

export function SidebarItem ({ label, icon, nav }: tSidebaritem) {
    
    const pathname = usePathname()
    const router = useRouter()

    function stylingCondition () {
        if (pathname == nav) return 'sidebar-active-item';
        
        if (nav != '/dashboard' && pathname.includes(nav)) return 'sidebar-active-item'; 

        return 'sidebar-item'
    }

    function handleClick () {
        router.push(nav)
    }

    return (
        <div className={stylingCondition()} onClick={handleClick}>
            <span>{icon}</span>
            <span>{label}</span>
        </div>
    )
}