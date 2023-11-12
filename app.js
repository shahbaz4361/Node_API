import express from "express"
import bodyParser from 'body-parser';

import {connectDB} from "./config/database.js";
import dotenv from "dotenv"
dotenv.config()
import productRouter from './routes/productRoutes.js';
import cors from "cors"
import errorMiddleware from "./midllewares/error.js";

const app = express();
const port = process.env.PORT || 3000

connectDB()


const allowedOrigins = ['https://node-api-irbk.onrender.com', 'http://localhost:3001'];

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }))

app.use(express.json());

app.get("/" , (req, res)=>{
    return res.send({message:"API is live"})
})
app.use(errorMiddleware);


app.use('/api/product', productRouter)

app.listen(port,"0.0.0.0", (err) => {
    if (err) {
      console.error('Error starting the server:', err);
    } else {
      console.log(`Server is listening on port ${port}`);
    }
  });
