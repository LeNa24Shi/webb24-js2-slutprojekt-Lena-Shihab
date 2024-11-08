// Fetch products list from backend json.file
async function fetchProducts(){
    const url = "http://localhost:3000/products";

    const res = await fetch(url);
    const data = await res.json();

    return (data);
}

async function getProductsByName(name){
    const url = `http://localhost:3000/products?name=${name}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function patchProductsStock(id, quantity){
    const url = `http://localhost:3000/updateProductStock/${id}`;

    const options = {
        method: 'PATCH',
        body: JSON.stringify({quantity}),
        headers: {                      
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}
export {fetchProducts, patchProductsStock, getProductsByName}