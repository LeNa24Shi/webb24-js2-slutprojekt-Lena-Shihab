// In this component renders a button that allows users to clear their shopping cart.

export function ClearShoppingCartBtn({setItemsAmount, setProductsAddedToCart}){

    // Delete items in shopping cart when user clicks the button
    function onClickClearCart(){
        setProductsAddedToCart([]);
        setItemsAmount(0);
    }

    return(
        <>
            <button className="cartButton" onClick={onClickClearCart}>Clear Shopping Cart</button>
        </>
    )
}