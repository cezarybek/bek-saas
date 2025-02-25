import mongoose from "mongoose";
import User from "@/models/User";
import Board from "@/models/Board";
import Post from "@/models/Post";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error("❌ Failed to connect to MongoDB", e.message);
  }
};

export default connectMongo;
