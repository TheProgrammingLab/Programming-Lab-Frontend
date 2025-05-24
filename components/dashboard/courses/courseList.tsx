"use client"
import "@/styles/components.dashboard.css"
import { useAppSelector } from "@/store/hooks"
import { CourseCard } from "../courseCard"
import { tCourseCard } from "@/lib/types"


type response = {
    response: {
        status: number,
        err?: string,
        data: tCourseCard[]
    }
}

export function CourseListContainer ({ response }: response) {
    
    const filter = useAppSelector(state => state.courseListFilter.value)

    const checkForCourses = response?.data?.filter((data: tCourseCard) => (data.enrolled));

    function handleFilter() {
        if (filter == 'All' && response?.data[0]) {
            return (
                response?.data?.map((data: tCourseCard, index: number) => (
                    <CourseCard 
                        key={index} 
                        course_title={data.course_title} 
                        course_description={data.course_description} 
                        course_tutor={data.course_tutor}
                        cover_image={data.cover_image}
                        alt={data.alt}
                        enrolled={data.enrolled}
                        id={data.id}
                        ended={data.ended}
                    />
                ))
            )
        } else if (filter == 'Enrolled' && checkForCourses[0]) {
            return (
                checkForCourses?.map((data: tCourseCard, index: number) => (
                    <CourseCard 
                        key={index} 
                        course_title={data.course_title} 
                        course_description={data.course_description} 
                        course_tutor={data.course_tutor}
                        cover_image={data.cover_image}
                        alt={data.alt}
                        enrolled={data.enrolled}
                        id={data.id}
                        ended={data.ended}
                    />
                ))
            )    
        } else if (filter == 'Enrolled' && !checkForCourses[0]) {
            return (
                <div className="no-course">
                    No Enrolled Course
                </div>
            )
        } else {
            return (
                <div className="no-course">
                    No Available Course
                </div>
            )
        }
    }

    return (
        <div className="course-list-container">
            <div className="course-list-carousel">
                {
                    handleFilter()
                }
            </div>
        </div>
    )
}