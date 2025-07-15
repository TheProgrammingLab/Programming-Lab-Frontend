import "../../styles/dashboard_calendar.css"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
// import moment from "moment"
import { format, parse, startOfWeek, getDay, isBefore } from "date-fns"
import { enUS } from "date-fns/locale"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useEffect, useState } from "react"
import { fetchCalenderEvents } from "../../api"
import { parseTimeFromDate } from "../../utils/functions"

const locales = {
    'en-US': enUS
}

// const localizer = momentLocalizer(moment)
const localizer = dateFnsLocalizer({
    format, 
    parse, 
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
    getDay,
    locales
})


function CustomEvent ({ event }: { event: any }) {
    const [ hovered, setHovered ] = useState<boolean>(false)
    const isPast = isBefore(new Date(event.end), new Date())

    return (
        <>
            <div
                className="calendar-custom-event"
                onMouseEnter={() => {setHovered(true);} }
                onMouseLeave={() => {setHovered(false)} } 
                style={{
                    backgroundColor: isPast ? '#b2b2b2': '',
                    borderColor: isPast ? "grey": '',
                    color: isPast ? 'white' : ''
                }}
            >
                {event.title}
            </div>

            {
                hovered &&
                (
                    <div 
                        className="calendar-custom-event-hover-item"
                        
                    > 
                        <span>{event.description}</span>
                        <div className="calendar-custom-event-dates">
                            <span>{parseTimeFromDate(event.start)}</span>
                            <span>{parseTimeFromDate(event.end)}</span>
                        </div>
                    </div>
                )
            }
        </>
    )
}


export default function Page () {

    const [events, setEvents] = useState<any[]>([])

    async function getEvents () {
        const response = await fetchCalenderEvents()

        if (response.status == 200) {
            setEvents([...response.data])
        }
    }

    function dayPropGetter (date: Date) {
        const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

        if (isPast) {
            return {
                style: {}
            }
        }
        return {}
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div className='dashboard-calendar'>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                // eventPropGetter={eventPropGetter}
                style={{height: '100%'}}
                views={["month"]}
                components={{
                    event: CustomEvent
                }}
                dayPropGetter={dayPropGetter}
            />
        </div>
    )
}