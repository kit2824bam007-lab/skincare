const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/skinfizz")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/api/cart", require("./routes/cartRoutes"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
