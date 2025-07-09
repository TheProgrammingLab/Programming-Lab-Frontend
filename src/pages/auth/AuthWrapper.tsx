import "../../styles/auth.css"
import { ReactNode } from "react"
import picture from "/images/reading.webp"
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

type PageType = "login" | "register" | "forgot-password"

function Steps ({ id, label, active=false}: { id: number, label: string, active?: boolean }) {
    return (
        <div className={active ? "auth-left-instruction-block-active" : "auth-left-instruction-block"}>
            <span>{id}</span>
            <span>{label}</span>
        </div>
    )
}

function LoginBlock () {
    return (
        <div className="auth-left-instruction">
            <span>Programming Lab</span>

            <span>Welcome Back</span>

            <span>Enter your Login details to continue with us</span>
            
            <Steps id={1} label="Input your name or email and password" active={true} />
            <Steps id={2} label="Continue on Dashboard" />
        </div>
    )
}

function SignupBlock () {
    return (
        <div className="auth-left-instruction">
            <span>Programming Lab</span>

            <span>Get Started With Us</span>

            <span>Complete these easy steps to register your account</span>
            
            <Steps id={1} label="Signup your Account" active />
            <Steps id={2} label="Perform Account Verification" />
            <Steps id={3} label="Set up Profile" />
        </div>
    )
}


function ForgotPasswordBlock () {
    return (
        <div className="auth-left-instruction">
            <span>Programming Lab</span>

            <span>Get Started With Us</span>

            <span>Verify your account</span>
            
            <Steps id={1} label="Signup your Account" />
            <Steps id={2} label="Perform Account Verification" active />
            <Steps id={3} label="Set up Profile" />
        </div>
    )
}


function PageLeft ({ type } : { type: PageType }) {

    const navigate = useNavigate()

    function handleDisplay () {
        switch(type){
            case "login":
                return <LoginBlock />
            case "register":
                return <SignupBlock />
            case "forgot-password":
                return <ForgotPasswordBlock />
            default:
                return <LoginBlock /> 
        } 
    }

    function goBack () {
        navigate('/')
    }

    return (
        <div className="auth-left">
            <div className="auth-back" onClick={goBack}>
                <IoIosArrowBack />
            </div>

            <img src={picture} />

            {
                handleDisplay()
            }
        </div>
    )
}

export function Wrapper ({ children, type }: { children: ReactNode, type: PageType }) {
    return (
        <div className="auth">
            <PageLeft type={type}/>

            <>
                {children}
            </>
        </div>
    )
}