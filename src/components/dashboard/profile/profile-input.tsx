import { useState } from "react"
import "../../../styles/profile.css"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"


type T_ProfileInput = {
    label: string
    value: string
    name: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function ProfileInput ({ label, value, handleChange, name }: T_ProfileInput) {
    return (
        <div className="profile-index-input">
            <span>{label}</span>
            <input 
                type="text"
                name={name} 
                value={value} 
                onChange={handleChange}
            />
        </div>
    )
}


export function ProfilePasswordInput ({ label, value, name, handleChange }: T_ProfileInput ) {
    
    const [ isVisible, setIsVisible ] = useState<boolean>(false)

    function toggleVisibility () {
        setIsVisible(!isVisible)
    }
   
    return (
        <div className="profile-index-input">
            <span>{label}</span>
            <input 
                name={name}
                type={isVisible ? "text" : "password"} 
                value={value} 
                onChange={handleChange}
            />

            <span onClick={toggleVisibility} className="profile-index-input-icon">
                {
                    isVisible ? <IoMdEye /> : <IoMdEyeOff />
                }
            </span>
        </div>
    )
}