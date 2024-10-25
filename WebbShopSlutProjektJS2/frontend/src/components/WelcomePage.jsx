export function WelcomePage({setPage}) {
    return (
        <div className="header">
            <h1>Unlock the Magic of Transformation</h1>
            <button onClick={()=>setPage("products")}>Shop now</button>
        </div>
    )
}
