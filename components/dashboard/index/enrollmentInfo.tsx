import '@/styles/dashboard.css'
import { IndexCards } from '../indexCards'
import { tIndexCards } from '@/lib/types'
import { FaBookOpenReader } from 'react-icons/fa6'
import { noOfUserTask } from '@/api/userinfo'


function EnrollmentInfoCard ({ icon, noOfContent, content, color_no }: tIndexCards) {
    return (
        <div className='enrollment-info-card'>
            <IndexCards icon={icon} noOfContent={noOfContent} content={content} color_no={color_no} />
        </div>
    )
}



export async function EnrollmentInfo () {
    
    const data = await noOfUserTask('user id') as { course: number, assignments: number, projects: number }

    return (
        <div className='enrollment-info'>
            <EnrollmentInfoCard icon={<FaBookOpenReader />} noOfContent={data.course} content='Enrolled Courses' color_no={0} />
            <EnrollmentInfoCard icon={<FaBookOpenReader />} noOfContent={data.assignments} content='Assignments' color_no={1} />
            <EnrollmentInfoCard icon={<FaBookOpenReader />} noOfContent={data.projects} content='Projects' color_no={2} />
        </div>
    )
}