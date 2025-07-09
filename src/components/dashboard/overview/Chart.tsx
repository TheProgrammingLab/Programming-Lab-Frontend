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
                 margin={{ top: 36, right: 20, left: -10, bottom: 10 }}
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