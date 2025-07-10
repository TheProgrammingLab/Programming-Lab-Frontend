import "../../../styles/dashboard_courses.css"
import { GoStack } from "react-icons/go"
import { CiCalendarDate } from "react-icons/ci"
import logo from "/images/logo.webp"
import { parseDate } from "../../../utils/functions"

type T_CourseCard = {
    thumbnail: string
    niche: string
    title: string
    modules: number
    date: number
}

function CourseThumbnail ({ thumbnail, loading=false }: { thumbnail: string, loading?: boolean }) {
    return (
        <div className={"course-card-thumbnail"}>
            {
                thumbnail
                ?
                <img src={thumbnail} alt={`${thumbnail}_notfound`} />
                :
                <div className={loading ? "thumbnail-placeholder loading-thumbnail" : "thumbnail-placeholder"}>
                    <img src={logo} />
                </div>
            }
        </div>
    )
}

export function CourseCard ({ thumbnail, niche, title, modules, date }: T_CourseCard) {
    return (
        <div className="course-card">
            <CourseThumbnail thumbnail={thumbnail} />

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
            <CourseThumbnail thumbnail="" loading={true} />

            <div className="pre-course-card-details">
                <span></span>
                <span></span>

                <div className="pre-course-card-details-btm">
    
                </div>
            </div>
        </div>
    )
}