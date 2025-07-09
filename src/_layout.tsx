import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landing-page/Page"
import LoginPage from "./pages/auth/Login"
import SignupPage from "./pages/auth/Register"
import Dashboard from "./pages/dashboard/_layout"

export function Layout () {
    return (
        <Routes>
            <Route path="/*" element={<LandingPage />} /> 
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/lms/*" element={<Dashboard />} />
        </Routes>
    )
}