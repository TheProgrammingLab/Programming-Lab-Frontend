import { AiOutlineMenu } from "react-icons/ai"
import "../../styles/dashboard.component.css"
import logo from  "/images/logo.webp"
import { openSlider } from "../../redux/features/slider"
import { useAppDispatch } from "../../redux/hooks"

export function MobileTopbar () {

    const dispatch = useAppDispatch()

    function handleClick () {
        dispatch(openSlider())
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