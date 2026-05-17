// client/src/pages/Home.jsx

import { useEffect, useState } from "react";

function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods([
      {
        _id: 1,
        name: "Burger",
        price: 120,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
      {
        _id: 2,
        name: "Pizza",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      },
      {
        _id: 3,
        name: "Pasta",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
      },
      {
        _id: 4,
        name: "French Fries",
        price: 90,
        image:
          "https://images.unsplash.com/photo-1576107232684-1279f390859f",
      },
    ]);
  }, []);

  const addToCart = (food) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(food);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${food.name} added to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-center mb-12">
        Popular Foods
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">
                {food.name}
              </h2>

              <p className="text-gray-600 text-xl mt-2">
                ₹{food.price}
              </p>

              <button
                onClick={() => addToCart(food)}
                className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-xl mt-5 text-lg font-semibold"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;