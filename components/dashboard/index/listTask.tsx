import { SmallButton } from "@/components/ui/SmallButton"
import "@/styles/dashboard.css"
import { ListTaskCard } from "./listTaskCard"

export function ListTask () {
    return (
        <div className="dashboard-profile-list-task">
            <div className="dashboard-profile-list-task-header">
                <span>List Task</span>

                <SmallButton label='Sell All' nav='/dashboard/tasks' componentClass='Secondary' />
            </div>

            <div className="dashboard-profile-list-task-list">
                <ListTaskCard id='2903812830' task='Lorem ipsum dolor lori sit amet' due_date={1747653872477} />

                <ListTaskCard id='29038128as' task='Lorem ipsum dolor lori sit amet' due_date={1747351851093} />

                <ListTaskCard id='29038128j0' task='Lorem ipsum dolor lori sit amet' due_date={1747263872477} />
            </div>
        </div>
    )
}