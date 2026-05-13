const Restaurant = require("../models/Restaurant");
const Food = require("../models/Food");

const getRestaurants = async (req, res) => {
  try {
    const restaurants =
      await Restaurant.find();

    res.json(restaurants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate(
      "restaurant"
    );

    res.json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getRestaurants,
  getFoods,
};