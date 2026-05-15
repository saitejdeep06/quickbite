import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        background: "#111",
        color: "white",
      }}
    >
      <h2>QuickBite 🍔</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart</Link>
        <Link to="/orders" style={{ color: "white" }}>Orders</Link>
        <Link to="/login" style={{ color: "white" }}>Login</Link>
      </div>
    </nav>
  );
}