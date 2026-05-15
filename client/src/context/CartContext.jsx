import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("quickbite-cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "quickbite-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (food) => {
    const existing = cart.find(
      (item) => item._id === food._id
    );

    if (existing) {
      const updatedCart = cart.map((item) =>
        item._id === food._id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item._id !== id
    );

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}