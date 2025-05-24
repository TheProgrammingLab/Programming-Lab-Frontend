import '@/styles/dashboard.css'

type tCourseContentParams =  {
    params: Promise<{ id: string }> 
}

export default async function CoursesContent ({ params }: tCourseContentParams) {
    const { id } = await params;
    return (
        <main className='dashboard-page'>
            Courses - {id}
        </main>
    )
}