const { userController } = require("../controllers")
const Router = require("express").Router;
const userRouter = Router();
const { authMiddleweare } = require("../middlewears")
// userRouter.get("/",(res,req)=>{
//     res.status(200).send({
//         message:"hello world",
//     });
// });
userRouter.post("/",authMiddleweare,userController.register);
// userRouter.get("/",userController.getUser);
// userRouter.delete("/",userController.delete);
userRouter.get("/",userController.getUsers);
module.exports={
    userRouter: userRouter,
}