import { Route, Routes } from "react-router-dom"
import { ProfileSidebar } from "../../components/dashboard/profile/profile-sidebar"
import "../../styles/profile.css"
import { ProfileIndex } from "../../components/dashboard/profile/profile-index"
import { ChangePassword } from "../../components/dashboard/profile/change-password"
import { ProfileCourses } from "../../components/dashboard/profile/profile-courses"

export default function Page () {
    return (
        <div className="profile-page">
            <span>Profile</span>

            <div className="profile-page-cnt">
                <ProfileSidebar />

                <div className="profile-page-cnt-main">
                    <Routes>
                        <Route index element={<ProfileIndex />} />
                        <Route path="/change-password" element={<ChangePassword />} />
                        <Route path="/my-courses" element={<ProfileCourses />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}