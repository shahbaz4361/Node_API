import mongoose from "mongoose"
import joi from "joi"

const productSchema = new mongoose.Schema({
    name:{
    type: String,
    required : true,
    unique : true
    },
    desc: String,
    price : Number,
    company: String
}
)

const Product = new mongoose.model("Products", productSchema)

export default Product
