import "../../../styles/landing-page.component.css"
import { FaStar } from "react-icons/fa6"
import { LoremIpsum } from "../../../utils/functions"


function TestimonialCard ({ ratings=2, description, person, role }: Record<string, string | number>) {

    function ratingFunc () {
        return (
            Array.from(Array(5)).map((_, index) => (
                <span key={index} className={index + 1 <= (ratings as number) ? "testimonial-star" : ""}> 
                    <FaStar /> 
                </span>
            ))
        )
    }

    return (
        <div className="landing-page-testimonial-card">
            <div className="testimonial-card-rating">
                {ratingFunc()}
            </div>

            <div>{description}</div>

            <div className="testimonial-card-persona">
                <div></div>

                <div>
                    <span>{person}</span>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    )
}

export function Testimonial () {
    return (
        <div className="landing-page-testimonial">
            <span>Testimonials</span>

            <div className="landing-page-testimonial-cnt">
                <TestimonialCard ratings={4} description={LoremIpsum()} person="John Doe" role="Student" />
                <TestimonialCard ratings={4} description={LoremIpsum()} person="Satoru Gojo" role="Tutor" />
                <TestimonialCard ratings={4} description={LoremIpsum()} person="Mr Kareem" role="Tutor" />
            </div>
        </div>
    )
}