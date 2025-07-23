import { useState, useEffect } from "react";
import { generateRandomId } from "../utils/functions";

export type T_Modules = {
    topic_id: string
    topic: string
    chapters: {value: string, module_id: string}[]
}

// For add course form
export function useCourseForm () {
    
    const [ courseForm, setCourseForm ] = useState<T_Modules[]>([]);
    
    
    function addModule () {
        setCourseForm([...courseForm, {
            topic_id: generateRandomId(),
            topic: '',
            chapters: [{  module_id:generateRandomId(), value: '' }]
        }])
    }
    
    function removeModule (topic_id: string) {
        if(!courseForm[1]) {
            setCourseForm([
                {
                    topic_id: generateRandomId(),
                    topic: '',
                    chapters: [{ module_id: generateRandomId(), value: '' }]
                }
            ])
            return;
        }

        setCourseForm(courseForm.filter(cnt => cnt.topic_id != topic_id))
    }
    
    function moduleTopicChange (e: React.ChangeEvent<HTMLInputElement>) {
        const topicID = e.target.name;

        const topic_exist = courseForm.find(content => content.topic_id == topicID);
        
        if (!topic_exist) return;
        
        
        setCourseForm(
            courseForm.map(content => {
                if (content.topic_id == topicID) {
                    content.topic = e.target.value
                }
                return content
            })
        )
        
    }

    function addModuleChapters (topic_id: string) {
        const topic_exist = courseForm.find(content => content.topic_id == topic_id);

        if (!topic_exist) return;

        setCourseForm(
            courseForm.map(content => {
                if (content.topic_id == topic_id) {
                    content.chapters.push({
                        value: "",
                        module_id: generateRandomId()
                    })
                }
                return content;
            })
        )
    }

    function removeModuleChapters (topic_id: string, module_id: string) {
        const topic_exist = courseForm.find(content => content.topic_id == topic_id);
        
        if (!topic_exist) return;

        if (!topic_exist.chapters[1]) {
            setCourseForm(courseForm.map(item => {
                if (item.topic_id == topic_id) {
                    item.topic_id = topic_exist.topic_id
                    item.topic = topic_exist.topic
                    item.chapters = [{ module_id: generateRandomId(), value: '' }]
                };      
                    return item;
                }
            ))
        }
            
        setCourseForm(courseForm.map(item => {
            if (item.topic_id == topic_id) {
                item.chapters = item.chapters.filter(chapter => chapter.module_id != module_id) 
            }

            return item;
        }
        ))
    
    }
    
    function moduleChaptersValueChange (topic_id: string, e: React.ChangeEvent<HTMLInputElement> ) {
        const topic_exist = courseForm.find(content => content.topic_id == topic_id);
        if (!topic_exist) return;

        setCourseForm(courseForm.map(item => {
            if (item.topic_id == topic_id) {

                item.chapters = item.chapters.map(chapter => {
                    if (chapter.module_id === e.target.name) {
                        chapter.value = e.target.value
                    }

                    return chapter;
                })
            }

            return item;
        }
        ))

    }


    useEffect(() => {
        setCourseForm([
            {
                topic_id: generateRandomId(),
                topic: '',
                chapters: [{ module_id: generateRandomId(), value: '' }]
            }
        ])
    }, [])

    return [
            courseForm as T_Modules[], 
            addModule, 
            removeModule, 
            moduleTopicChange, 
            addModuleChapters, 
            removeModuleChapters, 
            moduleChaptersValueChange
        ];
}