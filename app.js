import express from "express"
import bodyParser from 'body-parser';

import {connectDB} from "./config/database.js";
import dotenv from "dotenv"
dotenv.config()
import productRouter from './routes/productRoutes.js';
import cors from "cors"
import errorHandler from "./midlleware/error.js";

const app = express();
const port = process.env.PORT || 3000

connectDB()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());



app.get("/" , (req, res)=>{
    return res.send({message:"API is live"})
})
app.use(errorHandler)
app.use('/api/product', productRouter)

app.listen(port, ()=>{
    console.log(`server is running on port https://node-api-irbk.onrender.com:${port}`)
})
