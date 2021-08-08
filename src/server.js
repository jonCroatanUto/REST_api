const express= require("express");
const helmet = require("helmet");
const { json } = require("body-parser");
const morgan = require("morgan");


const { userRouter } = require("./routes");

const app= express();

app.use(helmet());
app.use(json());
app.use(morgan("dev"));


app.use("/users", userRouter);
app.use("/auth", userRouter);



// app.get("/",(req,res)=>{
//     res.status(200).send({
        
//         message:`Hello world`,
//     });
// });

module.exports=app;