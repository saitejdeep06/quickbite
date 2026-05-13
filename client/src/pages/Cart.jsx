import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const deliveryFee = 50;

  const gst = subtotal * 0.18;

  const finalTotal =
    subtotal + deliveryFee + gst;

  return (
    <div
      style={{
        padding: "40px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart Is Empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "20px",
                marginBottom: "25px",
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                boxShadow:
                  "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "170px",
                    height: "130px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />

                <div>
                  <h2>{item.name}</h2>

                  <p
                    style={{
                      color: "gray",
                    }}
                  >
                    ₹ {item.price}
                  </p>

                  <p>
                    Total: ₹{" "}
                    {item.price *
                      item.quantity}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <button
                  onClick={() =>
                    decreaseQuantity(
                      item.id
                    )
                  }
                  style={{
                    padding:
                      "10px 15px",
                    background:
                      "black",
                    color: "white",
                    border: "none",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  -
                </button>

                <h2>
                  {item.quantity}
                </h2>

                <button
                  onClick={() =>
                    increaseQuantity(
                      item.id
                    )
                  }
                  style={{
                    padding:
                      "10px 15px",
                    background:
                      "black",
                    color: "white",
                    border: "none",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  +
                </button>

                <button
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                  style={{
                    padding:
                      "12px 18px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "20px",
              marginTop: "40px",
              boxShadow:
                "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                marginBottom: "25px",
              }}
            >
              🧾 Checkout Summary
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "15px",
              }}
            >
              <p>Total Items</p>

              <p>
                {cartItems.length}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "15px",
              }}
            >
              <p>Subtotal</p>

              <p>
                ₹{" "}
                {subtotal.toFixed(2)}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "15px",
              }}
            >
              <p>Delivery Fee</p>

              <p>
                ₹{" "}
                {deliveryFee.toFixed(
                  2
                )}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "15px",
              }}
            >
              <p>GST (18%)</p>

              <p>
                ₹ {gst.toFixed(2)}
              </p>
            </div>

            <hr />

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              <h1>Final Total</h1>

              <h1>
                ₹{" "}
                {finalTotal.toFixed(
                  2
                )}
              </h1>
            </div>

            <button
              onClick={() =>
                navigate("/checkout")
              }
              style={{
                width: "100%",
                padding: "18px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;