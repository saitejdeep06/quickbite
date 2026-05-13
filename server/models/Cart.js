const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: String,

    foodId: String,

    quantity: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);