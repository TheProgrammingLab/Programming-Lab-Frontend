import { useEffect, useRef } from "react";


export function useInfiniteScroll (
    callback: () => void,
    hasMore: boolean,
    loading: boolean
) {
    const sentinelRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (loading || !hasMore) return;

        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                
                // console.log("intersecting")
                
                callback()
            }
        })

        const element = sentinelRef.current

        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        }

    }, [callback, hasMore, loading])

    return sentinelRef;
}