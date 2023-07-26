const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/login-signup")
.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log("failed to connect Database")
})


const loginschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model("collection1",loginschema)

module.exports = collection