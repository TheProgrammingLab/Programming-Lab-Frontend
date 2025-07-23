import React from "react"
import "../../../styles/dashboard_courses.css"
import { PiDotsSixBold } from "react-icons/pi"
import { BsDashCircle } from "react-icons/bs"

type T_ItemInput = {
    type: string
    value: string | number
    changeHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder: string
    name: string
}


type T_AddCourseModule = {
    topic_id: string
    topic: string
    topicChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    chapters: { value: string, module_id: string }[]
    chaptersChangeHandler: (topic_id: string ,e: React.ChangeEvent<HTMLInputElement>) => void
    addModuleChapters: (topic_id: string) =>  void
    removeModuleChapters: (topic_id: string, module_id: string) => void
    removeModule: (topic_id: string) => void
}

export function AddCourseInput ({ type, value, changeHandler, placeholder, name }: T_ItemInput) {
    return (
        <div className="add-course-input">
            <span> <PiDotsSixBold /> </span>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={changeHandler}
            />
        </div>
    )
}

export function AddCourseDescription({ value, changeHandler, placeholder, name }: Omit<T_ItemInput, "type">) {
    return (
        <div className="add-course-input">
            <span> <PiDotsSixBold /> </span>
            <textarea 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={changeHandler}
            />
        </div>
    )
}

export function AddCourseModules({ chapters, topic, topic_id, chaptersChangeHandler, topicChangeHandler, addModuleChapters, removeModuleChapters, removeModule }: T_AddCourseModule) {

    function moduleChapterChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {
        chaptersChangeHandler(topic_id, e)
    }

    function addChapter () {
        addModuleChapters(topic_id)
    }

    function deleteModule () {
        removeModule(topic_id)
    }

    function deleteModuleChapter (id: string) {
        removeModuleChapters(topic_id, id)
    }
    
    return (
        <div className="add-course-modules">

            <span> • </span>

            <div className="add-course-modules-item">

                <div className="add-course-module-title">
                    <span> <PiDotsSixBold /> </span>                    
                    <input type="text" placeholder="Module Topic" value={topic} name={topic_id} onChange={topicChangeHandler} />
                </div>

                <div className="add-course-modules-list">
                    {
                        chapters[0]
                        ?
                        chapters.map((chapter, index) => (
                            <div className="add-course-modules-list-cnt" key={index}>
                                <span>•</span>
                                <span> <PiDotsSixBold /> </span>
                                <input 
                                    type="text" 
                                    name={chapter.module_id} 
                                    placeholder={`Chapter ${index + 1} Title`} 
                                    value={chapter.value}
                                    onChange={moduleChapterChangeHandler}
                                />

                                <button type="button" onClick={() => deleteModuleChapter(chapter.module_id)}>
                                    <BsDashCircle />
                                </button>
                            </div>
                        ))
                        :
                        <></>
                    }
                </div>

                
                <div className="add-course-modules-btn">
                    <button type="button" onClick={addChapter}>Add Module Title</button>
                    <button type="button" onClick={deleteModule}>Remove Module</button>
                </div>
            </div>
        </div>
    )
}