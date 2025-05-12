"use client"
import { tAuthInput } from "@/lib/types";
import "@/styles/components.ui.css"

export function AuthInput ({ type, value, setValue, placeholder, name, errorMsg }: tAuthInput) {
    

    function changeHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setValue(name, e.target.value)
    }
    
    return (
        <div className='auth-input-container'>
            <input className={errorMsg ? "auth-error-input" : "auth-input"} type={type} name={name} placeholder={placeholder} value={value} onChange={changeHandler}/>
            {
                errorMsg
                ?
                <span className="auth-input-error">{errorMsg}</span>
                :
                <></>
            }
        </div>
    )
}