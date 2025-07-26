import { AiOutlineMenu } from "react-icons/ai"
import "../../styles/dashboard.component.css"
import logo from  "/images/logo.webp"

export function MobileTopbar () {

    function handleClick () {

    }
    
    return (
        <div className="mobile-topbar">
            <div className="logo">
                <span className="logo-icon">
                    <img src={logo} />
                </span>
                <span className="logo-text">Programming Lab</span>
            </div>

            <div className="menu-icon" onClick={handleClick}>
                <AiOutlineMenu />
            </div>
        </div>
    )
}