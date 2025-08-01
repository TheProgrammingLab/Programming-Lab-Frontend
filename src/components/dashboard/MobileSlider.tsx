import { BsX } from "react-icons/bs"
import "../../styles/dashboard.component.css"
import { MdAssignment, MdDashboard } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoCalendar, IoPerson } from "react-icons/io5";
// import { RiUserCommunityFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { 
    IoAnalytics, 
    // IoGameController 
} from "react-icons/io5";
import { MdNotifications } from "react-icons/md"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeSlider } from "../../redux/features/slider";

const _NavigationItems = [
    { id: '', label: 'Dashboard', icon: <MdDashboard /> },
    { id: 'courses', label: 'Courses', icon: <FaBookReader /> },
    { id: 'calendar', label: 'Calendar', icon: <IoCalendar /> },
    { id: 'tasks', label: 'Tasks', icon: <MdAssignment /> },
    { id: 'profile', label: 'Profile', icon: <IoPerson /> },
    // { id: 'community', label: 'Community', icon: <RiUserCommunityFill /> },
    // { id: 'games', label: 'Games', icon: <IoGameController /> },
    { id: 'notifications', label: 'Notifications', icon: <MdNotifications /> }
]

const TutorExtraNavigationItem = [
    { id: 'students', label: 'Students', icon: <PiStudentFill /> },
    { id: 'analytics', label: 'Analytics', icon: <IoAnalytics /> }
]


export function MobileSlider () {
    const [ NavigationItems, setNavigationItems ] = useState([..._NavigationItems])
    const user  = useAppSelector(state => state.user.value)
    
    const navigate= useNavigate()
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()

    function handleCurrentStyle (arg: string): string {

        if ((pathname == "/lms") && arg == '' ) return "slider-item-active";
        if (pathname.includes("/lms/courses") && arg == 'courses') return "slider-item-active";
        if (pathname.includes("/lms/calendar") && arg == 'calendar') return "slider-item-active";
        if (pathname.includes("/lms/tasks") && arg == 'tasks') return "slider-item-active";
        if (pathname.includes("/lms/community") && arg == 'community') return "slider-item-active";
        if (pathname.includes("/lms/students") && arg == 'students') return "slider-item-active";
        if (pathname.includes("/lms/analytics") && arg == 'analytics') return "slider-item-active";
        if (pathname.includes("/lms/games") && arg == 'games') return "slider-item-active";
        if (pathname.includes("/lms/notifications") && arg == 'notifications') return "slider-item-active";
        if (pathname.includes("/lms/profile") && arg == 'profile') return "slider-item-active";
        
        return "slider-item"
    }
    
    function handleClick (arg:string) {
        if (!arg) {
            navigate('/lms')
            dispatch(closeSlider())
            return;
        }

        navigate(`/lms/${arg}`)
        dispatch(closeSlider())
    }

    function close () {
        dispatch(closeSlider())
    }
    
    useEffect (() => {
        if (user.role == "tutor") {
            setNavigationItems([..._NavigationItems, ...TutorExtraNavigationItem])
        }
    }, [])
    
    return (
        <div className="mobile-slider">
            <span className="slider-exit" onClick={close}>
                <BsX />
            </span>

            <div className="mobile-slider-cnt">
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
            </div>

        </div>
    )
}