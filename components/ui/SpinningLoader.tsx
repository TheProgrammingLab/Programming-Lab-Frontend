import { tComponentClass } from "@/lib/types";

export function SpinningLoader ({ componentClass }: tComponentClass) {
    return (
        <div className={ componentClass === 'Primary' ? 'spinner' : 'spinner-secondary' } />
    )
}