import { User } from '../models'

export async function login(req, res) {
    let userRequest = req.body;
    if(!userRequest){
        res.status(400).json({Error: "Product doesn't pass."});
    }
    try{
        let user = await User.findOne({login:userRequest.login});
        if(user.password === userRequest.password){
            req.session.isAutorized = true;       
            req.session.isAdmin = user.isAdmin;
        }
    }catch(err){
        console.log(err);
        res.status(500).json({Error: "Wrong credentials."});
    }
}

export async function signUp(req,res){
    let user = req.body;
    if(!user){
        res.status(400).json({Error: "Product doesn't pass."});
    }
    try{
        user = new User(user);

        console.log(user);
        let err = user.validateSync();
        if(err){
            res.status(409).json({Error: "User is not valid."});
        }
        user = await user.save();

        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "User not created."});
    }
}

}