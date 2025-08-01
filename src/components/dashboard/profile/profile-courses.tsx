import { useEffect, useState } from "react"
import "../../../styles/profile.css"
import { fetchUserCourses } from "../../../api"
import { I_CourseCard } from "../../../utils/types"
import { CourseCard } from "../courses"

export function ProfileCourses () {

    const [ loading, setLoading ] = useState<boolean>(true)
    const [ userCourse, setUserCourse ] = useState<I_CourseCard[]>([])

    async function getUserCourse () {
        const response = await fetchUserCourses()
        setLoading(false)

        if (response.status != 200) {
            return;
        }

        setUserCourse([...response.data])
    }

    useEffect(() => {
        getUserCourse()
    }, [])

    return (
        <div className="profile-courses">
            <span>My Courses</span>

            <div className="profile-courses-carousel">
                {
                    loading
                    ?
                    <div className="bottom-loader">
                        <div />
                    </div>
                    :
                    <div className="profile-courses-carousel-grid">
                        {
                            userCourse.map((course, index) => (
                                <CourseCard type="personal" key={index} slug={course.slug} thumbnail={course.thumbnail} niche={course.niche} title={course.title} modules={0} date={0} />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}