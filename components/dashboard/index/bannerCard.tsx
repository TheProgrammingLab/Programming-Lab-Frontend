"use client"
import '@/styles/components.dashboard.css'
import { SmallButton } from "@/components/ui/SmallButton"
import { useRouter } from "next/navigation"
import bannerImage from '@/public/image/dashboardimage.png'
import Image from 'next/image'

export function BannerCard () {

    const router = useRouter()

    return (
        <div className='dashboard-banner-card'>
            <span>ONLINE COURSES</span>
            <span>Teach and Get Taught With Online Programming Courses </span>
            <SmallButton label='Sell All' nav='/dashboard/courses' componentClass='Secondary' />

            <Image className='dashboard-banner-image' src={bannerImage} alt='Image' />
        </div>
    )
}