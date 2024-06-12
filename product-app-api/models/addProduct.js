const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "id":String,
    "name":String,
    "description":String,
    "price":String
})

let productmodel=mongoose.model("products",schema)
module.exports={productmodel}