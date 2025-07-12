import { useEffect } from "react"
import { useAppSelector } from "../../../redux/hooks"
import "../../../styles/dashboard_courses.css"
import { useSearchParams } from "react-router-dom"

const StudentFilter = [
    "", "ongoing", "completed", "enrolled"
]
const TutorFilter = [
    "", "published", "draft"
]

export function CourseFilter () {

    const [ searchParams, setSearchParams ] = useSearchParams() 
    const user = useAppSelector(state => state.user.value)
    const filter = searchParams.get('filter')

    function handleStyling (arg?: string): string {
        let styling = "filter-item"

        if (user.role == "student") {
            switch(true) {
                case !arg && !filter:
                    styling = "active-filter-item";
                    break;
                case arg == "ongoing" && filter == "ongoing":
                    styling = "active-filter-item";
                    break;
                case arg == "completed" && filter == "completed":
                    styling = "active-filter-item";
                    break;
                case arg == "enrolled" && filter == "enrolled":
                    styling = "active-filter-item";
                    break;
                default:
                    styling = "filter-item"
                    break;
            }
        };

        if (user.role == "tutor") {
            switch(true) {
                case !arg && !filter:
                    styling = "active-filter-item";
                    break;
                case arg == "published" && filter == "published":
                    styling = "active-filter-item";
                    break;
                case arg == "draft" && filter == "draft":
                    styling = "active-filter-item";
                    break;
                default:
                    styling = "filter-item"
                    break;
            }
        };

        return styling;
    }

    function handleClick (arg: string ) {
        if (!arg) {
            setSearchParams()
            return;
        }

        setSearchParams({ filter: arg })
    }

    function checkQueryOnReload () {
        if (user.role == "tutor" && !TutorFilter.includes(filter as string)) {
            setSearchParams()
            return;
        }

        if (user.role == "student" && !StudentFilter.includes(filter as string)) {
            setSearchParams()
            return
        }
    }

    useEffect(() => {
        checkQueryOnReload()
    }, [])

    return (
        <div className="courses-page-hdr-filter">
            {
                user.role == "student"
                ?
                StudentFilter.map((item, index) => (
                    <span 
                        key={index}
                        onClick={() => handleClick(item)}
                        className={handleStyling(item)}
                    >{item || "All"}</span>
                ))
                :
                TutorFilter.map((item, index) => (
                    <span 
                        key={index} 
                        onClick={() => handleClick(item)}
                        className={handleStyling(item)}
                    >{item || "All"}</span>
                ))
            }
        </div>
    )
}