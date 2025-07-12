import "../../../styles/dashboard_courses.css"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { useCallback,  useState } from "react"
import { CourseCard } from "./CourseCard"
import { fetchCourses } from "../../../api"
import { addCourses, setCourses } from "../../../redux/features/courses"
import { useInfiniteScroll } from "../../../hooks"
// import { I_CourseCard } from "../../../utils/types"



export function CourseGrid () {
    const [ hasMore, setHasMore ] = useState<boolean>(true)
    const [ loading, setLoading ] = useState<boolean>(false)

    // const user = useAppSelector(state => state.user.value)
    const coursesData = useAppSelector(state => state.courses.value)

    const dispatch = useAppDispatch()

    const [ searchParams, _ ] = useSearchParams() 
    const filter = searchParams.get('filter')


    function handleFilter (arg: any[]) {
        if (!filter) return arg;

        const result = arg.filter((item) =>  { 
            if (item.state.includes(filter as string)) return item;
        })

        return result;
    }

    async function getCoursesOnLoad () {
        if (coursesData.courses[0]) return;

        const response = await fetchCourses(1, 20)
    
        setLoading(false)

        if (response.status != 200) return;

        if (response.status == 200) {
            dispatch(setCourses({...response.data}))
        }
    }

    async function updateCourseList () {
        const response = await fetchCourses(coursesData.page + 1, 20)
    
        setLoading(false)
    
        if (response.status != 200) return;
        
        dispatch(addCourses({ courses: response.data.courses, page: coursesData.page + 1 }))
        
    }

    
    const infinitScrollFunc = useCallback(() => {
        if (loading) return;
        setLoading(true);

        setTimeout(() => {
            if (!coursesData.courses[0]) {
                getCoursesOnLoad()
                setHasMore(true)
            } else {
                updateCourseList()
                setHasMore(coursesData.page + 1 < coursesData.total_pages)
            }
            
            
        }, 1000)

    }, [coursesData.courses, loading])
    
    const sentinelRef = useInfiniteScroll(infinitScrollFunc, hasMore, loading)


    return (
        <div className="courses-grid-container">
            <div className="courses-grid-inner">
                {
                    handleFilter(coursesData.courses).map((course, index) => (
                        <CourseCard key={index} slug={course.slug} thumbnail={course.thumbnail} niche={course.niche} title={course.title} modules={0} date={0} />
                    ))
                }
            </div>

            {
                loading && hasMore
                ?
                <div className="bottom-loader">
                    <div />
                </div>
                :
                <></>
            }
            <div className="sentinelRef" ref={sentinelRef} />
        </div>
    )
}