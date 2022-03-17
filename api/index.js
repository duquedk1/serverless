import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import meals from "./routes/meals.routes"
import orders from "./routes/orders.routes"
import auth from "./routes/auth.routes"


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)

export default app;
