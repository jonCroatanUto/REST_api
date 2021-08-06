const app = require("./server")
const  config  = require("./config");
const connect = require("./db");

connect().then(async ()=>{
    //config.logger.info("DB connected!");
    app.listen(config.app.port,()=>{
        console.log(`Server running at port ${config.app.port}`)
    })

});

