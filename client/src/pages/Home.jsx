import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { CartContext } from "../context/CartContext";

export default function Home() {
  const [foods, setFoods] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/foods"
      );

      console.log(res.data);

      setFoods(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>QuickBite Foods 🍔</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {foods.map((food) => (
          <div
            key={food._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "white",
            }}
          >
            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h2>{food.name}</h2>

            <p>{food.description}</p>

            <h3>₹{food.price}</h3>

            <button
              onClick={() => addToCart(food)}
              style={{
                background: "black",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}