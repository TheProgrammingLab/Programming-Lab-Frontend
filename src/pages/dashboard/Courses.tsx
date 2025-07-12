import "../../styles/dashboard_courses.css"
import { useAppSelector } from "../../redux/hooks"
import { CourseFilter, CourseGrid } from "../../components/dashboard/courses"


export default function Page () {

    const user = useAppSelector(state => state.user.value)

    return (
        <div className="courses-page">
            <div className="courses-page-hdr">
                <CourseFilter />  

                {
                    user?.role == "tutor"
                    ?
                    <button className="add-course-btn">Add Course</button>
                    :
                    <></>
                }

            </div>

            <CourseGrid />
        </div>
    )
}