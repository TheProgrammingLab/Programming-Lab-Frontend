import { ReactNode } from "react"
import "../../../styles/profile.css"
import { useLocation, useNavigate } from "react-router-dom"

type T_ProfileSidebarItem = {
    label: string
    nav: string
    icon: ReactNode
}

function ProfileSidebarItem ({ label, nav, icon }: T_ProfileSidebarItem) {
    
    const navigate = useNavigate()
    const { pathname } = useLocation()

    function handleClick () {
        if (!nav) {
            navigate("/lms/profile")
            return;
        }

        navigate(`/lms/profile/${nav}`)
    }

    function handleStyling () {
        if (!nav && pathname == "/lms/profile" ) return "profile-page-sidebar-item-active";
        if (nav == "reset-password" && pathname == "/lms/profile/reset-password" ) return "profile-page-sidebar-item-active";
        if (nav == "my-courses" && pathname == "/lms/profile/my-courses" ) return "profile-page-sidebar-item-active";

        return "profile-page-sidebar-item";
    }
    
    return (
        <div onClick={handleClick} className={handleStyling()}>
            <span>{ icon }</span>
            <span>{ label }</span>
        </div>
    )
}

export function ProfileSidebar () {
    return (
        <div className="profile-page-sidebar">
            <ProfileSidebarItem label="My Account" icon={<></>} nav='' />
            <ProfileSidebarItem label="Reset Password" icon={<></>} nav="reset-password" />
            <ProfileSidebarItem label="My Courses" icon={<></>} nav="my-courses" />
        </div>
    )
}