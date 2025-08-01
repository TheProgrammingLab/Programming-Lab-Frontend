import { useState } from "react"
import { NoNotification } from "../../components/dashboard/notification"

export default function Page () {

    const [ notifications, _ ] = useState<any[]>([])

    return (
        <div className="notification-page">
            {
                !notifications[0]
                ?
                <NoNotification />
                :
                <></>
            }
        </div>
    )
}