import mongoose, { Model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      required: false,
    },
    userType: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    aadharCard: {
      type: Number,
      required: true,
      unique: true,
    },
    panCard: {
      type: String,
      required: false,
      unique: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
