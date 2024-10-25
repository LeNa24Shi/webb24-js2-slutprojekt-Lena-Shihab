import express from "express";
import cors from "cors";
import * as db from "./handleProducts.js";


const PORT = 3000;
const app = express();

app.use( express.json() )
app.use(cors());

/* app.get("/products", async (req, res)=>{
    let products = await db.getAllProducts();
    res.json(products);
}) */

app.get("/products", async (req, res)=>{
    const products = await db.getAllProducts();
    let productSearchList = [...products];

    const productSearch = req.query;
    console.log(productSearchList);
    if(Object.keys(productSearch).length){
        productSearchList = productSearchList.filter(p => {
            // console.log(p.name)
            return p.name.toLowerCase().includes(productSearch.name.toLowerCase());
        })
        res.json(productSearchList);
    }else{
        res.json(products);
    }
})

app.patch("/updateProductStock/:id", async (req, res)=>{
    const updateproducts = await db.updateProductStock(req.params.id, req.body.quantity);
    const products = await db.getAllProducts();
    res.json({
        message: `product's stock ${req.params.id} updated.`,
        products: products
    });
})

app.listen(PORT, ()=>{
    console.log('Listening on port', PORT)
});
