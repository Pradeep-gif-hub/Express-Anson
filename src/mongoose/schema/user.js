import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    displayName: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } 
);

export const User = mongoose.model("User", UserSchema);
