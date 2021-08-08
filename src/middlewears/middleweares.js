const db = require("../models");
async function userExistsMiddleweare(req,res,next){
    const { email } = req.body;
    const userExist=db.User.find({email:email});
    if(!userExist){
   
        next();

    }else{
        return res.status(200).send("The user already exist");
    }
}

module.exports = userExistsMiddleweare;