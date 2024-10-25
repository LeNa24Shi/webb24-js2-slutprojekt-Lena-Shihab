import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/fetchProducts"
import { ProductCard } from "./ProductCard";
import { FormProduct } from "./FormProduct";

export function ProductsList({setItemsAmount, itemsAmount, setShoppingList, setProductsAddedToCart, products, setProducts}){

    const [error, setError] = useState();

    // get all products 
    useEffect(()=>{
        fetchProducts()
        .then(productsObj => setProducts(productsObj))
        .catch(err => {
            setError("something went wrong try again later!"); 
        }) 
    },[])

    return(
        <>  
            <FormProduct products={products} setProducts={setProducts}/>
            <div className="card">
                {error ? <div className="pDiv">{error}</div> : products.map((product) => 
                <ProductCard key={product.id} 
                name={product.name} 
                image={product.image} 
                inStock={product.inStock} 
                price={product.price} 
                setProductsAddedToCart={setProductsAddedToCart} 
                itemsAmount={itemsAmount} 
                setItemsAmount={setItemsAmount} 
                setShoppingList={setShoppingList} 
                setProducts={setProducts}/>)}
            </div>
        </>
    )
}