import '@/styles/components.dashboard.css'
import { SidebarItem } from './dashboard/sidebarItem'
import { MdDashboard, MdAssignment } from 'react-icons/md'
import { FaBookReader } from 'react-icons/fa'
import { BiSolidMessageRounded } from 'react-icons/bi'

export function Sidebar () {
    return (
        <div className="sidebar">
            <div className='sidebar-logo'>Programming Lab</div>

            <div className='sidebar-nav'>
                <SidebarItem label='Dashboard' nav='/dashboard' icon={<MdDashboard />} />
                <SidebarItem label='Courses' nav='/dashboard/courses' icon={<FaBookReader />} />
                <SidebarItem label='Assignments' nav='/dashboard/assignments' icon={<MdAssignment />} />
                <SidebarItem label='Messages' nav='/dashboard/messages' icon={<BiSolidMessageRounded />} />
            </div>
        </div>
    )
}