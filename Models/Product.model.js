const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  price: { type: "number", required: true },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
