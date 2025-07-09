import "../../../styles/landing-page.component.css"
import { CourseCard, PreCourseCard } from "../../ui"
import { fetchLatestCourses } from "../../../api"
import { useEffect, useState } from "react"
import { I_Response } from "../../../utils/types"

export function Courses () {

    const [ courses, setCourses ] = useState<any[]>([])
    const [ loading, setLoading ] = useState<boolean>(true)

    async function fetchData () {
        try {
            const response: I_Response =  await fetchLatestCourses()

            if (response.status == 200) {
                setCourses(response.data)
            }

            setLoading(false)
        } catch (err) {

            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="landing-page-course">
            <span> Courses </span>
            <span>Latest Available Courses</span>
  
            <div>
                {
                    loading 
                    ?
                    Array.from(Array(4)).map((_, index) => (
                        <PreCourseCard key={index} />
                    ))
                    :
                    courses.map((course, index) => (
                        <CourseCard key={index} thumbnail={course.thumbnail} niche={course.niche} title={course.title} modules={course.modules} date={course.date}  />
                    ))
                }
            </div>
        </div>
    )
}