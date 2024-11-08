//ProductCard component renders a product's details and allows users to add products to their shopping cart.

import { patchProductsStock } from "../utils/fetchProducts";

export function CheckoutBtn({setProducts, products, setProductsAddedToCart, setItemsAmount, productsAddedToCart}){

    // send request to backend to update inStock property after clicking checkout 
    async function onClickCheckout(){
        if (productsAddedToCart.length > 0 && products.length > 0) {
            for(const cartProduct of productsAddedToCart){
                const product = products.find(p => p.name === cartProduct.name);
                if (product) { 
                    // call patchProductsStock function for the matched product 
                    const updatedList = await patchProductsStock(product.id, cartProduct.quantity);
                    setProducts(updatedList.products);
                    setProductsAddedToCart([]); // delete shopping list 
                    setItemsAmount(0);
                    alert("We have received your order!");                   
                }
            }
        } 
    }

    return(
        <>
            <button className="cartButton" onClick={onClickCheckout}>Checkout</button>
        </>
    )
}