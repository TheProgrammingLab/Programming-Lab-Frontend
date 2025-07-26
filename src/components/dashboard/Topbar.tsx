import { useLocation, useNavigate } from "react-router-dom"
import "../../styles/dashboard.component.css"
import { MdNotifications } from "react-icons/md"
import { useEffect, useRef, useState } from "react"
import { BsSearch } from "react-icons/bs"

function SearchBar () {
    
    const [ search, setSearch ] = useState<string>("")
    const [ searchActivated, setSearchActivated ] = useState<boolean>(false)
    const [ searchResult, setSearchResult ] = useState<any[]>([])

    const ref = useRef<HTMLDivElement>(null)

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)

        if (searchActivated) setSearchActivated(false);
    }

    function handleSearch () {
        if (!search) return;
        setSearchActivated(true)

        setSearchResult([])
    }

    function containerBlurFunc (e: React.PointerEvent<HTMLElement | HTMLDivElement>) {
        if (!ref.current) return;

        if (!ref.current.contains(e.target as Node)) {
            setSearchActivated(false)
        }
        

    }

    function handleContainerBlur () {
        const app = document.querySelector('.app')
        if (!app) return;

        app.addEventListener('pointerdown', containerBlurFunc as unknown as EventListenerOrEventListenerObject)
        
        return () => app.removeEventListener('pointerdown', containerBlurFunc as unknown as EventListenerOrEventListenerObject)
    }

    useEffect(() => {
        handleContainerBlur()
    }, [])

    return (
        <div className="searchbar" ref={ref}>
            <div className="searchbar-input">
                <input type="text" value={search} onChange={handleChange} placeholder="Search for Courses"  />
                
                <span className="search-icon" onClick={handleSearch}>
                    <BsSearch />
                </span>
            </div>

            {
                searchActivated &&
                <div className="searchbar-result">
                    {
                        !searchResult[0]
                        ?
                        <div className="bottom-loader">
                            <div />
                        </div>
                        :
                        <></>
                    }
                </div>
            }
        </div>
    )
}

export function Topbar() {
    const [ hasNotification ] = useState<boolean>(false)
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
        if (hasNotification) return "topbar-notification-ringing"
        return "topbar-notification"
    }

    function toProfile () {
        navigate("/lms/profile")
    }

    return (
        <div className="topbar">
            <div className="topbar-page-indicator">
                { pathDistributor() }
            </div>

            <div className="topbar-cnt">
                <SearchBar />

                <span className={checkForNotification()}> <MdNotifications /> </span>

                <div className="topbar-profile-img" onClick={toProfile}>
                    {/* <img /> */}
                </div>
            </div>
        </div>
    )
}