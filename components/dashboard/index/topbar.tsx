'use client'
import '@/styles/dashboard.css'
import { useEffect, useState } from 'react'
import { Searchbar } from '../searchbar'
import { IconButton } from '@/components/ui/IconButtons'
import { BsBell } from 'react-icons/bs'
import { getUserinfo } from '@/api/userinfo'
import { tRegister } from '@/lib/types'

export function Topbar () {

    const [ search, setSearch ] = useState<string>('')
    const [ userInfo, setUserInfo ] = useState<Pick<tRegister, 'username' | 'email' | 'role'>>({
        username: '',
        email: '',
        role: 'student'
    })

    function searchHandler(arg: string) {
        setSearch(arg)
    }

    function runSearch () {

    }

    function notifications () {}

    async function fetchUserInfo () {
        const data = await getUserinfo('userid') as { username: string, email: string, role: 'student' | 'tutor'}
        setUserInfo({...data})
    }

    useEffect(() => {
        fetchUserInfo()
    }, [])

    return (
        <div className='dashboard-topbar'>
            <div className='dashboard-topbar-header'>Welcome {userInfo.username}👋</div>

            <div className='dasboard-topbar-nav'>
                <div className='dashboard-topbar-search'>
                    <Searchbar value={search} handleChange={setSearch} handleClick={runSearch} placeholder='Search Courses' />
                </div>

                <IconButton icon={<BsBell /> } action={notifications} />
            </div>
        </div>
    )
}