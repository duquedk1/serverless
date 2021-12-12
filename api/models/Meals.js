import mongoose, { Schema } from "mongoose";

const Meals = mongoose.model(
  "Meal",
  new Schema({
    name: String,
    desc: String,
  })
);

export default Meals;
