import { User } from "../models";

export async function check_user_midd(req, res, next){
    let user_id = null;
    console.log('Check user rights.')
    try{
        user_id = req.cookies.user;
        let user = await User.findById(user_id);
        if(!user){
            res.status(401).json({ "Error": "User not found." });
            return;
        }
        req.user = user;
        next();
    }
    catch(err){
        res.status(401).json({ "Error": "User not authorized." });
    }
}