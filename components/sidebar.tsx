import '@/styles/components.dashboard.css'
import { SidebarItem } from './dashboard/sidebarItem'
import { MdDashboard, MdAssignment } from 'react-icons/md'
import { FaBookReader } from 'react-icons/fa'
import { BiSolidMessageRounded } from 'react-icons/bi'
import { IoCalendar } from 'react-icons/io5'
import { RiUserCommunityFill } from 'react-icons/ri'

export function Sidebar () {
    return (
        <div className="sidebar">
            <div className='sidebar-logo'>Programming Lab</div>

            <div className='sidebar-nav'>
                <SidebarItem label='Dashboard' nav='/dashboard' icon={<MdDashboard />} />
                <SidebarItem label='Courses' nav='/dashboard/courses' icon={<FaBookReader />} />
                <SidebarItem label='Tasks' nav='/dashboard/tasks' icon={<MdAssignment />} />
                <SidebarItem label='Calendar' nav='/dashboard/calendar' icon={<IoCalendar />} />
                <SidebarItem label='Messages' nav='/dashboard/messages' icon={<BiSolidMessageRounded />} />
                <SidebarItem label='Community' nav='/dashboard/community' icon={<RiUserCommunityFill />} />
            </div>
        </div>
    )
}