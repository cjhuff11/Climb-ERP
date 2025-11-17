import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import gymRoutes from "./routes/gymRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api/gyms", gymRoutes);
app.use("/api/members", memberRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connected");

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err.message);
  }
};

start();
