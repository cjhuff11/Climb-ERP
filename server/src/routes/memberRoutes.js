import express from "express";
import Member from "../models/member.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/", async (req, res) => {
  const members = await Member.find().populate("gym");
  res.json(members);
});

export default router;
