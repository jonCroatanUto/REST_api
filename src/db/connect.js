const mongoose = require("mongoose");

const  config  = require("../config");
function connect(){
    return mongoose.connect(config.db.url,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    })
}
module.exports=connect;