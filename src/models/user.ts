import mongoose from "mongoose";


const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin', 'super'], default: 'user' }
});

const User = model('User', userSchema);

export default User;