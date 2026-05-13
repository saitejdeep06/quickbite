import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Foods from "./pages/Foods";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/foods" element={<Foods />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;