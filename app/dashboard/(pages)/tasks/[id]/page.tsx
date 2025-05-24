import '@/styles/dashboard.css'

type tComponentParams = {
    params: Promise<{ id: string }> 
}

export default async function AssignmentDetailsPage ({ params }: tComponentParams) {

    const {id} = await params

    return (
        <main className="dashboard-page">
            Assignment details - {id}
        </main>
    )
}