import { patchProductsStock } from "../utils/fetchProducts";

export function CheckoutBtn({setProducts, products, setProductsAddedToCart, setItemsAmount, productsAddedToCart}){

    // send request to backend to update inStock property after clicking checkout 
    async function onClickCheckout(){
        if (productsAddedToCart.length > 0 && products.length > 0) {
            for(const cartProduct of productsAddedToCart){
                const product = products.find(p => p.name === cartProduct.name);
                if (product) { 
                    // prevents the user from buying products that is not in stock
                    if(cartProduct.quantity > product.inStock){
                        alert(`Unfortunately, we cannot complete your purchase because the ${product.name} stock is lower than the quantity in your cart. Please adjust your order.`)
                    }else{
                        // call patchProductsStock function for the matched product 
                        const updatedList = await patchProductsStock(product.id, cartProduct.quantity);
                        setProducts(updatedList.products);
                        setProductsAddedToCart([]); // delete shopping list 
                        setItemsAmount(0); // items amount updates to 0 
                        alert("We have received your order!");  
                    }                    
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