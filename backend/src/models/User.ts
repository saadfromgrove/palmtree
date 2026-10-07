import mongoose from "mongoose";

export enum UserType {
  ORG_FOUNDER = "ORG_FOUNDER",
  SERV_FOUNDER = "SERV_FOUNDER",
}

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
      enum: Object.values(UserType),
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
      sparse: true, // To allow more than 1 users to register without entering pan card number
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
