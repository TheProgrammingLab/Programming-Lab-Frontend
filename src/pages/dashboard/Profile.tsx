import { Route, Routes } from "react-router-dom"
import { ProfileSidebar } from "../../components/dashboard/profile/profile-sidebar"
import "../../styles/profile.css"
import { ProfileIndex } from "../../components/dashboard/profile/profile-index"

export default function Page () {
    return (
        <div className="profile-page">
            <span>Profile</span>

            <div className="profile-page-cnt">
                <ProfileSidebar />

                <div className="profile-page-cnt-main">
                    <Routes>
                        <Route index element={<ProfileIndex />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}