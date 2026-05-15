import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          background: "black",
          color: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>QuickBite 🍔</h1>

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

          <Link style={{ color: "white" }} to="/login">
            Login
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>
    </BrowserRouter>
  );
}