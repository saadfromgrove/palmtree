import mongoose from "mongoose";
import env from "./env.config";

export const connectToDB = async () => {
  try {
    await mongoose.connect(env.DATABASE_URL);
    console.log(`Connected to MongoDB`);
  } catch (error: any) {
    console.log(`Failed to connect to MongoDB: ${error.message}`);
  }
};
