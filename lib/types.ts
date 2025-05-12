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