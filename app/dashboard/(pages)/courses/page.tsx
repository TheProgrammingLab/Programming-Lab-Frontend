import { CourseListContainer } from '@/components/dashboard/courses/courseList'
import { CoursesHeader } from '@/components/dashboard/courses/header'
import { ReminderCard } from '@/components/dashboard/courses/remainderCard'
import { parseCurrentDate } from '@/lib/utlis'
import { fetchUserCourse } from '@/api/fetchLabData'
import '@/styles/dashboard.css'
import { tCourseCard } from '@/lib/types'

type response = {
    status: number,
    err?: string,
    data: tCourseCard[]
}


export default async function CoursesPage () {
    
    const response = await fetchUserCourse() as response;

    return (
        <main className='dashboard-page courses-page'>
            <div className='courses-page-header'>
                Today { parseCurrentDate() } 
            </div>

            <ReminderCard course_title="Lorem ipsum dolor lori si amet" course_tutor="Mr Kareem" cover_image='' id="57627803920647" alt='alterna' startTime={1747428138583} />

            <div className='courses-page-main'>
                <CoursesHeader />
                <CourseListContainer response={response} />
            </div>
        </main>
    )
}