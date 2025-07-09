import "../../../styles/dashboard.component.css"
import { ReactNode } from "react"
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai"
import { BsDashCircle } from "react-icons/bs"

type T_OverviewCard = {
    label: string
    data: number
    icon: ReactNode
    percentage?: number
    direction?: "rise" | "fall" | "middle"
}

export function Card ({ label, data, icon, percentage, direction="middle" }: T_OverviewCard) {
     
    function handleDirectionIconType (): ReactNode {
        if (direction == "rise") return <AiOutlineRise />
        if (direction == "fall") return <AiOutlineFall />
        if (direction == "middle") return <BsDashCircle />

        return <></>
    }
    
    return (
        <div className="overview-card">
            <div className="overview-card-top">
                <div>
                    <span>{label}</span>
                    <span>{data}</span>
                </div>
                
                <div>{icon}</div>
            </div>

            {
                percentage || percentage == 0
                ?
                <div className="overview-card-btm">
                    <span className={`direction-${direction}`}>{handleDirectionIconType()} {percentage}% </span> vs last month
                </div>
                :
                <></>
            }
        </div>
    )
}