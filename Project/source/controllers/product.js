import { ProductView } from '../views';
import { Router } from 'express';

const router = new Router();

router.route('/product')
    .get(async (req, res) => {    
        ProductView.get_all_products(req, res);
    })
    .post(async (req, res) => {
        ProductView.create_product(req, res);
    });
router.route('/product/:category')
    .get(async(req,res)=>{
        console.log("get by id");
        ProductView.get_products_by_category(req,res);
    });
router.route('/product/:id')
    .get(async (req, res) => {
        ProductView.get_product_by_id(req, res);
    });

export default router;