const db = require("../models");


async function register(req,res){
    //mirar en la rama solutions, folder utils "encryptString"
    //const encryptedPassword= encryptString(password)
    const {firstName,lastName,email, password}=req.body;
    try{
    const{_id} = await db.User.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
    });

    return res.status(200).send({
        message:"user created",
        data:{
            id:_id
        }
    })
    }catch(err){
        return res.status(500).send({
            error:err.message,
        })
    }

}

async function getUsers(req,res){
    try{
    const users = await db.User.find({});

    return res.status(200).send({
        message:"user found",
        data:users,
       
    })
    }catch(err){
        return res.status(500).send({
            error:err.message,
        })
    }

}


async function login(req,res){
    const {firstName, password}=req.body;
    try{
     await db.User.find({
            firstName:firstName,
            password:password,
    });
   
    return res.status(200).send({
        
        message:"The user exist",
        token: token
    })
    }catch(err){
        return res.status(500).send({
            error:err.message,
        })
    }

}

module.exports={
    register:register,
    getUsers:getUsers,
    login:login
}