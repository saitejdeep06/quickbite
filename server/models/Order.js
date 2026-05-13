const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    items: Array,

    amount: Number,

    address: String,

    phone: String,

    paymentMethod: String,

    status: {
      type: String,
      default: "Preparing",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);