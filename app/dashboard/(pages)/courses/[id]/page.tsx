import '@/styles/dashboard.css'

type tCourseContentParams =  {
    params: {
        id: string
    } 
}

export default function CoursesContent ({ params }: tCourseContentParams) {
    return (
        <main className='dashboard-page'>
            Courses - {params.id}
        </main>
    )
}