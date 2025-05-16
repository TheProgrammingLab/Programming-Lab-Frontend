"use client"
import { tCourseCard } from '@/lib/types'
import '@/styles/components.dashboard.css'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import { IoIosPerson } from 'react-icons/io'
import { openPoup } from '@/store/enrollPopup'
import { useAppDispatch } from '@/store/hooks'

export function CourseCard ({ id, cover_image, alt, course_title, course_description, course_tutor, enrolled, ended }: tCourseCard) {
    
    // @ts-ignore
    const ref = useRef(document.createElement('button'))
    const router = useRouter()
    const dispatch = useAppDispatch()

    function handleClick (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
        if (ref.current.contains(e.target as Node)) {
            return;
        }

        router.push(`/dashboard/courses/${id}`)
    }

    function enroll () {
        dispatch(openPoup({ enrolled, course_title, course_tutor }))
    }
    
    return (
        <div className='course-card' onClick={handleClick}>
            <div className='course-card-cover-image'></div>

            <div className='course-card-content'>
                <span>{course_title}</span>
                <span>{course_description}</span>
               
                <div>
                    <span> <IoIosPerson /> </span>
                    <span> By {course_tutor} </span>
                </div>

            </div>

        <button
            ref={ref}
            className={enrolled ? 'enrolled-button' : 'enroll-button'}
            onClick={enroll}
        >   
            {enrolled ? <div className='enrolled-indicator' /> : ''}
            {enrolled ? 'Enrolled' : 'Enroll'}
        </button>

        </div>
    )
}