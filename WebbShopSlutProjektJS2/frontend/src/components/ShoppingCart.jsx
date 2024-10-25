import { ClearShoppingCartBtn } from "./ClearShoppingCart";
import { CheckoutBtn } from "./Checkout";

export function ShoppingCart({productsAddedToCart, setProductsAddedToCart, setItemsAmount, setProducts, products}){

    let totalCost = 0; 
    // give totalCost a value to add it to total items cost
    productsAddedToCart.forEach(item => {
        let price = item.price;
        let quantity = item.quantity;
        totalCost += price * quantity;
    });

    // display products in shoppingCart 
    let shoppingList = productsAddedToCart.map(product=> <p key={product.name}>Product name : {product.name} _ {product.quantity} st</p>)

    return(
        <>  
            <div className="shoppingCart">
                {shoppingList}
                {totalCost > 0 ? <p>Total Cost : {totalCost} kr </p> : <p>No items in the cart!!</p>}
            </div>
            <CheckoutBtn setProducts={setProducts} products={products} setProductsAddedToCart={setProductsAddedToCart} setItemsAmount={setItemsAmount} productsAddedToCart={productsAddedToCart}/>
            <ClearShoppingCartBtn setItemsAmount={setItemsAmount} setProductsAddedToCart={setProductsAddedToCart}/>
        </>
    )
}