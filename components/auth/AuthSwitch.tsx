'use client'
import { tAuthSwitch, tAuthSwitchRole } from "@/lib/types"
import { capitalize, compareToAssignClass } from "@/lib/utlis"
import "@/styles/auth.css"
import { useRouter } from "next/navigation"

export function AuthSwitch ({ page }: tAuthSwitch) {
    
    const router = useRouter()

    if ( page === 'login' ) {
        return (
            <div onClick={() => router.push('/signup')} className="auth-switch">Dont have an account? <span>Sign Up.</span> </div>
        )
    } else {
        return (
            <div onClick={() => router.push('/login')} className="auth-switch">Already have an account? <span>Log in.</span> </div>
        )
    }
}

export function AuthRoleSwitch ({ page, currentRole, switchRole }: tAuthSwitchRole) {
    
    return (
        <div className="auth-role-switch">
            <div 
                className={compareToAssignClass(currentRole, 'Student') ? "role-switch-active" : "" }
                onClick={() => switchRole('student')}
            >{capitalize(page)} as Student</div>
            
            <div 
                className={compareToAssignClass(currentRole, 'Tutor') ? "role-switch-active" : "" }
                onClick={() => switchRole("tutor")}
                >{capitalize(page)} as Tutor</div>
        </div>
    )
}