"use client"
import "@/styles/auth.css"
import { tRegister } from "@/lib/types"
import { AuthInput } from "../ui/AuthInput"
import { OtpInput } from "./OtpInput"
import React, { useState } from "react"
import { SubmitButton } from "../ui/Button"
import { AuthRoleSwitch } from "./AuthSwitch"
import { capitalize, checkIfEmpty } from "@/lib/utlis"

export function LoginForm () {
    
    const [ data, setData ] = useState<Pick<tRegister, 'username' | 'password' | 'role'>>({
        username: '',
        password: '',
        role: 'student'
    });

    const [ errorMsg, setErrorMsg ] = useState<Pick<tRegister, "username" | "password">> ({
        username: '',
        password: ''
    })

    const [loading, setLoading] = useState<boolean>(false);

    function setFormData (name: string, value: string | number) {
        setErrorMsg({
            username: '',
            password: ''
        })
        setData({...data, [name]: value });
    }

    function setError (type: string) {
        setErrorMsg({...errorMsg, [type]: `${capitalize(type)} is empty`})
    }

    function login () {
        checkIfEmpty(data.password, () => setError('password'))
        checkIfEmpty(data.username, () => setError('username'))

        if (!data.username || !data.password) return;
        setLoading(true);

        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }

    function handleSwitch (arg: 'student' | 'tutor') {
        setData({...data, role: arg})
    }

    function submit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <form className="signup-form" onSubmit={submit}>
            <AuthRoleSwitch page='login' currentRole={data.role} switchRole={handleSwitch} />

            <AuthInput name="username" type="text" value={data.username} setValue={setFormData} placeholder="Username" errorMsg={errorMsg.username} />
            <AuthInput name="password" type="password" value={data.password} setValue={setFormData} placeholder="Password" errorMsg={errorMsg.password} />
            
            <SubmitButton componentClass='Primary' label='Login' action={login} loading={loading} type='submit'  />
        </form>
    )
}

export function SignupForm () {
    
    const [ data, setData ] = useState<tRegister>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student'
    });

    const [ errorMsg, setErrorMsg ] = useState<Omit<tRegister, 'role'>> ({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [loading, setLoading] = useState<boolean>(false);

    function setFormData (name: string, value: string | number) {
        
        setErrorMsg({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

        setData({...data, [name]: value });
    }

    function setError (type: string) {
        setErrorMsg({...errorMsg, [type]: `${capitalize(type)} is empty`})
    }

    function signup () {
        checkIfEmpty(data.confirmPassword, () => setError('confirmPassword'))
        checkIfEmpty(data.password, () => setError('password'))
        checkIfEmpty(data.email, () => setError('email'))
        checkIfEmpty(data.username, () => setError('username'))

        if (!data.username || !data.password || !data.email || !data.confirmPassword) return;
        setLoading(true);

        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }
    

    function handleSwitch (arg: 'student' | 'tutor') {
        setData({...data, role: arg})
    }

    function submit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <form className="signup-form" onSubmit={submit}>
            
            <AuthRoleSwitch page='signup' currentRole={data.role} switchRole={handleSwitch} />

            <AuthInput name="username" type="text" value={data.username} setValue={setFormData} placeholder="Your Username" errorMsg={errorMsg.username} />
            <AuthInput name="email" type="email" value={data.email} setValue={setFormData} placeholder="Enter Email Address" errorMsg={errorMsg.email} />
            <AuthInput name="password" type="password" value={data.password} setValue={setFormData} placeholder="Set Your Password" errorMsg={errorMsg.password} />
            <AuthInput name="confirmPassword" type="password" value={data.confirmPassword} setValue={setFormData} placeholder="Confirm Password" errorMsg={errorMsg.confirmPassword} />
            
            <SubmitButton componentClass='Primary' label='Signup' action={signup} loading={loading} type='submit'  />
        </form>
    )
}

export function OtpForm () {
    
    const [ otp, setOtp ] = useState<string>('')
    const [ loading, setLoading ] = useState<boolean>(false)

    function changeHandler(arg: string ) {
        setOtp(arg)
    }

    function verify () {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }
    
    return (
        <form className="signup-form">
            <OtpInput otp={otp} changeHandler={changeHandler} />

            <SubmitButton componentClass='Primary' label='Verify' action={verify} loading={loading} type='submit'  />
        </form>
    )
}