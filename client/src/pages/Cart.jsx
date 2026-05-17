// client/src/pages/Cart.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(items);
  }, []);

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold mb-10 text-center">
        Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-2xl">
          Cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-5 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-xl mt-2">
                    ₹{item.price}
                  </p>
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-4xl font-bold">
              Total: ₹{total}
            </h2>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl mt-6 text-xl font-semibold"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;