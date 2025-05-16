import '@/styles/dashboard.css'
import { BannerCard } from './bannerCard'
import { EnrollmentInfo } from './enrollmentInfo'
import { OngoingCourses } from './ongoingCourses'


export function Index () {
    return (
        <div className='dashboard-index'>
            <BannerCard />
            <EnrollmentInfo />
            <OngoingCourses />
        </div>
    )
}