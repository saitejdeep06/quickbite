import { useEffect, useState, useContext } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  const { addToCart, cartItems } =
    useContext(CartContext);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/foods"
      );

      setFoods(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      {/* TOP BAR */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          QuickBite Menu 🍔
        </h1>

        {/* CART BUTTON */}

        <Link to="/cart">
          <button
            style={{
              background: "black",
              color: "white",
              border: "none",
              padding: "15px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Cart ({cartItems.length})
          </button>
        </Link>
      </div>

      {/* FOOD GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {foods.map((food) => (
          <div
            key={food._id}
            style={{
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            {/* IMAGE */}

            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            {/* CONTENT */}

            <div
              style={{
                padding: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "35px",
                  marginBottom: "10px",
                }}
              >
                {food.name}
              </h2>

              <p
                style={{
                  color: "#555",
                  marginBottom: "20px",
                  fontSize: "18px",
                }}
              >
                {food.description}
              </p>

              {/* PRICE + BUTTON */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "30px",
                  }}
                >
                  ₹ {food.price}
                </h3>

                <button
                  onClick={() =>
                    addToCart(food)
                  }
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    background: "black",
                    color: "white",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;