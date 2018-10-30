import { Product, Category } from '../models'

export async function get_all_products(req, res) {
    let products = null; 
    
    try{
        products = await Product.find({});
        res.status(200).json(products);
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "Something went wrong."});
    }
}

export async function create_product(req, res) {
    if(!req.session.isAdmin)
    {
        res.status(401).json({Error: "You are not autorised to create product"}); 
    }
    let product = req.body;
    if(!product){
        res.status(400).json({Error: "Product doesn't pass."});
    }
    try{
        product = new Product(product);

        console.log(product);
        let err = product.validateSync();
        if(err){
            res.status(409).json({Error: "Product is not valid."});
        }
        product = await product.save();

        res.status(200).json(product);
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "Product not created."});
    }
}

export async function get_product_by_id(req, res) {
    let product = null;
    let product_id = req.params.id;
    if(!product_id){
        res.status(404).json({Error: `Product by product id ${product_id} not found.`});
    }
    try{
        product = await Product.findById(product_id).populate('category_id', 'name');  
        res.status(200).json(product);
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "Something went wrong."});
    }
}

export async function get_products_by_category(req,res){
    let products = null;
    let category_id = req.params.id;
    if(!category_id){
        res.status(404).json({Error: `Product by product id ${category_id} not found.`});
    }
    try{
        products = await Product.find({category_id:category_id});
        res.status(200).json(products);
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "Something went wrong."});
    }
}