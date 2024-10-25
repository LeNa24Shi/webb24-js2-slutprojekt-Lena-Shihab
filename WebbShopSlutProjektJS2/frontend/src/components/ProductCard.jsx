import {useState } from "react";

export function ProductCard({name, image, price, inStock, itemsAmount, setItemsAmount, setProductsAddedToCart}){

    const [newStock, setNewStock] = useState(inStock); 

    let quantity;
    // handle the quantity that we get from the input.value
    function inputValue(event){
        quantity = Number(event.target.value);
    }

    // add items to shoppingCart onClick
    function handleClickBuy(event){
        event.preventDefault();
        console.log("new item added");
        let totalItems = quantity + itemsAmount; // add quantity to the items value that is alredy in shoppingCart

        // check if the quantity that user writes is more than 0 and less than the onStock value 
        if (quantity > 0 && quantity <= inStock) {

            // update inStock property 
            setNewStock(inStock - quantity);
            setProductsAddedToCart((current)=>{ 
                clonedArr = [...current];

                let itemInCart = false;
                for(let i = 0; i < clonedArr.length; i++){

                    if(current[i].name == name){
                        itemInCart = true;
                        clonedArr[i].quantity += quantity;
                        setItemsAmount(clonedArr[i].quantity);
                        break;
                    }
                };
                if(!itemInCart){
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
            <p> In stock : {newStock}</p>
            <form onSubmit={handleSubmit}>                
                {newStock == 0 ? <button className="disabledBtn" disabled>not available</button> : 
                <> 
                <input className="inputCard" type="number" onChange={inputValue} pattern="[1-9]*" placeholder="quantity" />
                <button className="buttonCard" onClick={handleClickBuy}>Buy</button> 
                </>}
            </form>
        </div>
    )
}