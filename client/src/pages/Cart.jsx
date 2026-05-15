import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart } =
    useContext(CartContext);

  const increaseQty = (item) => {
    addToCart(item);
  };

  const decreaseQty = (id, qty) => {
    if (qty === 1) {
      removeFromCart(id);
      return;
    }

    const updatedCart = cart.map((item) =>
      item._id === id
        ? { ...item, qty: item.qty - 1 }
        : item
    );

    localStorage.setItem(
      "quickbite-cart",
      JSON.stringify(updatedCart)
    );

    window.location.reload();
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart 🛒</h1>

      {cart.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {cart.map((item) => (
              <div
                key={item._id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  background: "white",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <h2>{item.name}</h2>

                <h3>₹{item.price}</h3>

                <p>
                  Quantity:
                  <button
                    onClick={() =>
                      decreaseQty(
                        item._id,
                        item.qty
                      )
                    }
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    -
                  </button>

                  {item.qty}

                  <button
                    onClick={() =>
                      increaseQty(item)
                    }
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    +
                  </button>
                </p>

                <h3>
                  Total: ₹
                  {item.price * item.qty}
                </h3>

                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                  style={{
                    background: "red",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "30px" }}>
            Grand Total: ₹{total}
          </h2>

          <a href="/checkout">
            <button
              style={{
                marginTop: "20px",
                background: "green",
                color: "white",
                padding: "15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Proceed To Checkout
            </button>
          </a>
        </>
      )}
    </div>
  );
}