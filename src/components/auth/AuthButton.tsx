export function Button ({ loading, label }: { loading: boolean, label: string }) {
    return (
        <button type="submit" className="auth-btn" disabled={loading}>
            {
                loading
                ?
                <div className="auth-btn-loading"/>
                :
                label
            }
        </button>
    )
}