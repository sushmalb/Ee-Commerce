const express = require("express");
const router = express.Router();

const {
  products,
  getAllProducts,
  getProductById,
  deleteById,
  updateByID,
} = require("../controllers/products");

router.post("/products", products);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteById);
router.patch("/products/:id", updateByID);

module.exports = router;
