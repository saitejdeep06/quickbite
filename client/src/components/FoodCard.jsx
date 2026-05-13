import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

import { addToCart } from "../redux/cartSlice";

const FoodCard = ({ food }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(food));

    toast.success("Added To Cart");
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 duration-300">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {food.name}
        </h2>

        <p className="text-gray-500 mt-3">
          {food.description}
        </p>

        <div className="flex justify-between items-center mt-5">

          <h3 className="text-3xl font-bold text-orange-500">
            ₹{food.price}
          </h3>

          <button
            onClick={addToCartHandler}
            className="bg-orange-500 text-white px-5 py-3 rounded-xl"
          >
            Add
          </button>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;