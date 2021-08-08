const db = require("../models");
const jwt = require('jsonwebtoken');
const  config  = require("../config");


async function register(req,res){
    
    const {firstName,lastName,email, password}=req.body;
    try{
    
    const{_id} = await db.User.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:await db.User.encryptPassword(password),
    });

    const tokken=jwt.sign({id:_id},config.accessToken.tokkenKey,{
        expiresIn:86400 //24 hours
    })

    return res.status(200).send({
        message:"user created",
        tokken:tokken,
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
    const {email, password}=req.body;
    try{
    const userFound = await db.User.findOne({email:email});
    const matchPassword = await db.User.comparePassword(password,userFound.password);
        if(userFound && matchPassword) {

            return res.status(200).send(`Welcome ${userFound.firstName}`);

        }else if(!userFound){
            return res.status(400).send(`The user not exist`);
        }else if(!matchPassword){
            return res.status(400).send(`The password doesn't match`);
        }
    
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