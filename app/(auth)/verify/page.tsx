import '@/styles/auth.css'
import { AuthBanner } from '@/components/auth/AuthBanner';
import { OtpForm } from '@/components/auth/Form';

// MAke this return to the Sign up

export default function VerificationPage () {

    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <div className='auth-form-content'>
                    <span> Verification </span>
                    <span> Enter 6-digit OTP to verify your email. </span>

                    <OtpForm />

                </div>
            </div>

            <AuthBanner label='Verify' />
        </div>
    )
}