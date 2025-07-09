import "../../styles/_components.css"
import { GoStack } from "react-icons/go"
import { CiCalendarDate } from "react-icons/ci"
import { parseDate } from "../../utils/functions"

type T_CourseCard = {
    thumbnail: string
    niche: string
    title: string
    modules: number
    date: number
}

export function CourseCard ({ thumbnail, niche, title, modules, date }: T_CourseCard) {
    return (
        <div className="course-card">
            <div className="course-card-thumbnail">
                <img src={thumbnail} alt={`${thumbnail}_notfound`} />
            </div>

            <div className="course-card-details">
                <span>{niche}</span>
                <span>{title}</span>

                <div className="course-card-details-btm">
                    <div>
                        <span> <GoStack /> </span>
                        <span>{modules} Modules</span>
                    </div>

                    <div>
                        <span> <CiCalendarDate /> </span>
                        <span>{parseDate(date)} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PreCourseCard () {
    return (
        <div className="course-card">
            <div className="pre-course-card-thumbnail">
                
            </div>

            <div className="pre-course-card-details">
                <span></span>
                <span></span>

                <div className="pre-course-card-details-btm">
    
                </div>
            </div>
        </div>
    )
}