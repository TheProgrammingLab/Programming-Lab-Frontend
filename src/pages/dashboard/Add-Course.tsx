import React, { useEffect, useState } from "react"
import { useAppSelector } from "../../redux/hooks"
import "../../styles/dashboard_courses.css"
import { useNavigate } from "react-router-dom"
import { AddCourseDescription, AddCourseInput, AddCourseModules, AddCourseThumbnail } from "../../components/dashboard/courses/AddCourseInput"
import { T_Modules, useCourseForm } from "../../hooks"
import { IoIosArrowBack } from "react-icons/io"
import { useDispatch } from "react-redux"
import { addMessage } from "../../redux/features/message"


type T_CourseMeta = {
    topic: string
    niche: string
    thumbnail: FormData | null
    description: string
}

export default function Page () {

    const [ courseMeta, setCourseMeta ] = useState<T_CourseMeta>({
        topic: "",
        niche: "",
        thumbnail: null,
        description: ""
    })
    const user = useAppSelector(state => state.user.value)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ courseForm, addModule, removeModule, moduleTopicChange, addModuleChapters, removeModuleChapters, moduleChaptersValueChange ] = useCourseForm()
    
    function handleMetaChange (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setCourseMeta({...courseMeta, [e.target.name]: e.target.value})
    }

    function handleThumbnailChange (e: React.ChangeEvent<HTMLInputElement>) {
        
        // @ts-expect-error : E>Target>Files[0]
        if (!e.target?.files[0]) {
            dispatch(addMessage({label: "No Image found", type: 'warning'}))
            return;
        }

        
        if (e.target.files[0].type != "image/png" &&
            e.target.files[0].type != "image/jpg" && 
            e.target.files[0].type != "image/jpeg" &&
            e.target.files[0].type != "image/webp") {
            dispatch(addMessage({label: "File type should be JPEG or PNG or WEBP", type: 'warning'}))
            return;
        }


        const formThumbnail = new FormData();
        formThumbnail.append("image", e.target.files[0])
        setCourseMeta({...courseMeta, thumbnail: formThumbnail})
    }

   
    function goBack () {
        navigate('/lms/courses')
    }

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
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
                <form className="add-course-form" onSubmit={handleSubmit}> 

                    <AddCourseInput 
                        type="text" 
                        value={courseMeta.niche}
                        changeHandler={handleMetaChange} 
                        placeholder={"Course Niche"} 
                        name="niche"
                    />

                    <AddCourseInput 
                        type="text" 
                        value={courseMeta.topic} 
                        changeHandler={handleMetaChange} 
                        placeholder={"Course Title"} 
                        name="topic" 
                    />

                    <AddCourseThumbnail
                        changeHandler={handleThumbnailChange} 
                        placeholder={"Course Thumbnail"} 
                        name="thunmbnail" 
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