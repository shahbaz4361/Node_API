import mongoose from "mongoose"

export const connectDB = ()=>{
 mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
 })
 .then(()=>{
    console.log("MongoDB Connected")
 })
 .catch((error)=>{
    console.log(
        "Connection Error:" , error
    );
 })
}