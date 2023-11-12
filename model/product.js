import mongoose from "mongoose"

const productSchema = new mongoose.Schema({

    name:{
    type: String,
    required : true,
    unique : true
    },
    desc: String,
    price : String
}
)

const Product = new mongoose.model("Products", productSchema)

export default Product
