const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")


app.use(express.json())
app.set("view engine","hbs")
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/sign-up",(req,res)=>{
    res.render("sign-up")
})

app.get("/login",(req,res)=>{
    res.render("login")
})


app.post("/sign-up",async(req,res)=>{

    const data = {
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("login")
})


app.post("/login",async(req,res)=>{

    try{
        const check = await collection.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }

})



app.listen(5000,()=>{
    console.log("port connected")
}) 