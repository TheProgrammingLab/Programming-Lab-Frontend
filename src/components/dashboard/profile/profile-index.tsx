import React, { useEffect, useState } from "react"
import "../../../styles/profile.css"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { BsPerson } from "react-icons/bs"
import { addMessage } from "../../../redux/features/message"
import { ProfileInput } from "./profile-input"



export function ProfileIndex () {

    const [ userState, setUserState ] = useState<Record<string, string | boolean>>({})
    const user = useAppSelector(state => state.user.value)
    const dispatch = useAppDispatch()

    function onLoadFunc () {
        setUserState({
            username: user.username,
            email: user.email,
            role: user.role,
            verified: user.verified
        })
    }

    function changeHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setUserState({...userState, [e.target.name] : e.target.value})
    }

    function verificationStyling (): string {
        if (userState.verified) return "profile-verified";
        return "profile-unverified"
    }

    function verificationStatus () {
        return userState.verified ? "Verified" : "Unverified"
    }

    function uploadNewImage () {
        const imgInput = document.createElement("input")
        imgInput.type = "file"
        imgInput.click();

        imgInput.onchange = function (e: Event) {
            
            // @ts-expect-error: E>Target>Files[0]
            if (!e.target?.files[0]) {
                dispatch(addMessage({label: "No Image found", type: 'warning'}))
                return;
            }
    
            // @ts-expect-error: E>Target>Files[0
            if (e.target.files[0].type != "image/png" &&
                // @ts-expect-error: E>Target>Files[0
                e.target.files[0].type != "image/jpg" &&
                // @ts-expect-error: E>Target>Files[0 
                e.target.files[0].type != "image/jpeg" &&
                // @ts-expect-error: E>Target>Files[0
                e.target.files[0].type != "image/webp") {
                dispatch(addMessage({label: "File type should be JPEG or PNG or WEBP", type: 'warning'}))
                return;
            }
    
    
            const formThumbnail = new FormData();
            
            // @ts-expect-error: E>Target>Files[0
            formThumbnail.append("image", e.target.files[0])
        }
    }
    
    useEffect(() => {
        onLoadFunc()
    }, [])

    return (
        <div className="profile-index">
            <div className="profile-index-top">
                <div className="profile-image">

                </div>

                <div className="profile-image-btns">
                    <button onClick={uploadNewImage}>Upload New</button>
                    <button>Delete Avatar</button>
                </div>

                <div className="profile-status">
                    <div className="profile-role">
                        <span> <BsPerson /> </span>
                        <span> {userState.role} </span>
                    </div>

                    <div className={verificationStyling()}>{verificationStatus()}</div>
                </div>
            </div>

            <ProfileInput name="username" label={"username"} value={userState.username as string} handleChange={changeHandler}  />
            <ProfileInput name="email" label={"email"} value={userState.email as string} handleChange={changeHandler}  />

            <button className="profile-index-btn">
                Save Changes
            </button>
            
            
        </div>
    )
}