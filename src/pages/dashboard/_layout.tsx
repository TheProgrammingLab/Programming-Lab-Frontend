import "../../styles/dashboard.css"
import { Routes, Route } from "react-router-dom";
import { Sidebar, Topbar } from "../../components/dashboard"
import Index from "./Index"

export default function Layout () {
    return (
        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-main">
                <Topbar />

                <div className="dashboard-main-cnt">
                    <Routes>
                        <Route index element={<Index /> } />
                    </Routes>
                </div>
            </div>
        </div>
    )
}