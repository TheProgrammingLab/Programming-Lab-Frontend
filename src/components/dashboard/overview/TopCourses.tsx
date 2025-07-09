import { useEffect, useState } from "react"
import "../../../styles/dashboard.component.css"
import { fetchTopCourse } from "../../../api"
import { useNavigate } from "react-router-dom"
import { ChartLoading } from "./Chart"

type T_CourseCard = {
    id: number
    title: string
    enrollment: string
    course_id: string
}

function CourseCard ({ id, title, enrollment, course_id }: T_CourseCard ) {
    
    const navigate = useNavigate()

    function toCourse () {
        navigate(`/lms/courses/${course_id}`)
    }

    return (
        <div className="top-courses-card" onClick={toCourse}>
            <span>#{id}</span>
            <span>{title}</span>
            <span>{enrollment} Students</span>
        </div>
    )
}

export function TopCourses () {


    const [ courses, setCourses ] = useState<any[]>([])
    const [ coursesLoading, setCoursesLoading ] = useState<boolean>(true) 

    async function getData () {
        const response = await fetchTopCourse()

        if (response.status == 200) {
            setCourses([...response.data])
        }

        setCoursesLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="top-courses">
            <h2>Top Courses</h2>

            <div className="top-courses-cnt">
                {
                    coursesLoading
                    ?
                    <ChartLoading />
                    :
                    <div className="top-courses-cnt-inner">
                        {
                            courses.map((course, index) => (
                                <CourseCard key={index} id={index + 1} title={course.title} enrollment={course.enrollment} course_id={course.course_id}/>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )   
}