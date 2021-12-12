import mongoose, { Schema } from "mongoose";

const Orders = mongoose.model(
  "Order",
  new Schema({
    meal_id: { type: Schema.Types.ObjectId, ref: "Meal" },
    user_id: String,
  })
);

export default Orders;
