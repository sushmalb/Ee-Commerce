const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const createError = require("http-errors");

require("dotenv").config();
const cors = require("cors");

// import routes
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/Auth.route");

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
app.use("/auth", authRoutes);

// ERROR HANDLING FOR INVALID ROUTES
app.use(async (req, res, next) => {
  // AS WE ARE USING HTTP-ERRORS PACKAGE , THE BELOW THREE LINES WOULDNT BE REQUIRED
  // const err = new Error("Not Found !!");
  // err.status = 404;
  // next(err);

  //If no param given in NotFound, it would just write "Not Found" instead
  next(createError.NotFound("This route doesnt exist"));
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
