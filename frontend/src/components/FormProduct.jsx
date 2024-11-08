// This component allows users to search for products by name and sort the displayed products based on price.

import { useState } from "react";
import { getProductsByName } from "../utils/fetchProducts";

export function FormProduct({products, setProducts}){

    const [inputValue, setInputValue] = useState();

    // update input value
    function handleChange(event){
        setInputValue(event.target.value);
    }

    async function handleSubmit(event){
        event.preventDefault();
        getProducts();
        event.target.reset();
    }
    // get the data form backend when user search for a product and update products state
    async function getProducts() {
        const searchList = await getProductsByName(inputValue);
        setProducts(searchList);
        if(searchList.length == 0){
            alert("No products found");
            setProducts(products);
        }
    }

    // The onChange handler function
    function handleSort(event) {
        const sortOrder = event.target.value;
        console.log(sortOrder);
        if (sortOrder === "low to high") {
            handleLowToHigh();
        } else if (sortOrder === "high to low") {
            handleHighToLow();
        }
    }

    // Sorts products list based on price low to high
    function handleLowToHigh() {
        let sortedList = products.slice().sort((a, b) => a.price - b.price);
        setProducts(sortedList);
    }

    // Sorts products list based on price high to low
    function handleHighToLow() {
        let sortedList = products.slice().sort((a, b) => b.price - a.price);
        setProducts(sortedList);
    }
    return(
        <>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" onChange={handleChange} placeholder="search for a product"/>

                <button className="searchBtn">Search</button>
                <select onChange={handleSort}>
                    <option value="">-- filter price --</option>
                    <option value="low to high">low to high</option>
                    <option value="high to low">high to low</option>
                </select>
            </form>
        </>
    )
}