import { userCourse } from "./testdata"

function dashboardOngoingCourses () {
    
    const response = userCourse.filter(course => !course.ended)

    return new Promise((resolve, reject) => {
        if (response) {
            setTimeout(() => resolve({ status: 200, data: response }), 2000)
        } else {
            reject({ status: 400, err: 'Invalid ID' })
        }
    })
}

export async function fetchOngoingCourses () {
    try {
        const response = await dashboardOngoingCourses()
        return response;
    } catch (err) {
        return err;
    }
}