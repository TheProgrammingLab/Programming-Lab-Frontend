import { useState } from "react"
import "../../../styles/profile.css"
import { ProfilePasswordInput } from "./profile-input"


type T_ChangeForm = {
    current_password: string
    new_password: string
    confirm_password: string
}

export function ChangePassword () {
    
    const [ changeForm, setChangeForm ] = useState<T_ChangeForm>({
        current_password: "",
        new_password: "",
        confirm_password: ""
    })

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setChangeForm({...changeForm, [e.target.name]: e.target.value})
    }

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    
    return (
        <form className="change-password" onSubmit={handleSubmit}>
            
            <span>Change Password</span>

            <ProfilePasswordInput label="Current Password" value={changeForm.current_password} name="current_password" handleChange={handleChange} />
            <ProfilePasswordInput label="New Password" value={changeForm.new_password} name="new_password" handleChange={handleChange} />
            <ProfilePasswordInput label="Confirm Password" value={changeForm.confirm_password} name="confirm_password" handleChange={handleChange} />

            <button type="submit">
                Change Password
            </button>
        </form>
    )
}