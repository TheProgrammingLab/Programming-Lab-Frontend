import "../../styles/auth.css"
import { PiChalkboardTeacherLight, PiStudent } from "react-icons/pi"

type T_RoleCheckbox = {
    value: "student" | "tutor" | ""
    label: string
    option: "student" | "tutor"
    handleClick: (arg: string) => void 
}

export function RoleCheckbox ({ value, label, option, handleClick }: T_RoleCheckbox) {
    return (
        <div className="auth-role-checkbox" onClick={() => handleClick(option)}>
            <div className={value == option ? "checkbox-fill": ""} />

            <div>
                <span>{option == "student" ? <PiStudent /> : <PiChalkboardTeacherLight />}</span>
                <span>{label}</span>
            </div>
        </div>
    )
}