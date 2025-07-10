import { useState } from "react"
import { RoleCheckbox, InputFields, Button } from "../../components/auth"
import "../../styles/auth.css"
import { Wrapper } from "./AuthWrapper"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks"
import { fetchUserProfile } from "../../api"
import { addMessage } from "../../redux/features/message"
import { setUser } from "../../redux/features/user"

type LoginData = {
    role: "student" | "tutor" | ""
    loginId: string
    password: string
}

function LoginForm () {

    const [ login, setLogin ] = useState<LoginData>({
        role: "",
        loginId: "",
        password: ""
    })
    const [ passwordState, setPasswordState ] = useState<"password" | "text">("password")
    const [ loading, setLoading ] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    function handleClick(arg: string) {
        setLogin({ ...login, role: arg as "student" | "tutor"})
    }

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        return (
            setLogin({ ...login, [e.target.name] :  e.target.value })
        )
    }

    function togglePasswordState () {
        if ( passwordState == "password") {
            setPasswordState("text")
        } else {
            setPasswordState("password")
        }
    }
    
    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!login.loginId || !login.password || !login.role) {
            return;
        }
        setLoading(true)
        
        const response = await fetchUserProfile(login.role);
        setLoading(false)
        
        if (response.status != 200) {
            dispatch(addMessage({ type: "failed", label: response.error as string}))    
            return;
        }

        if (response.status == 200) {
            dispatch(addMessage({ type: "passed", label: "Login Successful"}))    
            dispatch(setUser({ ...response.data }))
            navigate('/lms')
        }

        
    }

    return (
        <div className="auth-form-container">
            <div className="auth-form">
                <span>Login Your Account</span>
                <span>Enter your login details to proceed.</span>

                <form className="auth-form-main" onSubmit={handleSubmit}>
                    <div className="auth-role">
                        <RoleCheckbox value={login.role} label={"Login as Student"} option={"student"} handleClick={handleClick} />
                        <RoleCheckbox value={login.role} label={"Login as Tutor"} option={"tutor"} handleClick={handleClick} />
                    </div>

                    <InputFields id="login-id" placeholder="Your Email or Username" name="loginId" type="text" label="Login ID" value={login.loginId} handleChange={handleChange} />
                    <InputFields id="login-password" placeholder="Your Passsword" name="password" type={passwordState} label="Password" value={login.password} handleChange={handleChange} hasIcon={true} iconClick={togglePasswordState} />

                    <Button label="Login" loading={loading} />

                    <span className="forgot-password">Forgot Password?</span>

                    <span onClick={() => navigate("/signup")}>
                        Don't have an Account? Signup
                    </span>
                </form>

            </div>
        </div>
    )
}

export default function Page () {
    return (
        <Wrapper type="login">
            <LoginForm />
        </Wrapper>
    )
}