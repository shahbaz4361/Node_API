import express from "express"
import bodyParser from 'body-parser';

import {connectDB} from "./config/database.js";
import dotenv from "dotenv"
dotenv.config()
import productRouter from './routes/productRoutes.js';

const app = express();
const port = process.env.PORT || 5000

connectDB()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.get("/" , (req, res)=>{
    return res.send({message:"API is live"})
})


app.use('/api', productRouter)

app.listen(port, (err) => {
    
      console.log(`Server is listening on port ${port}`);
    
  });
