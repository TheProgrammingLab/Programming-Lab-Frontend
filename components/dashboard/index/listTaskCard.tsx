"use client"
import { tListTaskCard } from '@/lib/types'
import '@/styles/dashboard.css'
import { useRouter } from 'next/navigation'
import { parseDate, taskDueDateProximity } from '@/lib/utlis'

const DeadLineProximityStyling = [
    'task-critical',
    'task-moderate',
    'task-alright'
]

export function ListTaskCard ({ id, task, due_date  }: tListTaskCard) {

    const router = useRouter()
    const task_level = taskDueDateProximity(due_date)

    return (
        <div className='dashboard-profile-list-task-card' onClick={() => router.push(`/dashboard/tasks/${id}`)}>
           
           <div className={DeadLineProximityStyling[task_level] || 'task_passed'} />

           <div>
                <div className='dashboard-profile-list-task-card-details'>
                    <span>{task}</span>
                    <span>Due date {parseDate(due_date)}</span>
                </div>

                <span> {'>'} </span>
            </div>
        </div>
    )
}