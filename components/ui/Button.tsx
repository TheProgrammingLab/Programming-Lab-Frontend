"use client"
import { tButton, tSubmitButton } from "@/lib/types"
import { SpinningLoader } from "./SpinningLoader"

export function Button({ type='button', label, action, componentClass }: tButton) {
    return (
        <button 
            type={type}
            className={componentClass === 'Primary'  ? 'primary-btn' : 'secondary-btn'}
            onClick={action}
        >
            { label }
        </button>
    )
}

export function SubmitButton({ type='submit', label, action, loading, componentClass }: tSubmitButton) {
    
    function handleClick () {
        // setLoading to true in the action
        action()
    }

    return (
        <button 
            type={type}
            className={componentClass === 'Primary'  ? 'primary-btn' : 'secondary-btn'} 
            disabled={loading} 
            onClick={handleClick}
        >
            {
                loading
                ?
                <SpinningLoader componentClass={componentClass} />
                :
                label
            }
        </button>
    )
}