const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/oily", async (req, res) => {
  const products = await Product.find({ skinType: "oily" });
  res.json(products);
});

router.get("/dry", async (req, res) => {
  const products = await Product.find({ skinType: "dry" });
  res.json(products);
});


router.get("/normal", async (req, res) => {
  const products = await Product.find({ skinType: "normal" });
  res.json(products);
});

router.get("/combination", async (req, res) => {
  const products = await Product.find({ skinType: "combination" });
  res.json(products);
});

module.exports = router;

