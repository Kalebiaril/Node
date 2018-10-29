import { Product, Category } from '../models'

export async function get_all_products(req, res) {
    let products = null;
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let skip = req.query.skip ? parseInt(req.query.skip) : 0;
    try{
        products = await Product.find({}).skip(skip).limit(limit);
        res.status(200).json(products);
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "Something went wrong."});
    }
}

export async function create_product(req, res) {
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