import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();

  const order = location.state?.order;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
          width: "500px",
        }}
      >
        <h1>Order Successful 🎉</h1>

        <h3>
          Order ID:
          <br />
          {order?._id}
        </h3>

        <p style={{ marginTop: "20px" }}>
          Estimated Delivery:
          <br />
          30-40 Minutes
        </p>

        <p>
          Payment Method:
          <br />
          {order?.paymentMethod}
        </p>

        <Link to="/orders">
          <button
            style={{
              marginTop: "30px",
              padding: "15px 30px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            View Orders
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;