import "../../styles/landing-page.css"
import { Layout } from "./_layout"
import { Navbar } from "../../components/landing-page"

export default function Page () {
    return (
        <div className="landing-page">
            <Navbar />
            <Layout />
        </div>
    )
}