import { Banner, LanguageSlide, OurOffer, About, Courses, Testimonial, Footer } from "../../components/landing-page/home"
import "../../styles/landing-page.css"

export default function Home () {
    return (
        <div className="landing-page-home">
            <Banner />
            <LanguageSlide />
            <OurOffer />
            <About />
            <Courses />
            <Testimonial />
            <Footer />
        </div>
    )
}