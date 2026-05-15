export default function FoodCard({ food, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <img
        src={
          food.image ||
          "https://via.placeholder.com/300"
        }
        alt={food.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <h2>{food.name || "Food Item"}</h2>

      <p>₹{food.price || 0}</p>

      <button onClick={() => addToCart(food)}>
        Add To Cart
      </button>
    </div>
  );
}