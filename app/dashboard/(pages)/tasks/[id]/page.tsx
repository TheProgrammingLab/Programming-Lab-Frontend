import '@/styles/dashboard.css'

type tComponentParams = {
    params: {
        id: string
    }
}

export default function AssignmentDetailsPage ({ params }: tComponentParams) {


    console.log(params)

    return (
        <main className="dashboard-page">
            Assignment details - {params.id}
        </main>
    )
}