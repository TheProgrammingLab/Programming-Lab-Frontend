import "../../styles/_components.css"
import { useEffect } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { removeMessage } from "../../redux/features/message"

type T_Message = {
    id: string
    type: "passed" | "failed" | "warning"
    label: string
}

export function Message ({ id, type, label }: T_Message) {

    const dispatch = useAppDispatch()

    function messageStyle () {
        if (type == "failed") return "message-failed";
        if (type == "passed") return "message-passed";
        if (type == "warning") return "message-warning";
    }

    useEffect (() => {
        setTimeout(() => {
            dispatch(removeMessage(id))
        }, 1200)
    },[])

    return (
        <div className="message">
            { label }

            <div className={messageStyle()}/>
        </div>
    )
}