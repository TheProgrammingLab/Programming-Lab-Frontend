import "../../../styles/landing-page.component.css"
import { LoremIpsum } from "../../../utils/functions"


function AboutLeft () {
    return (
        <div className="landing-page-about-left">
            <div className="landing-page-about-left-img-bck" />

            <div className="landing-page-about-left-img-clip-1" />
            <div className="landing-page-about-left-img-clip-2" />
            <div className="landing-page-about-left-img-clip-3" />
            <div className="landing-page-about-left-img-clip-4" />
        </div>
    )
}



function AboutRight () {
    return (
        <div className="landing-page-about-right">
            <div>About Us</div>
            <span>We deal with the Aspect of Professional IT Services</span>
            <span>{LoremIpsum()} {LoremIpsum()}</span>
        </div>
    )
}

export function About () {
    return (
        <div className="landing-page-about">
            <AboutLeft />
            <AboutRight />
        </div>
    )
}