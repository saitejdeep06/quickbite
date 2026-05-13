const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getMyOrders,
} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/place", authMiddleware, placeOrder);

router.get("/my-orders", authMiddleware, getMyOrders);

module.exports = router;