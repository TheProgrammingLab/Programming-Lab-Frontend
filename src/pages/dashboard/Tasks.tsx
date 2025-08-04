// import { TaskCard } from "../../components/dashboard/tasks/TaskCard"
import "../../styles/dashboard_tasks.css"
import { CSSProperties, useState } from "react"
// import { LoremIpsum } from "../../utils/functions"
import { Assignments } from "../../components/dashboard/tasks/Assignments"

type T_Filter = 'assignment' | 'project'

export default function Page () {

    const [ filter, setFilter ] = useState<T_Filter>('assignment')

    function changeFilter (arg: T_Filter) {
        setFilter(arg)
    }

    function handleIndicator (): CSSProperties {
        return filter === "assignment" ? { left: 0 } : { left: '50%' }
    }


    function handleStyling(arg: T_Filter) {
        return filter === arg ? "task-filter-item-active" : "task-filter-item"
    }

    return (
        <div className="dashboard-tasks-page">
            <div className="tasks-filter">
                <span className={handleStyling("assignment")} onClick={() => changeFilter('assignment')}> Assignments </span>
                <span className={handleStyling("project")} onClick={() => changeFilter('project')}> Projects </span>

                <div className="tasks-filter-indicator" style={handleIndicator()} />
            </div>

            <>
                {
                    filter === "assignment"
                    ?
                    <Assignments />
                    :
                    <></>
                }
            </>

        </div>
    )
}