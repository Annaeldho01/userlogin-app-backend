const mongoose =require("mongoose")
const schema = mongoose.Schema({
    "title":String,
    "category":String,
    "publishedYear":String,
    "author":String,
    "description":String,
    "distributor":String,
    "publisher":String,
    "price":String
})

let librarymodel =mongoose.model("addBooks",schema)
module.exports={librarymodel}