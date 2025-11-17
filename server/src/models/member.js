import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    gym: { type: mongoose.Schema.Types.ObjectId, ref: "Gym", required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: String,
    membershipStatus: {
      type: String,
      enum: ["active", "frozen", "cancelled"],
      default: "active"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema);
