import { getUserinfo } from '@/api/userinfo'
import '@/styles/dashboard.css'
import { CalendarCard } from './calendarCard'
import { ListTask } from './listTask'

async function ProfileUserInfo () {
    
    const userinfo = await getUserinfo('user_id')

    return (
        <div className='dashboard-profile-userinfo'>
            <div className='dashboard-profile-userinfo-header'>
                <span>My Profile</span>

                <span>More</span>
            </div>

            <div className='dashboard-profile-userinfo-image'></div>

            <div className='dashboard-profile-userinfo-details'>
                <span>{userinfo.username}</span>
                <div className='dashboard-profile-role'>{userinfo.role} {userinfo.role == 'student' ? '👨🏼‍🎓' : '🌟' }</div>
            </div>


        </div>
    )
}

export function Profile () {
    return (
        <div className='dashboard-profile'>
            <ProfileUserInfo />
            <CalendarCard />
            <ListTask />
        </div>
    )
}