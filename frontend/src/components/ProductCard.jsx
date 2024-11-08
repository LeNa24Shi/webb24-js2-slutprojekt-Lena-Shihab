/*
 * ProductCard component represents an individual product's display card.
 * Handles user interactions for adding products to a shopping cart.
*/

export function ProductCard({name, image, price, inStock, itemsAmount, setItemsAmount, setProductsAddedToCart}){

    let quantity;
    // handle the quantity that we get from the input.value
    function inputValue(event){
        quantity = Number(event.target.value);
    }

    // add items to shoppingCart onClick
    function handleClickBuy(event){
        event.preventDefault();
        let totalItems = quantity + itemsAmount; 
        
        // check if the quantity that user writes is more than 0 and less than the onStock value 
        if (quantity > 0 && quantity <= inStock) {

            setProductsAddedToCart((current)=>{ 
                clonedArr = [...current];

                let itemInCart = false;
                // Check if the product already exists in the cart
                for(let i = 0; i < clonedArr.length; i++){

                    if(current[i].name == name){
                        itemInCart = true;
                        // Check if adding the quantity would exceed the stock limit
                        if (current[i].quantity + quantity > inStock){
                            alert(`You already have ${itemsAmount} ${current[i].name} in the cart. Adding ${quantity} more would exceed the available stock of ${inStock}.`);
                        }else{
                            alert(`Stock for ${current[i].name} has been updated.`);
                            clonedArr[i].quantity += quantity;
                            setItemsAmount(itemsAmount + quantity);
                            break;
                        }
                    }
                };
                if(!itemInCart){
                    alert("new item added");
                    setItemsAmount(totalItems);
                    clonedArr.push({
                        name: name,
                        quantity: quantity,
                        price: price
                    })
                }
                return clonedArr;
            })      
        }else{
            alert("Please enter a valid value ");
        }  
    }
    function handleSubmit(event){
        event.preventDefault();
        handleClickBuy();
        event.target.reset();
    }
    return(
        <div className="cardDiv" key={name}> 
            <img src={image}/>
            <h3>{name}</h3>
            <p> Price : {price} kr</p>
            <p> In stock : {inStock}</p>
            <form onSubmit={handleSubmit}>                
                {inStock == 0 ? <button className="disabledBtn" disabled>not available</button> : 
                <> 
                <input className="inputCard" type="number" onChange={inputValue} pattern="[1-9]*" placeholder="quantity" />
                <button className="buttonCard" onClick={handleClickBuy}>Buy</button> 
                </>}
            </form>
        </div>
    )
}