"use client"
import '@/styles/dashboard.css'
import { EnrollmentPopup } from "@/components/ui/popups/enrollment"
import { useAppSelector } from '@/store/hooks'

export function Popups () {
    
    const enrollment = useAppSelector(state => state.enrollPopup.value)

    return (
        <>
            {
                enrollment.open
                ?
                <EnrollmentPopup />
                :
                <></>
            }
        </>
    )
}