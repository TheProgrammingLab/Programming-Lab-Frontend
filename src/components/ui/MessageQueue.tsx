import "../../styles/_components.css"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { Message } from "./Message"
import { useEffect } from "react"
import { clearAllMessage } from "../../redux/features/message"

export function MessageQueue () {

    const messages = useAppSelector(state => state.messages.value)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearAllMessage())
    }, [])

    return (
        <>
        {
            messages[0]
            ?
            <div className="message-queue">
                {
                    messages.map((message, index) => (
                        <Message key={index} id={message.id} type={message.type} label={message.label} />
                    ))
                }
            </div>
            :
            <></>
        }
        </>
    )
}