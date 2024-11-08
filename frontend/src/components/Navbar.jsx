/*
* Navbar component renders a navigation bar for the application
* Allows users to switch between different pages.
*/
export function Navbar({itemsAmount , setPage}) {

    return (
        <>
            <div className="navbarDiv">
                <h2>RITUALS . . .</h2>
                <nav className="nav">
                    <button onClick={()=>setPage("welcome")}>Welcome</button>
                    <button onClick={()=>setPage("products")}>Products</button>
                    <button onClick={()=>setPage("shoppingCart")}>ShoppingCart {itemsAmount}</button>
                </nav>
            </div>
        </>
  )
}