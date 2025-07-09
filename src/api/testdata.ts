import { I_Response } from "../utils/types"

const Courses = [
    {
        id: "0",
        thumbnail: "", 
        niche: "Frontend Development", 
        title: "React For Absolute Beginners", 
        modules: 20, 
        date: Date.now()
    },
    {
        id: "1",
        thumbnail: "", 
        niche: "Backend Development", 
        title: "ExpressJS For Backend Development", 
        modules: 32, 
        date: Date.now()
    },
    {
        id: "2",
        thumbnail: "", 
        niche: "Backend Development", 
        title: "ExpressJS For Backend Development", 
        modules: 32, 
        date: Date.now()
    },
    {
        id: "3",
        thumbnail: "", 
        niche: "Backend Development", 
        title: "ExpressJS For Backend Development", 
        modules: 32, 
        date: Date.now()
    }
]

const GraphData = [
    { course: "JS", complete: 10, incomplete: 90 },
    { course: "Ts", complete: 20, incomplete: 80 },
    { course: "FrontEnd", complete: 0, incomplete: 100 },
    { course: "Backend", complete: 12, incomplete: 88 },
    { course: "React", complete: 78, incomplete: 22  },
    { course: "HTML", complete: 90, incomplete: 10 },
    { course: "CSS", complete: 40, incomplete: 60 },
    { course: "Python", complete: 10, incomplete: 90 },
    { course: "AI", complete: 32, incomplete: 68 },
    { course: "LLM", complete: 58, incomplete: 42  }
]

const TopCourses = [
    {
        course_id: "698340939", 
        title: "React For Absolute Beginners", 
        enrollment: 40
    },

    {
        course_id: "6983456998", 
        title: "Js", 
        enrollment: 32
    },

    {
        course_id: "6983456998", 
        title: "Java", 
        enrollment: 24
    },

    {
        course_id: "6983456998", 
        title: "Python", 
        enrollment: 20
    },

    {
        course_id: "6983456998", 
        title: "Python-2", 
        enrollment: 16
    },

    {
        course_id: "6983456998", 
        title: "Python-3", 
        enrollment: 12
    },

]

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