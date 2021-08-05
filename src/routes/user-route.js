const Router = require("express").Router;
const userRouter = Router();

userRouter.get("/users",(res,req)=>{
    res.status(200).send({
        message:"hello world users",
    });
});