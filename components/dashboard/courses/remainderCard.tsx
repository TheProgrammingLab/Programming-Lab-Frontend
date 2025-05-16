"use client"
import { tCourseCard } from "@/lib/types"
import { parseTimeFromDate } from "@/lib/utlis"
import { IoIosPerson } from "react-icons/io"
import '@/styles/components.dashboard.css'

type tReminderCard = Pick<tCourseCard, 'course_title' | 'course_tutor' | 'cover_image' | 'id' | 'alt' > & {
    startTime: number
}

export function ReminderCard ({ course_title, course_tutor, cover_image, id, alt, startTime }: tReminderCard) {
    return (
        <div className='reminder-card'>
            <div className='reminder-card-image'></div>

            <div className="reminder-card-main">
                <div className="reminder-card-content">
                    <span>Reminder: Applied Course</span>
                    <div className="reminder-card-content-course">
                        <span>{ course_title }</span> 
                        <div> 
                            <span> <IoIosPerson /> </span> 
                            <span>{ course_tutor }</span>
                        </div>
                    </div>
                </div>

                <div className="reminder-card-extra">
                    <div> Available at {parseTimeFromDate(startTime)} </div>

                    <div>{`00:00:00`}</div>
                </div>
            </div>
        </div>
    )
}

export function NoCourseToRemindOf () {
    return (
        <div className="reminder-card no-reminder">

        </div>
    )
}