import "../../styles/dashboard_index.css"
import { Routes, Route } from "react-router-dom";
import { Sidebar, Topbar } from "../../components/dashboard"
import Index from "./Index"
import Courses from "./Courses"
import AddCourse from "./Add-Course"
import CourseContent from "./CourseContent"
import Calendar from "./Calendar"
import Tasks from "./Tasks"
import Profile from "./Profile"
import { useEffect } from "react";
import { MobileTopbar } from "../../components/dashboard/MobileTopbar";

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
                <MobileTopbar />

                <div className="dashboard-main-cnt">
                    <Routes>
                        <Route index element={<Index /> } />
                        <Route path="/courses" element={<Courses /> } />
                        <Route path="/courses/add-course" element={<AddCourse /> } />
                        <Route path="/courses/:id" element={<CourseContent /> } />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/profile/*" element={<Profile /> } />
                    </Routes>
                </div>
            </div>
        </div>
    )
}