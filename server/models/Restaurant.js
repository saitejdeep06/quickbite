const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  category: String,
});

module.exports = mongoose.model(
  "Restaurant",
  restaurantSchema
);