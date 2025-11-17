import express from "express";
import Gym from "../models/gym.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const gym = await Gym.create(req.body);
    res.status(201).json(gym);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/", async (req, res) => {
  const gyms = await Gym.find();
  res.json(gyms);
});

export default router;
