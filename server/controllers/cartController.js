const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      userId: req.params.userId,
    });

    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item removed",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};