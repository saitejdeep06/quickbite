import { useEffect, useState } from "react";
import axios from "axios";

const Restaurant = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/restaurants/foods/all"
      );

      setFoods(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-5xl font-bold">
          Loading Foods...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-16">
      
      <h1 className="text-6xl font-bold text-orange-500 mb-14">
        Food Menu 🍕
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-7">
              <h2 className="text-4xl font-bold">
                {food.name}
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                {food.description}
              </p>

              <div className="flex justify-between items-center mt-8">
                <h3 className="text-5xl font-bold text-orange-500">
                  ₹{food.price}
                </h3>

                <button className="bg-orange-500 text-white px-7 py-3 rounded-2xl text-xl font-bold hover:bg-orange-600">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Restaurant;