import { Category } from '../models'

export async function get_all_categories(req, res) {
    let categories = null;
    try{
        //console.log(`User ${req.user.name} requests all categories.`)
        categories = await Category.find({});

        res.status(200).json(categories);
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "Something went wrong."});
    }
}