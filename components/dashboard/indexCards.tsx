"use client"
import '@/styles/components.dashboard.css'
import { tIndexCards } from "@/lib/types"

export function IndexCards ({ icon, noOfContent, content, color_no }: tIndexCards) {

    function handleColoring () {
        if (color_no == 0) {
            return 'index-cards index-cards-0'
        } else if (color_no == 1) {
            return 'index-cards index-cards-1'
        } else {
            return 'index-cards index-cards-2'
        }
    }

    return (
        <div className={handleColoring()}>
            <span className="index-cards-id">
                {icon}
            </span>

            <div className="index-cards-cnt">
                <span>{noOfContent}</span>
                <span>{content}</span>
            </div>
        </div>
    )
}