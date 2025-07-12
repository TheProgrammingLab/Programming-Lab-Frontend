import { useEffect, useState } from "react"
import "../../styles/dashboard_courses.css"
import { CourseModule, CourseThumbnail, T_CourseModule } from "../../components/dashboard/courses"
import { fetchCourseContent } from "../../api"


type T_CourseData = {
    niche: string
    title: string
    description: string
    thumbnail: string
    tutor: string
    enrolled: boolean
    ongoing: boolean
    modules: Omit<T_CourseModule, 'id'>[] 
}

export default function Page () {
    
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ courseData, setCourseData ] = useState<T_CourseData>({
        niche: "",
        title: "",
        description: "",
        thumbnail: "",
        tutor: "",
        enrolled: false,
        ongoing: false,
        modules: []
    })

    async function getCourseData () {
        setIsLoading(true)
        const response = await fetchCourseContent()

        setIsLoading(false)
        if (response.status == 200) {
            setCourseData({...response.data})
        }
    }

    useEffect(() => {
        getCourseData()
    }, [])
    
    return (
        <div className="course-content-page">
            <div className="course-page-content-inner">
            {
                !isLoading
                ?
                <>
                    <div className="course-content-page-hdr">
                        <div className="course-content-page-hdr-cnt">
                            <span>{courseData.niche}</span>
                            <span>{courseData.title}</span>
                            <span>{courseData.description}</span>

                            <div className="course-content-page-hdr-cnt-tutor">
                                <div>
                                    <img src='' />
                                </div>

                                <span>{courseData.tutor}</span>
                            </div>

                            <div className="course-content-page-hdr-btns">
                                {
                                    courseData.enrolled
                                    ?
                                    <button>Unenroll</button>
                                    :
                                    <button>Enroll</button>
                                }
                                <div>{courseData.ongoing ? 'Ongoing' : "Ended"}</div>
                            </div>
                        </div>

                        <CourseThumbnail thumbnail={courseData.thumbnail} extra_class="course-content-page-hdr-thumbnail" />
                    </div>

                    <div className="course-content-page-body">
                        <div className="course-content-modules-hdr">
                            <span>Content</span>
                            <span>{courseData.modules.length} Modules</span>
                        </div>

                        <div className="course-content-modules">
                            {
                                courseData.modules.map((module, index) => (
                                    <CourseModule key={index} id={index + 1} topic={module.topic} content={module.content} />
                                ))
                            }
                        </div>
                    </div>
                </>
                :
                <div className="bottom-loader">
                    <div />
                </div>
            }
            </div>
        </div>
    )
}