const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const addproduct=require("./models/addProduct")

const app=express()
app.use(cors())

app.get("/",(res,req)=>{
    res.send("add")
})

app.post("/",(res,req)=>{
    res.send("view")
})

app.listen(8083,()=>{
    console.log("server started")
})