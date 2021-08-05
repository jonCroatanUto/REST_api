const express= require("express");
const helmet = require("helmet");
const { json } = require("body-parser");
const morgan = require("morgan");

const { userRouter } = require("./routes/user-route");



const app= express();

app.use(helmet());
app.use(json());
app.use(morgan("dev"));

//app.use("/users", userRouter);
app.get("/",(req,res)=>{
    res.status(200).send({
        message:"hello world default",
    });
});
module.exports=app;