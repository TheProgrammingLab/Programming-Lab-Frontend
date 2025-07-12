import "../../styles/dashboard_index.css"
import { Card, Chart, ChartLoading, TopCourses } from "../../components/dashboard/overview"
import { IoBookOutline } from "react-icons/io5"
import { GoPeople, GoTasklist } from "react-icons/go"
import { useEffect, useState } from "react"
import { fetchGraphData } from "../../api"
import { useAppDispatch } from "../../redux/hooks"
import { addMessage } from "../../redux/features/message"
import { CourseCard } from "../../components/dashboard/courses"

export default function Page () {

    const [ chartdata, setChartdata ] = useState<any[]>([])
    const [ chartLoading, setChartLoading ] = useState<boolean>(true) 
    const dispatch = useAppDispatch()

    async function getChartdata () {
        const response = await fetchGraphData()

        if (response.status == 200) {
            setChartdata([...response.data])
        } else {
            dispatch(addMessage({ label: "Failed to fetch data", type: "failed" }))
        }

        setChartLoading(false)
    }

    useEffect(() => {
        getChartdata()
    }, [])

    return (
        <div className='dashboard-index'>
            <div className="dashboard-index-top">
                <Card label={"Total Courses"} data={2} icon={<IoBookOutline />} percentage={0} />
                <Card label={"Total Members"} data={12} icon={<GoPeople />} percentage={10} direction="rise" />
                <Card label={"Available Courses"} data={2} icon={<IoBookOutline />} percentage={0} />
                <Card label={"Available Tasks"} data={0} icon={<GoTasklist />} />
            </div>

            <div className="dashboard-index-middle">
                <div className="dashboard-index-chart">
                    {
                        chartLoading
                        ?
                        <ChartLoading />
                        :
                        chartdata[0]
                        ?
                        <Chart data={chartdata} xKey={"course"} dataKeys={['complete', 'incomplete']} />
                        :
                        <></>
                    }
                </div>

                <TopCourses />
            </div>

            <div className="dashboard-index-btm">
                <h2>Recommended Courses</h2>

                <div className="dashboard-index-btm-cnt">
                    <CourseCard thumbnail={""} niche={"test"} title={"title"} modules={0} date={0} slug="slugged-title" />
                    <CourseCard thumbnail={""} niche={"test"} title={"title"} modules={0} date={0} slug="slugged-title" />
                    <CourseCard thumbnail={""} niche={"test"} title={"title"} modules={0} date={0} slug="slugged-title" />
                    <CourseCard thumbnail={""} niche={"test"} title={"title"} modules={0} date={0} slug="slugged-title" />
                    <CourseCard thumbnail={""} niche={"test"} title={"title"} modules={0} date={0} slug="slugged-title" />
                </div>
            </div>
        </div>
    )
}