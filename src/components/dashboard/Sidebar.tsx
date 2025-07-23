import "../../styles/dashboard.component.css"
import logo from  "/images/logo.webp"
import { MdAssignment, MdDashboard } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { RiUserCommunityFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { IoAnalytics, IoGameController } from "react-icons/io5";
import { MdNotifications } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { CiLogout } from "react-icons/ci";


const _NavigationItems = [
    { id: '', label: 'Dashboard', icon: <MdDashboard /> },
    { id: 'courses', label: 'Courses', icon: <FaBookReader /> },
    { id: 'calendar', label: 'Calendar', icon: <IoCalendar /> },
    { id: 'tasks', label: 'Tasks', icon: <MdAssignment /> },
    { id: 'community', label: 'Community', icon: <RiUserCommunityFill /> },
    { id: 'games', label: 'Games', icon: <IoGameController /> },
    { id: 'notifications', label: 'Notifications', icon: <MdNotifications /> }
]

const TutorExtraNavigationItem = [
    { id: 'students', label: 'Students', icon: <PiStudentFill /> },
    { id: 'analytics', label: 'Analytics', icon: <IoAnalytics /> }
]

function LogoutButton () {

    const navigate = useNavigate()

    function handleClick () {
        navigate('/')
    }

    return (
        <button className="sidebar-logout" onClick={handleClick}>
            <span> <CiLogout /> </span>
            <span>Logout</span>
        </button>
    )
}

export function Sidebar() {

    const [ NavigationItems, setNavigationItems ] = useState([..._NavigationItems])
    const user  = useAppSelector(state => state.user.value)
    
    const navigate= useNavigate()
    const { pathname } = useLocation()

    function handleCurrentStyle (arg: string): string {

        if (pathname == "/lms" && arg == '') return "nav-item active";
        if (pathname.includes("/lms/courses") && arg == 'courses') return "nav-item active";
        if (pathname.includes("/lms/calendar") && arg == 'calendar') return "nav-item active";
        if (pathname.includes("/lms/tasks") && arg == 'tasks') return "nav-item active";
        if (pathname.includes("/lms/community") && arg == 'community') return "nav-item active";
        if (pathname.includes("/lms/students") && arg == 'students') return "nav-item active";
        if (pathname.includes("/lms/analytics") && arg == 'analytics') return "nav-item active";
        if (pathname.includes("/lms/games") && arg == 'games') return "nav-item active";
        if (pathname.includes("/lms/notifications") && arg == 'notifications') return "nav-item active";
        return "nav-item"
    }
 
    function handleClick (arg:string) {
        if (!arg) {
            navigate('/lms')
            return;
        }

        navigate(`/lms/${arg}`)
    }
    
    useEffect (() => {
        if (user.role == "tutor") {
            setNavigationItems([..._NavigationItems, ...TutorExtraNavigationItem])
        }
    }, [])

    return (
        <div className="sidebar">
            
            <div className="logo">
                <span className="logo-icon">
                    <img src={logo} />
                </span>
                <span className="logo-text">Programming Lab</span>
            </div>
        
            <nav className="sidebar-nav">
                
                {NavigationItems.map((item) => (
                <div
                    key={item.id}
                    className={handleCurrentStyle(item.id)}
                    onClick={() => handleClick(item.id)}
                >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                </div>
                ))}

            </nav>

            <LogoutButton />
        </div>
    );
};