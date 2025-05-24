import { Index } from '@/components/dashboard/index'
import { Profile } from '@/components/dashboard/index/profile'
import { Topbar } from '@/components/dashboard/index/topbar'
import '@/styles/dashboard.css'


export default function Dashboard () {
    return (
        <main className="dashboard-page">
            <Topbar />

            <div className='dashboard-page-main'>
                <Index />
                <Profile />
            </div>
        </main>
    )
}