import { PageContainer } from "./PageContainer";
import { Navbar } from "./Navbar";
import { useState } from "react";

// quantity usestate don't need
// backend query
// one function to get products in backend 
// 
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
