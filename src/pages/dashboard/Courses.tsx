import "../../styles/dashboard_courses.css"
import { useAppSelector } from "../../redux/hooks"
import { CourseFilter, CourseGrid } from "../../components/dashboard/courses"
import { useNavigate } from "react-router-dom"


export default function Page () {

    const user = useAppSelector(state => state.user.value)
    const navigate = useNavigate()

    function addCourseBtn () {
        if (user.role ===  'student') return;
        navigate('/lms/courses/add-course')
    }

    return (
        <div className="courses-page">
            <div className="courses-page-hdr">
                <CourseFilter />  

                {
                    user?.role == "tutor"
                    ?
                    <button className="add-course-btn" onClick={addCourseBtn}>
                        Add Course
                    </button>
                    :
                    <></>
                }

            </div>

            <CourseGrid />
        </div>
    )
}