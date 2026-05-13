import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryFee = 50;

  const gst = subtotal * 0.18;

  const finalTotal = subtotal + deliveryFee + gst;

  const placeOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.post(
        "http://localhost:5000/api/orders/place",
        {
          userId: user?._id || "guest-user",

          items: cartItems,

          address,

          phone,

          paymentMethod,

          totalAmount: finalTotal,
        }
      );

      clearCart();

      navigate("/success", {
        state: {
          order: res.data.order,
        },
      });
    } catch (error) {
      alert("Order Failed");
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h1>Checkout 🛒</h1>

        <input
          type="text"
          placeholder="Delivery Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <option>COD</option>
          <option>UPI</option>
          <option>Card</option>
        </select>

        <div style={{ marginTop: "30px" }}>
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <p>
                {item.name} x {item.quantity}
              </p>

              <p>
                ₹ {item.price * item.quantity}
              </p>
            </div>
          ))}

          <hr />

          <h3>
            Final Total: ₹ {finalTotal.toFixed(2)}
          </h3>
        </div>

        <button
          onClick={placeOrder}
          style={{
            width: "100%",
            marginTop: "30px",
            padding: "18px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;