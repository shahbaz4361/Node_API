import mongoose from "mongoose"

const productSchema = new mongoose.Schema({

    name:{
    type: String,
    required : true,
    unique : true
    },
    disc: String,
    price : String
}
)

const Product = new mongoose.model("Products", productSchema)

export default Product


// import mongoose from "mongoose";

// // Create a schema for the product
// const productSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required:true,
//         unique:true
//     },
//     disc: String,
//     price: String
// });


// // Create a model for the product
// const Product = new mongoose.model('Product', productSchema);

// export default Product