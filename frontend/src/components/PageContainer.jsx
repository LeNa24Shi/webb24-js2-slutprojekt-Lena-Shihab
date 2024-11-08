/*
 * PageContainer component manages the current page view in the application.
 * It conditionally renders different components based on the current page state.
 * ShoppingCart, WelcomePage and ProductsList
*/

import { ProductsList } from "./ProductsList";
import { ShoppingCart } from "./ShoppingCart";
import { WelcomePage } from "./WelcomePage";
import { useState } from "react";

export function PageContainer({itemsAmount, setItemsAmount, page, setPage}) {

    const [productsAddedToCart, setProductsAddedToCart] = useState([]); // create a new list when user add products to cart
    const [products, setProducts] = useState([]); // set products list 


    return (
        <>
            {page == "shoppingCart" && <ShoppingCart productsAddedToCart={productsAddedToCart}
            setProductsAddedToCart={setProductsAddedToCart} 
            setItemsAmount={setItemsAmount} 
            setProducts={setProducts} 
            products={products}/>}
            {page == "welcome" && <WelcomePage setPage={setPage}/>}
            {page == "products" && <ProductsList setItemsAmount={setItemsAmount} 
            itemsAmount={itemsAmount} 
            setProductsAddedToCart={setProductsAddedToCart} 
            products={products} 
            setProducts={setProducts}/>}
        </>
    )
}
