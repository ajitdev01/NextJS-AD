import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  address: String
});

const User = mongoose.model('User', UserSchema);

export default User;
