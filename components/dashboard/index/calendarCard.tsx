'use client'
import { tCalendarItem } from '@/lib/types'
import '@/styles/dashboard.css'


type dayType = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'

const DAYS: dayType[] = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

function CalendarCardItem ({ day, date=0 }: tCalendarItem) {
    
    function returnDate () {
        const day = new Date().getDate()

        const dayIndex = new Date().getDay()

        

        if (dayIndex == date) {
             return day;
        } else {
            return (day + (date - dayIndex))
        }
    }

    returnDate()

    return (
        <div className={date == new Date().getDay()  ? 'dashboard-profile-calendar-item current-day' : 'dashboard-profile-calendar-item'}>
            <div className='calendar-item-day'>{returnDate()}</div>
            <span>{ day }</span>
        </div>
    )
}


export function CalendarCard () {
    

    return (
        <div className='dashboard-profile-calendar-card'>
            {
                DAYS.map((day, index) => (
                    <CalendarCardItem key={index} day={day} date={index} />
                ))
            }

        </div>
    )
}