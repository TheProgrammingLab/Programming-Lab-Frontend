import "../../../styles/dashboard_notification.css"
import { FaBellSlash } from "react-icons/fa";

export function NoNotification () {
    return (
        <div className="no-notification">
            <div> <FaBellSlash /> </div>
            <span>No Notifications</span>
        </div>
    )
} 