import "../../styles/dashboard_index.css"
import { Routes, Route } from "react-router-dom";
import { Sidebar, Topbar } from "../../components/dashboard"
import Index from "./Index"
import Courses from "./Courses"
import CourseContent from "./CourseContent"
import { useEffect } from "react";

export default function Layout () {

    // async function userProfile() {}

    useEffect(() => {
        // fetch user profile for reload
    }, [])

    return (
        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-main">
                <Topbar />

                <div className="dashboard-main-cnt">
                    <Routes>
                        <Route index element={<Index /> } />
                        <Route path="/courses" element={<Courses /> } />
                        <Route path="/courses/:id" element={<CourseContent /> } />
                    </Routes>
                </div>
            </div>
        </div>
    )
}