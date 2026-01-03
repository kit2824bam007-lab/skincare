const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  skinType: String,
  price: Number,
  image: String,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
