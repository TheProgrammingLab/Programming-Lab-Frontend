import { useState } from "react"
import "../../../styles/dashboard_courses.css"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"
import { IoCheckmarkDoneSharp } from "react-icons/io5"
import { GoDash } from "react-icons/go"
import { parseDate } from "../../../utils/functions"

type ModuleContent = {
    title: string
    scheduledDate: number
    done: boolean
}

export type T_CourseModule = {
    id: number
    topic: string
    content: ModuleContent[]
}

export function CourseModule ({ id,  topic, content }: T_CourseModule) {
    
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    function toggleIsOpen () {
        setIsOpen(!isOpen)
    }

    function idFormatter (): string {
        if (id > 9) return id.toString();

        return `0${id}`
    }

    function stylingTopic () :string {
        return isOpen ? "course-module-topic module-open" : "course-module-topic"
    }

    return (
        <div className="course-module">
            <div className={stylingTopic()} onClick={toggleIsOpen}>
                <div>
                    <span>{idFormatter()}.</span>
                    <span>{topic}</span>
                </div>

                <span>
                {
                    isOpen ? <BiCaretUp /> : <BiCaretDown />
                }
                </span>
            </div>
            
            {
                isOpen
                ?
                <div className="course-module-content">
                    {
                        content.map((cnt, index) => (
                            <div key={index} className="course-module-content-item">
                                <span>{cnt.title}</span>

                                <div>
                                    <span>
                                        {
                                            cnt.scheduledDate && cnt.scheduledDate > 0
                                            ?
                                            parseDate(cnt.scheduledDate)
                                            :
                                            <GoDash />
                                        }
                                    </span>
                                    
                                    <span>
                                        {cnt.done ? <IoCheckmarkDoneSharp  /> : <GoDash />}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                :
                <></>
            }
        </div>
    )
}