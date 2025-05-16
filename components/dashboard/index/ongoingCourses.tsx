import { SmallButton } from '@/components/ui/SmallButton'
import '@/styles/dashboard.css'
import { CourseCard } from '../courseCard'
import { fetchOngoingCourses } from '@/api/fetchLabData'
import { tCourseCard } from '@/lib/types'


type tResponseForCourseCardFetch = {
    status: number,
    data?: tCourseCard[],
    err?: string
}

export async function OngoingCourses () {

    let response: tResponseForCourseCardFetch = await fetchOngoingCourses() as tResponseForCourseCardFetch
    

    return (
        <div className='dashboard-ongoing-courses'>
            <div className='dashboard-ongoing-courses-header'>
                <span>Available Courses</span>
                <SmallButton label='See More' nav='/dashboard/courses' componentClass='Secondary' />
            </div>

            <div className='dashboard-ongoing-courses-list'>
                {
                    response.data?.map((course, index) => 
                        <CourseCard
                            key={index}
                            course_title={course.course_title} 
                            course_description={course.course_description} 
                            course_tutor={course.course_tutor}
                            cover_image={course.cover_image}
                            alt={course.alt}
                            enrolled={course.enrolled}
                            id={course.id}
                            ended={course.ended}
                        />
                    )
                }
            </div>
        </div>
    )
}