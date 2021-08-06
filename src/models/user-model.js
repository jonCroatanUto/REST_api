const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");


const userSchema = Schema({
        firstName:{
            type:String,
            required:[true, "We need a name , please"]
        },
        lastName:{
            type:String,
        },
        email:{
            type:String,
            required:[true, "An email is required"],
            unique: true,
            validate:{
                validator: (value) => isEmail(value),
                message: (props) => `The email ${props.value} is not valid` 
            }
              
        },
        password:{
            type:String,
            required:[true, "Please we need a password"]
        }
    },{
        timestamps:true
})

const User = mongoose.model("User",userSchema );

module.exports = User;