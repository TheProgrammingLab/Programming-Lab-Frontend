import { useLocation, useNavigate } from "react-router-dom"
import "../../styles/dashboard.component.css"
import { MdNotifications } from "react-icons/md"
import { useState } from "react"
import { BsSearch } from "react-icons/bs"

function SearchBar () {
    
    const [ search, setSearch ] = useState<string>("")

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    return (
        <div className="searchbar">
            <div className="searchbar-input">
                <input type="text" value={search} onChange={handleChange} placeholder="Search for Courses"  />
                <span className="search-icon">
                    <BsSearch />
                </span>
            </div>

            <div className="searchbar-result"></div>
        </div>
    )
}

export function Topbar() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    function pathDistributor (): any {
        const paths = pathname.split('/').splice(1)

        function handleClick (index: number) {
           const restoredPath = paths.slice(0, index + 1).join('/')
           navigate(`/${restoredPath}`)
        }

        return (
            <>
            {
                paths.map((path, index) => {
                    if (index == paths.length - 1) {
                        if (path == 'lms') {
                            return ( 
                                <span 
                                className="topbar-page-indicator-link"  
                                key={index}
                                onClick={() => handleClick(index)}> Dashboard </span>
                            )
                        }

                        return (
                            <span 
                            className="topbar-page-indicator-link" 
                            key={index}
                            onClick={() => handleClick(index)}>{path}</span>
                        )
                    }

                    if (path == "lms") {
                        return (
                            <div className="topbar-page-indicator-item" key={index}> 
                                <span 
                                className="topbar-page-indicator-link"
                                onClick={() => handleClick(index)}>Dashboard</span>

                                <span> {'>'} </span> 
                            </div>
                        )
                    }

                    return (
                        <div className="topbar-page-indicator-item" key={index}> 
                            <span 
                            className="topbar-page-indicator-link"
                            onClick={() => handleClick(index)}>{path}</span>

                            <span> {'>'} </span> 
                        </div>
                    )
                })
                }
            </>
        )
    }

    function checkForNotification (): string {
        // create the notification checker
        if (!true) return "topbar-notification-ringing"
        return "topbar-notification"
    }

    return (
        <div className="topbar">
            <div className="topbar-page-indicator">
                { pathDistributor() }
            </div>

            <div className="topbar-cnt">
                <SearchBar />

                <span className={checkForNotification()}> <MdNotifications /> </span>

                <div className="topbar-profile-img">
                    {/* <img /> */}
                </div>
            </div>
        </div>
    )
}