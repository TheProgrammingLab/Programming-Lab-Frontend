import { useState } from "react"
import "../../styles/auth.css"
import { Wrapper } from "./AuthWrapper"
import { useNavigate } from "react-router-dom"
import { Button, InputFields, RoleCheckbox } from "../../components/auth"
import { validateInput } from "../../utils/functions"
import { useAppDispatch } from "../../redux/hooks"
import { addMessage } from "../../redux/features/message"
import { auth_register } from "../../api/auth-api"
import { setUser } from "../../redux/features/user"
import { I_Response } from "../../utils/types"

type LoginData = {
    role: "student" | "tutor" | ""
    email: string
    username: string
    password: string
    confirmPassword: string
}

function SignupForm () {

    const [ signup, setSignup ] = useState<LoginData>({
        role: "student",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [ passwordState_1, setPasswordState_1 ] = useState<"password" | "text">("password")
    const [ passwordState_2, setPasswordState_2 ] = useState<"password" | "text">("password")

    const [ loading, setLoading ] = useState<boolean>(false)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function handleClick(arg: string) {
        setSignup({ ...signup, role: arg as "student" | "tutor"})
    }

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        return (
            setSignup({ ...signup, [e.target.name] :  e.target.value })
        )
    }

    function togglePasswordState (type: 1 | 2) {
        if (type == 1) {
            if ( passwordState_1 == "password") {
                setPasswordState_1("text")
            } else {
                setPasswordState_1("password")
            }
        } else {
            if ( passwordState_2 == "password") {
                setPasswordState_2("text")
            } else {
                setPasswordState_2("password")
            }
        }
    }

    function handleError (arg: string) {
        dispatch(addMessage({ label: arg, type: "warning" }))
    }
    
    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        
        if (!validateInput(signup.username, "username", handleError)) return;
        if (!validateInput(signup.email, "email", handleError) ) return;
        if (!validateInput(signup.password, "password", handleError) ) return;
        if (!validateInput(signup.confirmPassword, "confirm password", handleError, signup.password) ) return;
        if (!validateInput(signup.role, "Account Type", handleError) ) return;

        
        setLoading(true)

        const response: I_Response = await auth_register(signup)
        setLoading(false)
        
        if (response.status != 200) {
            dispatch(addMessage({ type: "failed", label: response?.error as string}))    
            return;
        }

        if (response.status == 200) {
            dispatch(addMessage({ type: "passed", label: "Login Successful"}))    
            dispatch(setUser({ ...response?.data }))
            navigate('/lms')
        }

    }

    return (
        <div className="auth-form-container">
            <div className="auth-form">
                <span>Sign Up Account</span>
                <span>Enter your personal data to create your account.</span>

                <form className="auth-form-main" onSubmit={handleSubmit}>
                    <div className="auth-role">
                        <RoleCheckbox value={signup.role} label={"Register as Student"} option={"student"} handleClick={handleClick} />
                        <RoleCheckbox value={signup.role} label={"Register as Tutor"} option={"tutor"} handleClick={handleClick} />
                    </div>

                    <InputFields id="signup-username" placeholder="E.g John Doe" name="username" type="text" label="Username" value={signup.username} handleChange={handleChange} />
                    <InputFields id="signup-email" placeholder="E.g johndoe@gmail.com" name="email" type="email" label="Email" value={signup.email} handleChange={handleChange} />
                    <InputFields id="signup-password" placeholder="Your Passsword" name="password" type={passwordState_1} label="Password" value={signup.password} handleChange={handleChange} hasIcon={true} iconClick={() => togglePasswordState(1)} />
                    <InputFields id="signup-password-2" placeholder="Verify Your Passsword" name="confirmPassword" type={passwordState_2} label="Confirm Password" value={signup.confirmPassword} handleChange={handleChange} hasIcon={true} iconClick={() => togglePasswordState(2)} />


                    <Button label="Sign Up" loading={loading} />

                    <span onClick={() => navigate("/login")}>
                        Already have an Account? Login
                    </span>
                </form>

            </div>
        </div>
    )
}
export default function Page () {
    return (
        <Wrapper type="register">
            <SignupForm />
        </Wrapper>
    )
}