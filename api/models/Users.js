import mongoose, { Schema } from "mongoose";

const Users = mongoose.model(
  "User",
  new Schema({
    email: String,
    password: String,
    salt: String,
    role: {type: String, default: 'user'} //admin
  })
);

export default Users;