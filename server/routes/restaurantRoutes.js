const express = require("express");

const router = express.Router();

const Restaurant = require("../models/Restaurant");

router.get("/foods/all", async (req, res) => {
  try {
    const foods = await Restaurant.find();

    res.json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;