export function ClearShoppingCartBtn({setItemsAmount, setProductsAddedToCart}){

    // Delete items in shopping cart when user clicks the button
    function onClickClearCart(){
        setProductsAddedToCart([]); // delete shopping list 
        setItemsAmount(0); // items amount updates to 0 
    }

    return(
        <>
            <button className="cartButton" onClick={onClickClearCart}>Clear Shopping Cart</button>
        </>
    )
}