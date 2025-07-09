import React, { useState } from "react"
import "../../../styles/landing-page.component.css"

function FooterTitle () {
    return (
        <div className="footer-title">
            <span>The Programming Lab</span>

            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
    )
}

function FooterNav() {
    return (
        <nav className="footer-nav">
            <div>
                <span>Home</span>
                <span>About</span>
                <span>Projects</span>
                <span>Community</span>
            </div>

            <div>
                <span>Courses</span>
                <span>Frontend Development</span>
                <span>Javascript</span>
                <span>React</span>
            </div>

            <div>
                <span>Contact Us</span>
                <span>Help center</span>
                
            </div>
        </nav>
    )
}

function FooterContact () {

    const [formdata, setFormdata] = useState<Record<string, string>>({
        email: "",
        message: ""
    })

    function handleChange (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormdata({...formdata, [e.target.name] : e.target.value})
    }

    function handleClick () {}

    return  (
        <div className="footer-contact">
            <span>Report Issue</span>

            <div>
                <input type='email' name="email" value={formdata.email} onChange={handleChange} placeholder="Your Email" />
                <textarea name="message" value={formdata.message} onChange={handleChange} placeholder="Message"></textarea>
            </div>

            <button onClick={handleClick}>
                Submit
            </button>
        </div>
    )
}

export function Footer() {
    return (
        <div className="landing-page-footer">
            <div className="footer">
                <FooterTitle />
                <FooterNav />
                <FooterContact />
            </div>

            <div className="footer-copyright">
                © 2025 ProgrammingLab. All Rights Reserved.
            </div>
        </div>
    )
}