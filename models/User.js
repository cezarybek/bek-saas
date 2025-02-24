import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  image: {
    type: String,
  },
  boards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", userSchema);
