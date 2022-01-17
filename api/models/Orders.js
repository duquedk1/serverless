import mongoose, { Schema } from "mongoose";

const Orders = mongoose.model(
  "Order",
  new Schema({
    user_id: String,
    meal_id: { type: Schema.ObjectId, ref: "Meal" },
  })
);

export default Orders;
