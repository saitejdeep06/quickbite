import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div>
      <nav
        style={{
          background: "black",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>QuickBite 🍔</h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>

          <Link style={{ color: "white" }} to="/cart">
            Cart
          </Link>

          <Link style={{ color: "white" }} to="/orders">
            Orders
          </Link>

          <Link style={{ color: "white" }} to="/checkout">
            Checkout
          </Link>

          <Link style={{ color: "white" }} to="/login">
            Login
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;