import { ReactNode } from "react"
import "../../../styles/profile.css"
import { useLocation, useNavigate } from "react-router-dom"
import { IoPerson, IoLockClosed } from "react-icons/io5"
import { FaBookReader } from "react-icons/fa"

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
        if (nav == "change-password" && pathname == "/lms/profile/change-password" ) return "profile-page-sidebar-item-active";
        if (nav == "my-courses" && pathname.includes("/lms/profile/my-courses") ) return "profile-page-sidebar-item-active";

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
            <ProfileSidebarItem label="My Account" icon={<IoPerson />} nav='' />
            <ProfileSidebarItem label="Change Password" icon={<IoLockClosed />} nav="change-password" />
            <ProfileSidebarItem label="My Courses" icon={<FaBookReader />} nav="my-courses" />
        </div>
    )
}