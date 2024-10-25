import fs from "fs/promises";

async function getAllProducts(){
    const rawdata = await fs.readFile('./src/products.json');
    return JSON.parse(rawdata);
}

async function getProductByName(name){
    const rawdata = await fs.readFile('./src/products.json');
    let dataArr = JSON.parse(rawdata)
    const product = dataArr.find(product => product.name == name);
    if (product) {
        console.log(product.name); 
    } else {
        console.log('Product not found'); 
    }
    return product;
}

async function updateProductStock(id, quantity){
    const products = await getAllProducts();
    // console.log(products)
    
    for(let i=0; i < products.length; i++){
        // console.log(products[i].name);
        if (products[i].id == id){
            if(products[i].inStock >= quantity){
                let newStock = products[i].inStock - quantity
                products[i].inStock = newStock;
            }
        }
    }
    const newDB = products; 
    await fs.writeFile('./src/products.json', JSON.stringify( newDB, null, 2));
}

export {getAllProducts, updateProductStock, getProductByName};