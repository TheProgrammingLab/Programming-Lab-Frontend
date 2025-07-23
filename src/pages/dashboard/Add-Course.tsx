import React, { useEffect, useState } from "react"
import { useAppSelector } from "../../redux/hooks"
import "../../styles/dashboard_courses.css"
import { useNavigate } from "react-router-dom"
import { AddCourseDescription, AddCourseInput, AddCourseModules } from "../../components/dashboard/courses/AddCourseInput"
import { T_Modules, useCourseForm } from "../../hooks"
import { IoIosArrowBack } from "react-icons/io"


type T_CourseMeta = {
    topic: string,
    description: string
}

export default function Page () {

    const user = useAppSelector(state => state.user.value)
    const navigate = useNavigate()
    const [ courseMeta, setCourseMeta ] = useState<T_CourseMeta>({
        topic: "",
        description: ""
    })
    const [ courseForm, addModule, removeModule, moduleTopicChange, addModuleChapters, removeModuleChapters, moduleChaptersValueChange ] = useCourseForm()
    
    function handleMetaChange (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setCourseMeta({...courseMeta, [e.target.name]: e.target.value})
    }
    
    function goBack () {
        navigate('/lms/courses')
    }
   
    useEffect(() => {
        if (user.role === "student") {
            navigate('/lms/courses')
            return;
        }
    }, [])

    return (
        <div className="add-course-page">
            <div className="add-course-page-title">
                <span onClick={goBack}> <IoIosArrowBack /> </span>
                <span>Create New Course</span>
            </div>

            <div className="add-course-page-cnt">
                <form className="add-course-form">
                    <AddCourseInput 
                        type="text" 
                        value={courseMeta.topic} 
                        changeHandler={handleMetaChange} 
                        placeholder={"Course Title"} 
                        name="topic" 
                    />

                    <AddCourseDescription 
                        value={courseMeta.description} 
                        changeHandler={handleMetaChange} 
                        placeholder={"Course Description"} 
                        name="description" />

                    <button 
                        className="add-course-module-btn"
                        type="button"
                        onClick={addModule as () => void}
                    >
                        Add Module
                    </button>

                    {
                        (courseForm as T_Modules[]).map((module, index) => (
                            
                            <AddCourseModules 
                                key={index}
                                topic_id={module.topic_id} 
                                topic={module.topic} 
                                topicChangeHandler={moduleTopicChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                                chapters={module.chapters} 
                                chaptersChangeHandler={moduleChaptersValueChange as (module_id: string, e:React.ChangeEvent<HTMLInputElement>) => void }
                                addModuleChapters={addModuleChapters as (topic_id: string) => void}
                                removeModuleChapters={removeModuleChapters as (topic_id: string, module_id: string) => void}
                                removeModule={removeModule as (topic_id: string) => void }
                            />
                        
                        ))
                    }
                </form>
            </div>

            <div className="add-course-form-btn">
                <button type="button">
                    Publish
                </button>

                <button type="button">
                    Save as Draft
                </button>
            </div>
        </div>
    )
}