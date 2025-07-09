import { useNavigate } from "react-router-dom"
import "../../../styles/landing-page.component.css"

function BannerLeftExtra ({ title, description }: Record<string, string>) {
    return (
        <div className="landing-page-banner-left-extra-cnt">
            <span>{title}</span>
            <span>{description}</span>
        </div>
    )
}

function BannerLeft () {
    
    const navigate = useNavigate()
    
    return (
        <div className="landing-page-banner-left">
            <div>Build Your Tech Skills</div>
            <div>Master Real Tech Skills</div>

            <span>Join thousands of enthuisiastic learners building careers through hands-on projects, expert mentorship and industry connections. </span>
            
            <div className="landing-page-banner-left-btns">
                <button onClick={() => navigate('/signup')}>Start Learning Free</button>
                <button>Explore Courses</button>
            </div>

            <div className="landing-page-banner-left-extra">
                <BannerLeftExtra title="4.9/5" description="Student Rating" />
                <BannerLeftExtra title="20+" description="Courses" />
                <BannerLeftExtra title="100%" description="Real-Life Projects" />
                <BannerLeftExtra title="100%" description="Collaborations" />
            </div>
        </div>
    )
}

function BannerRight () {
    return (
        <div className="landing-page-banner-right">
            <div className="banner-shape-1" />
            <div className="banner-shape-2" />

            <div className="banner-right-img">
                <div className="banner-right-img-1" />
                <div className="banner-right-img-2" />
            </div>
        </div>
    )
}

export function Banner () {
    return (
        <div className="landing-page-banner">
            <img src="/images/bck.webp" className="landing-page-banner-img" />
            <BannerLeft />
            <BannerRight />
        </div>
    )
}