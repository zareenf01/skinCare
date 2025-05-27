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
  console.log("Request Body:", req.body);
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
    res
      .status(500)
      .json({ error: "Cannot create product", details: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.log("Cannot delete the product", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

module.exports = router;
