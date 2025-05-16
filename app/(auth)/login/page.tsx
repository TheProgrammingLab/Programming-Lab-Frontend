import '@/styles/auth.css'
import { LoginForm } from "@/components/auth/Form";
import { ForgetPassword } from '@/components/auth/ForgotPassword';
import { AuthSwitch } from '@/components/auth/AuthSwitch';
import { AuthBanner } from '@/components/auth/AuthBanner';

export default function SignupPage () {


    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <div className='auth-form-content'>
                    <span> Welcome Back </span>
                    <span> Sign in to continue learning. Please enter your details. </span>
                    <LoginForm />

                    <ForgetPassword />

                    <AuthSwitch page='login' />
                </div>
            </div>

            <AuthBanner label='Login' />
        </div>
    )
}