/*
 * - Navbar: Displays navigation links and the current cart item count. 
 * - It allows page changes between ShoppingCart, WelcomePage and ProductsList.
 * - PageContainer: Displays content based on the selected page and allows users to update the cart item count.
*/

import { PageContainer } from "./PageContainer";
import { Navbar } from "./Navbar";
import { useState } from "react";

export function App(){

    const [itemsAmount, setItemsAmount] = useState(0); // items amount in the cart 
    const [page, setPage] = useState("welcome"); // change the page value onClick in navbar component

    return (
        <>
            <Navbar itemsAmount={itemsAmount} setPage={setPage}/> 
            <PageContainer setItemsAmount={setItemsAmount} itemsAmount={itemsAmount} page={page} setPage={setPage}/>
        </>
    )
}
