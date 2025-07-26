// import { useState } from "react"
import "../../../styles/dashboard.component.css"
import { 
    ResponsiveContainer,
    Bar,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend
} from "recharts"

type T_ChartDataItem = {
    [key: string]: string | number
}

type T_StackedBarChartProps = {
    data: T_ChartDataItem[];
    dataKeys: string[];
    xKey: string;
    colors?: string[];
}

export function Chart ({ data, dataKeys, xKey, colors=['#7e3838', '#c58b8b'] }: T_StackedBarChartProps) {
    
    // const [ chartPos, setChartPos ] = useState<Record<string, number>>(
    //     { top: 36, right: 20, left: -10, bottom: 10 }
    // )

    function chartPostioning () {
        const isMobile = window.innerWidth < 600

        if (isMobile) {
            return { top: 36, right: 0, left: -40, bottom: 10 }
        }

        return { top: 36, right: 20, left: -10, bottom: 10 }
    }
    
    return (
        <div className="overview-chart">
            <div className="overview-chart-title">
                <h2> Courses </h2>
            </div>
            <ResponsiveContainer>
                <BarChart
                 data={data}
                 barSize={24}
                 barGap={30}
                 margin={chartPostioning()}
                >
                    <CartesianGrid 
                        stroke="#f3f3f3"
                        vertical={false}
                    />
                    <XAxis dataKey={xKey} />
                    <YAxis />
                    {/* <Tooltip /> */}
                    <Legend />

                    {
                        dataKeys.map((key, index) => (
                            <Bar 
                                key={key} 
                                dataKey={key} 
                                stackId="stack"
                                isAnimationActive={true}
                                animationDuration={1000}
                                animationBegin={index * 200}
                                fill={colors[index % colors?.length]} 
                            />
                        ))
                    }
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export function ChartLoading () {
    return (
        <div className="overview-chart-loading">
            <div className="chart-loader" />
        </div>
    )
}