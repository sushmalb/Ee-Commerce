const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
// import routes
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/products");

//app
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://sushmalb:Sushm%4014@cluster0.ptg1vhv.mongodb.net/e-commerce"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

// Routes
app.use("/api", userRoutes);
app.use(productRoutes);

port;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
