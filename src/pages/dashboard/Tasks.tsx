import { TaskCard } from "../../components/dashboard/tasks/TaskCard"
import "../../styles/dashboard_tasks.css"
import { CSSProperties, useState } from "react"
import { LoremIpsum } from "../../utils/functions"

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

            <div className="tasks-content">
                <TaskCard thumbnail={""} id={"id"} description={LoremIpsum()} dateAdded={0} deadLine={0} status={"load"} />
                <TaskCard thumbnail={""} id={"id"} description={LoremIpsum()} dateAdded={0} deadLine={0} status={"load"} />
                <TaskCard thumbnail={""} id={"id"} description={LoremIpsum()} dateAdded={0} deadLine={0} status={"load"} />
                <TaskCard thumbnail={""} id={"id"} description={LoremIpsum()} dateAdded={0} deadLine={0} status={"load"} />
            </div>

        </div>
    )
}