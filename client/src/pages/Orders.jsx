export default function Orders() {
  const orders = [
    {
      id: 1,
      food: "Chicken Burger",
      amount: 199,
      status: "Delivered",
    },
    {
      id: 2,
      food: "Pizza",
      amount: 349,
      status: "Preparing",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders 📦</h1>

      <div style={{ marginTop: "20px" }}>
        {orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <h2>{order.food}</h2>

            <p>Amount: ₹{order.amount}</p>

            <p>Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}