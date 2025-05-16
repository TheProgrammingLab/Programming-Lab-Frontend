"use client"
import { tSearchbar } from "@/lib/types"
import { BsSearch } from "react-icons/bs"

export function Searchbar ({ value, handleChange, handleClick, placeholder }: tSearchbar) {
    
    function changeHandler (e:React.ChangeEvent<HTMLInputElement>) {
        handleChange(e.target.value)
    }
    
    return (
        <div className="searchbar">
            <input type='text' value={value} onChange={changeHandler} placeholder={placeholder} />

            <span className="searchbar-icon" onClick={handleClick}>
                <BsSearch />
            </span>
        </div>
    )
}