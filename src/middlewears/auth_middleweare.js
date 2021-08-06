async function authMiddleweare(req,res,next){
    if(req.body.lastName!==""){
        //res.status(200).send({message2:"Welcome"});
        next();

    }else{
        return res.status(401).send("Not authorished");
    }
}

module.exports = authMiddleweare;