const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  try {
    const { items, amount, address, phone, paymentMethod } = req.body;

    const newOrder = new Order({
      user: req.user.id,
      items,
      amount,
      address,
      phone,
      paymentMethod,
    });

    await newOrder.save();

    res.json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  placeOrder,
  getMyOrders,
};