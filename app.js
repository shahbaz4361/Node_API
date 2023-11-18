import express from "express"
import bodyParser from 'body-parser';

import {connectDB} from "./config/database.js";
import dotenv from "dotenv"
dotenv.config()
import productRouter from './routes/productRoutes.js';
// import errorMiddleware from "./middleware/error.js";
// import cors from "cors"

const app = express();
const port = process.env.PORT || 5000

connectDB()

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors())

app.use(express.json());

// app.use(errorMiddleware)

app.get("/" , (req, res)=>{
    return res.send({message:"API is live"})
})

app.use('/api/product', productRouter)

app.listen(port,"0.0.0.0", (err) => {
    
      console.log(`Server is listening on port http://localhost:${port}`);
    
  });
