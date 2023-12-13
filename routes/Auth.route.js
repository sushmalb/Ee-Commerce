const express = require("express");
const router = express.Router();
const { authSchema } = require("../helpers/validation_schema");

const {
  registerRoute,
  loginRoute,
  refreshRoute,
  logoutRoute,
} = require("../controllers/Auth.controler");

router.post("/register", registerRoute);
router.post("/login", loginRoute);
router.post("/refresh-token", refreshRoute);
router.delete("/logout", logoutRoute);

module.exports = router;
