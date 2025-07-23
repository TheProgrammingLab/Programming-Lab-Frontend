import "../../../styles/dashboard_tasks.css"
import { parseDate } from "../../../utils/functions"
import logo from "/images/logo.webp"

type T_TaskCard = {
    thumbnail: string 
    id: string
    description: string
    dateAdded: number
    deadLine: number
    status: string
}

function CourseThumbnail ({ thumbnail, loading=false, extra_class='' }: { thumbnail: string, loading?: boolean , extra_class?: string}) {
    return (
        <div className={`task-card-thumbnail ${extra_class}`}>
            {
                thumbnail
                ?
                <img src={thumbnail} alt={`${thumbnail}_notfound`} />
                :
                <div className={loading ? "task-thumbnail-placeholder loading-task-thumbnail" : "task-thumbnail-placeholder"}>
                    <img src={logo} />
                </div>
            }
        </div>
    )
}


export function TaskCard ({ thumbnail, id, description, dateAdded, deadLine, status }: T_TaskCard ) {
    
    function handleClick () {
        if(!id) return;
    }

    return (
        <div className="tasks-card" onClick={handleClick}>
            <CourseThumbnail thumbnail={thumbnail} />

            <div className="tasks-card-cnt">
                <div className="tasks-card-cnt-details">
                    <span>{description}</span>
                    <span>{parseDate(dateAdded)}</span>
                </div>

                <div className="tasks-card-cnt-date">
                    {parseDate(deadLine)}
                </div>

                <div className="tasks-card-cnt-status">
                    {status}
                </div>
            </div>
        </div>
    )
}