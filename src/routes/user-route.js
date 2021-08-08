const { userController } = require("../controllers")
const Router = require("express").Router;
//const  app  = require("../server")
const userRouter = Router();
const { userExistsMiddleweare } = require("../middlewears")




userRouter.post("/signUp",userExistsMiddleweare,userController.register);
userRouter.get("/",userController.getUsers);
userRouter.post("/signIn",userController.login )

module.exports=userRouter;
