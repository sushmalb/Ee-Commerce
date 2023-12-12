const express = require("express");
const router = express.Router();
const {
  registerRoute,
  loginRoute,
  refreshRoute,
  logoutRoute,
} = require("../controllers/Auth.controler");

router.post("/register", registerRoute);
router.post("/login", loginRoute);
router.post("/refresh-token", refreshRoute);
router.delete("/logout", refreshRoute);

module.exports = router;
