/*
 * displays a welcoming message and a button,
 * that allows the user to navigate to the products page.
*/
export function WelcomePage({setPage}) {
    return (
        <div className="header">
            <h1>Unlock the Magic of Transformation</h1>
            <button onClick={()=>setPage("products")}>Shop now</button>
        </div>
    )
}
