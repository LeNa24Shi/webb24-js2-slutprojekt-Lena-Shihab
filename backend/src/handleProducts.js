/*
 * This app is used to manage product's list.
 * - Reads product data from a JSON file.
 * - Provides a function to get all products.
 * - Updates stock levels for a product by its ID, ensuring stock doesn't go negative.
 * Uses `async/await` and `fs/promises`.
*/

import fs from "fs/promises";

async function getAllProducts(){
    const rawdata = await fs.readFile('./src/products.json');
    return JSON.parse(rawdata);
}

async function updateProductStock(id, quantity){
    const products = await getAllProducts();
    
    for(let i=0; i < products.length; i++){
        if (products[i].id == id){
            // Checks to prevent negative stock
            if(products[i].inStock >= quantity){
                let newStock = products[i].inStock - quantity
                products[i].inStock = newStock;
            }
        }
    }
    const newDB = products; 
    await fs.writeFile('./src/products.json', JSON.stringify( newDB, null, 2));
}

export {getAllProducts, updateProductStock};