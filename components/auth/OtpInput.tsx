"use client"
import { tOtpInput } from '@/lib/types'
import '@/styles/components.ui.css'
import React from 'react'

export function OtpInput ({ otp, changeHandler }: tOtpInput) {
    
    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        const inputCheck = parseInt(e.target.value)
        
        if (!inputCheck) return;
        changeHandler(inputCheck.toString())
    }

    return (
        <input className="auth-input" value={otp} type='text' onChange={handleChange} placeholder='Enter Otp' />
    )
}