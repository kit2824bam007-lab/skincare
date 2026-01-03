const express = require("express");
const router = express.Router();
const Cart = require("../models/Cartbd"); 

router.post("/add", async (req, res) => {
  try {
    const item = new Cart(req.body);
    await item.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get("/", async (req, res) => {
  const items = await Cart.find();
  res.json(items);
});

router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;

