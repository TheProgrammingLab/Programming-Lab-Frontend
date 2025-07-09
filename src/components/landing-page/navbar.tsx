import "../../styles/landing-page.component.css"
import { useNavigate } from "react-router-dom"
import logo from "/images/logo.webp"

export function Navbar() {

    const navigate = useNavigate()

    function login() {
        navigate('/login')
    }

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <span> <img src={logo} /> </span>
                <span>Programming Lab</span>       
            </div>

            <nav className="navigation">
                <a>Home</a>
                <a>Courses</a>
                <a>Projects</a>
                <a>Community</a>

                <div className="nav-indicator">
                    <div className="nav-indicator-beam" />
                    <div className="nav-indicator-line" />
                </div>
            </nav>

            <div className="nav-btn">
                <button onClick={login}>Login</button>
            </div>
       </div>
    )
}