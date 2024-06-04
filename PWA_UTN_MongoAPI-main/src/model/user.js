import { Schema, model } from "mongoose";
const UserSchema = Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  profilePic: { type: String, default: "" },
  password: { type: String, required: true },
});

export const User = model("User", UserSchema);
