import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_1234567890",
      amount: total * 100,
      currency: "INR",
      name: "QuickBite",
      description: "Food Order Payment",
      handler: function (response) {
        alert(
          "Payment Successful ✅\nPayment ID: " +
            response.razorpay_payment_id
        );
      },
      theme: {
        color: "#000",
      },
    };

    const razor = new window.Razorpay(options);

    razor.open();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout 💳</h1>

      <div style={{ marginTop: "20px" }}>
        {cart.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <h2>{item.name}</h2>

            <p>Quantity: {item.qty}</p>

            <h3>
              ₹{item.price * item.qty}
            </h3>
          </div>
        ))}
      </div>

      <h2>Total Amount: ₹{total}</h2>

      <button
        onClick={handlePayment}
        style={{
          background: "green",
          color: "white",
          padding: "15px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}