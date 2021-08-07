const { userController } = require("../controllers")
const Router = require("express").Router;
const  app  = require("../server")
const userRouter = Router();


const { authMiddleweare } = require("../middlewears")
const jwt = require('jsonwebtoken');




userRouter.post("/register",authMiddleweare,userController.register);
userRouter.post("/login",userController.login);

userRouter.post("/autentification",(req, res) => {
    if(req.body.firstName === "hola" && req.body.password === "pasword") {
  const payload = {
   check:  true
  };
  const token = jwt.sign(payload, app.get('tokken_key'), {
   expiresIn: 1440
  });
  res.json({
   mensaje: 'Autenticación correcta',
   token: token
  });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
});

// userRouter.get("/",userController.getUser);
// userRouter.delete("/",userController.delete);
userRouter.get("/",userController.getUsers);
module.exports={
    userRouter: userRouter,
}