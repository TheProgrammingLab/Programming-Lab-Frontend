import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Courses from "./Courses"

export function Layout() {
    return (
        <Routes>
            <Route index element={<Home />} />  
            <Route path="/courses" element={<Courses />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}