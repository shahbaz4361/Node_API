import mongoose from "mongoose"
  
const productSchema = new mongoose.Schema({
    name:{
    type: String,
    required : true,
    unique : true
    },
    // name: String ,
    desc: String,
    price : String,
    company: String,
    
}
)

const Product = new mongoose.model("Products", productSchema)

export default Product
