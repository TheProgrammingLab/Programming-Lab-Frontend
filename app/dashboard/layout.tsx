import { Sidebar } from "@/components/sidebar";
import '@/styles/dashboard.css'
import React from "react";
import { Popups } from './popups'

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className='dashboard-layout'>
            <Sidebar />

            <div className="dashboard-content">
                {children}
            </div>

            <Popups />
        </div>
    )
}