import mongoose from "mongoose";

const gymSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    address: String,
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Gym", gymSchema);
