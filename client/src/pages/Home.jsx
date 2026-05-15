import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/foods`
      );

      setFoods(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load foods");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h1 style={{ padding: "40px" }}>
        Loading Foods...
      </h1>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "30px" }}>
        QuickBite Foods 🍔
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {foods.map((food) => (
          <div
            key={food._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
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

            <h2>₹{food.price}</h2>

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

export default Home;