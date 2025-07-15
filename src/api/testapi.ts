import { I_Response } from "../utils/types"
import { 
    AllCourses, 
    CourseData, 
    Courses, 
    GraphData, 
    StudentProfile, 
    TopCourses, 
    TutorProfile,
    CalendarEvents 
} from "./dummydata"




export function fetchUserProfile(arg: "student" | "tutor"): Promise<I_Response> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!arg) reject ({ status: 400, error: "Failed, Login again" });

            if (arg == "student") resolve ({ status: 200, data: StudentProfile });
            if (arg == "tutor") resolve ({ status: 200, data: TutorProfile });
        }, 2000)
    })
}

export function fetchLatestCourses (): Promise<I_Response> {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ status: 200, data: [...Courses] })
        }, 4000)
    })
}

export function fetchGraphData (): Promise<I_Response> {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ status: 200, data: [...GraphData] })
        }, 1000)
    })
}

export function fetchTopCourse (): Promise<I_Response> {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ status: 200, data: [...TopCourses] })
        }, 1000)
    })
}

export function fetchCourses (id: number, count: number): Promise<I_Response> {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ 
                status: 200, 
                data: { 
                    courses: AllCourses.slice((id - 1)*count, id*count ),
                    page: id,
                    total_pages: Math.round(AllCourses.length / count) 
                } 
            })
        }, 3000)
    })
} 

export function fetchCourseContent (): Promise<I_Response> {
   return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ 
                status: 200, 
                data: CourseData 
            })
        }, 3000)
    }) 
}

export function fetchCalenderEvents (): Promise<I_Response> {
   return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ 
                status: 200, 
                data: CalendarEvents 
            })
        }, 2000)
    })
}