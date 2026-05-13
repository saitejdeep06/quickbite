import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.get(
        `http://localhost:5000/api/orders/${
          user?._id || "guest-user"
        }`
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
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
      <h1>My Orders 📦</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <h3>Order ID: {order._id}</h3>

          <p>Status: {order.orderStatus}</p>

          <p>
            Total Amount:
            ₹ {order.totalAmount}
          </p>

          <p>
            Payment:
            {order.paymentMethod}
          </p>

          <h4>Items:</h4>

          {order.items.map((item) => (
            <div key={item.id}>
              {item.name} x {item.quantity}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;