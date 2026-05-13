const Food = require("../models/Food");

/* GET ALL FOODS */

exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/* ADD FOOD */

exports.addFood = async (req, res) => {
  try {
    const {
      name,
      image,
      price,
      category,
      description,
    } = req.body;

    const food = await Food.create({
      name,
      image,
      price,
      category,
      description,
    });

    res.status(201).json(food);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};