const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json("Cannot fetch products");
  }
});

router.post("/create", async (req, res) => {
  const { name, description, price, image } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
      },
    });
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json("Cannot create product");
  }
});

module.exports = router;
