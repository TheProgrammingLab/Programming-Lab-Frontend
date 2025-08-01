import "../../../styles/dashboard_courses.css"
import { GoStack } from "react-icons/go"
import { CiCalendarDate } from "react-icons/ci"
import logo from "/images/logo.webp"
import { parseDate } from "../../../utils/functions"
import { useNavigate } from "react-router-dom"


type T_CourseCard = {
    thumbnail: string
    niche: string
    title: string
    modules: number
    date: number
    slug: string
    type?: 'regular' | 'personal'
}

export function CourseThumbnail ({ thumbnail, loading=false, extra_class='' }: { thumbnail: string, loading?: boolean , extra_class?: string}) {
    return (
        <div className={`course-card-thumbnail ${extra_class}`}>
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

export function CourseCard ({ type='regular', slug, thumbnail, niche, title, modules, date }: T_CourseCard) {

    const navigate = useNavigate()
    
    function handleClick () {
        if (type == 'regular') {
            navigate(`/lms/courses/${slug}`)
        } else {
            navigate(`/lms/profile/my-courses/${slug}`)
        }
    }

    return (
        <div className="course-card" onClick={handleClick}>
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