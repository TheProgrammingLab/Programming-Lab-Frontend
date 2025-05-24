"use client"
import '@/styles/components.dashboard.css'
import { tSidebaritem } from "@/lib/types";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function SidebarItem ({ label, icon, nav }: tSidebaritem) {
    
    const pathname = usePathname()

    function stylingCondition () {
        if (pathname == nav) return 'sidebar-active-item';
        
        if (nav != '/dashboard' && pathname.includes(nav)) return 'sidebar-active-item'; 

        return 'sidebar-item'
    }

    return (
        <Link href={nav}>
            <div className={stylingCondition()}>
                <span>{icon}</span>
                <span>{label}</span>
            </div>
        </Link>
    )
}