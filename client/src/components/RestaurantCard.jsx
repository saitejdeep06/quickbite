import { useEffect, useState } from "react";

import API from "../api/axios";

import FoodCard from "../components/FoodCard";

const Restaurant = () => {
  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    try {
      const { data } = await API.get(
        "/restaurants/foods/all"
      );

      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold text-orange-500 mb-10">
        Food Menu 🍕
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {foods.map((food) => (
          <FoodCard
            key={food._id}
            food={food}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;