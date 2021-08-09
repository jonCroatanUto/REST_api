const { verifyTokken } = require("../services/auth")
async function authMiddleweare(req,res,next){
    try{
        if(req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
            ){
            const userClaims = await verifyTokken(req.headers.authorization.substr(7));
            req.user = userClaims;
            next()
        }

    }catch(err){
        return res.status(401).send("not auth")
    }
}

module.exports={
    authMiddleweare:authMiddleweare
}