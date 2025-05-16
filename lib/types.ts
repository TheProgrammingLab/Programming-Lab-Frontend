import React from "react"

export type tComponentClass = {
    componentClass: 'Primary' | 'Secondary', 
}

export type tAuthInput = {
    type: string,
    value: string | number,
    placeholder: string,
    name: string,
    setValue: (arg1: string, arg2: string | number) => void,
    errorMsg: string
}

export type tButton = tComponentClass & {
    type?: 'submit' | 'reset' | 'button' | undefined,
    label: string,
    action: () => void
}

export type tSubmitButton = tButton & {
    loading: boolean
}

export type tLogin = {
    email: string,
    password: string,
    role: 'student' | 'tutor'
}

export type tRegister = tLogin & {
    username: string,
    confirmPassword: string
}

export type tAuthSwitch = {
    page: "login" | 'signup'
}

export type tOtpInput = {
    otp: string,
    changeHandler: (arg: string) => void
}

export type tAuthSwitchRole = tAuthSwitch & {
    currentRole: 'student' | 'tutor', 
    switchRole: (arg: 'student' | 'tutor') => void
}

export type tSidebaritem = {
    label: string,
    nav: string,
    icon: React.ReactNode
}

export type tSearchbar = {
    placeholder: string,
    value: string,
    handleChange: (arg: string) => void,
    handleClick: () => void
}

export type tIconButton = {
    icon: React.ReactNode,
    action: () => void
}

export type tCourseCard = {
    id: string,
    cover_image: string,
    alt: string,
    course_title: string,
    course_description: string,
    course_tutor: string,
    enrolled: boolean,
    ended: boolean
}

export type tIndexCards = {
    icon: React.ReactNode, 
    noOfContent: number | null, 
    content: string, 
    color_no: number
}

export type tCalendarItem = {
    day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun',
    date: number 
}

export type tListTaskCard = {
    id: string | number,
    task: string,
    due_date: number
}
