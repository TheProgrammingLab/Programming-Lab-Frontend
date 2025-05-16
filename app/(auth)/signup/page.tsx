import '@/styles/auth.css'
import { SignupForm } from "@/components/auth/Form";
import { AuthSwitch } from '@/components/auth/AuthSwitch';
import { AuthBanner } from '@/components/auth/AuthBanner';

export default function SignupPage () {


    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <div className='auth-form-content'>
                    <span> Sign up to Nexus </span>
                    <span> Enter your details to register for Nexus programmimg lab LMS. </span>
                    <SignupForm />

                    <AuthSwitch page='signup' />
                </div>
            </div>

            <AuthBanner label='Signup' />
        </div>
    )
}