import '@/styles/auth.css'
import Image from 'next/image'
import bannerImage from '@/public/image/authimage.png'

export function AuthBanner ({label}: { label: string }) {
    return (
        <div className='auth-banner'>
            <span> {label} </span>
            <Image src={bannerImage} alt='Banner Image' />
        </div>
    )
}