const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;
const authenticate = require("../middleware/auth");
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.json("User already exists");
    }
    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPass,
      },
    });

    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
      message: "User created successfully!",
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: error.message || "Cannot create a user!" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res
        .status(400)
        .json({ error: "User does not exits, please sign up first!" });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ error: "Invalid password!" });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
      message: "Logged in successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: "Cannot log in!", details: error.message });
    res.status(500).json(error);
  }
});

router.get("/me", authenticate, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { id: true, name: true, email: true },
    });
    if (!user) {
      res.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
