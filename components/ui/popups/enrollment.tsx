"use client"
import '@/styles/components.ui.css'
import { closePopup } from '@/store/enrollPopup'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { BsX } from 'react-icons/bs' 
import React, { useEffect, useRef, PointerEvent, ReactNode } from 'react'

// Should also contain course title and tutor, so I'll need to define a type

export function EnrollmentPopup () {
    
    const ref = useRef(document.createElement('div'))
    const containerRef = useRef(document.createElement('div'))
    const dispatch = useAppDispatch()
    const enrollPopup = useAppSelector(state => state.enrollPopup.value)

    function close () {
        dispatch(closePopup())
    }

    const handlePointerDown = (e: PointerEvent): any =>  {
        if (!containerRef.current.contains(e.target as Node)) {
            return;
        }

        close()
    }

    useEffect(() => {

        const popupContainer = containerRef?.current

        if (!popupContainer) return;
        // @ts-ignore
        popupContainer?.addEventListener('pointerdown', handlePointerDown)

        //@ts-ignore
        return () => popupContainer?.removeEventListener('pointerdown', handlePointerDown)

    }, [])

    return (
        <div className='popups-container'>
            <div className='popup-blur-bck' ref={containerRef} />

            <div className='enrollment-popup' ref={ref}>
                <span className='close-popup-icon' onClick={close}> <BsX /> </span>

                <div className='enrollment-popup-title'>
                    {
                        enrollPopup.enrolled
                        ?
                        `Enrolled for ${enrollPopup.course_title}`
                        :
                        `Do you want to enroll for ${enrollPopup.course_title}`
                    }
                </div>
                
                {
                    enrollPopup.enrolled
                    ?
                    <div className='enrollment-popup-btns'>
                        <button>Leave Course</button>
                        <button onClick={close}>Cancel</button>
                    </div>
                    :
                    <div className='enrollment-popup-btns'>
                        <button>Enroll</button>
                        <button onClick={close}>Cancel</button>
                    </div>
                }
            </div>
        </div>
    )
}