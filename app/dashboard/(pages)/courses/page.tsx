import { ReminderCard } from '@/components/dashboard/courses/remainderCard'
import { parseCurrentDate } from '@/lib/utlis'
import '@/styles/dashboard.css'

export default function CoursesPage () {
    return (
        <main className='dashboard-page courses-page'>
            <div className='courses-page-header'>
                Today { parseCurrentDate() } 
            </div>

            <ReminderCard course_title="Lorem ipsum dolor lori si amet" course_tutor="Mr Kareem" cover_image='' id="57627803920647" alt='alterna' startTime={1747428138583} />

            <div className='courses-list'>

            </div>
        </main>
    )
}