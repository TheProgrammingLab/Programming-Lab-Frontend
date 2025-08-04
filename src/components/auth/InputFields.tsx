import React from "react"
import "../../styles/auth.css"
import { IoEye, IoEyeOff } from "react-icons/io5"

type T_InputField = {
    id: string
    type: string
    label: string
    placeholder: string
    value: string
    name: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    hasIcon?: boolean
    iconClick?: () => void
}

export function InputFields ({ id,  type, placeholder, name, label, value, handleChange, hasIcon=false, iconClick }: T_InputField) {
    return (
        <div className="auth-input-field">
            <label htmlFor={id}>{label}</label>

            <input type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} autoComplete="" />

            {
                hasIcon ?
                <span className="auth-input-icon" onClick={iconClick}> 
                    {
                     type == "password"
                     ?
                     <IoEyeOff />
                     :
                     <IoEye />
                    } 
                </span>
                :
                <></>
            }
        </div>
    )
}