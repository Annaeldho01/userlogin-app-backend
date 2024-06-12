const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {usermodel} = require("./models/user")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anna:anna@cluster0.ld2gi.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/",(req,res)=>{
    let input=req.body
    let user=new usermodel(input)
    user.save()
    res.json({"status":"success"})
    
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    )
   
})

app.listen(8086,()=>{
    console.log("server started")
})