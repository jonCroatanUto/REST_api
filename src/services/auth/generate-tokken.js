const jwt = require('jsonwebtoken');
const  config  = require("../config");

function generateTokken(data){
    return jwt.sign(data,config.accessToken.tokkenKey,{
        expiresIn:"180 s"//24 hours
    })
}
module.exports={
    generateTokken:generateTokken
}