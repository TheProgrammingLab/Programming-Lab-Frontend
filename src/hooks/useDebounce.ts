import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay:number=1000) {
    const [ debounceInput, setDebounceInput ] = useState<T>();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceInput(value);
        }, delay)

        return () => clearTimeout(timeout);
    }, [value]);

    return debounceInput;
}