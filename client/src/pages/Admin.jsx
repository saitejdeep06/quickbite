import { useEffect, useState } from "react";

const Admin = () => {
  const [foods, setFoods] = useState([]);

  const [food, setFood] = useState({
    name: "",
    image: "",
    price: "",
  });

  // LOAD SAVED FOODS
  useEffect(() => {
    const savedFoods =
      JSON.parse(
        localStorage.getItem("foods")
      ) || [];

    setFoods(savedFoods);
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  // ADD FOOD
  const addFood = (e) => {
    e.preventDefault();

    const updatedFoods = [
      ...foods,
      {
        id: Date.now(),
        ...food,
      },
    ];

    setFoods(updatedFoods);

    localStorage.setItem(
      "foods",
      JSON.stringify(updatedFoods)
    );

    setFood({
      name: "",
      image: "",
      price: "",
    });
  };

  // DELETE FOOD
  const deleteFood = (id) => {
    const updatedFoods =
      foods.filter(
        (item) => item.id !== id
      );

    setFoods(updatedFoods);

    localStorage.setItem(
      "foods",
      JSON.stringify(updatedFoods)
    );
  };

  return (
    <div className="p-10">

      <h1 className="text-6xl font-bold text-orange-500 mb-10">
        Admin Dashboard 👨‍💻
      </h1>

      {/* ANALYTICS */}
      <div className="grid md:grid-cols-3 gap-10 mb-16">

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold">
            Foods
          </h2>

          <p className="text-5xl mt-5 text-orange-500">
            {foods.length}
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold">
            Orders
          </h2>

          <p className="text-5xl mt-5 text-orange-500">
            10
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold">
            Revenue
          </h2>

          <p className="text-5xl mt-5 text-orange-500">
            ₹5000
          </p>
        </div>

      </div>

      {/* ADD FOOD */}
      <div className="bg-white p-10 rounded-3xl shadow-xl mb-16">

        <h2 className="text-4xl font-bold mb-8">
          Add Food
        </h2>

        <form
          onSubmit={addFood}
          className="grid md:grid-cols-3 gap-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={food.name}
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={food.image}
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={food.price}
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <button className="bg-orange-500 text-white py-4 rounded-xl text-xl font-bold md:col-span-3">
            Add Food
          </button>

        </form>
      </div>

      {/* FOOD LIST */}
      <div className="bg-white p-10 rounded-3xl shadow-xl">

        <h2 className="text-4xl font-bold mb-8">
          Manage Foods
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {foods.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h2 className="text-3xl font-bold">
                  {item.name}
                </h2>

                <p className="text-orange-500 text-2xl font-bold mt-3">
                  ₹{item.price}
                </p>

                <button
                  onClick={() =>
                    deleteFood(item.id)
                  }
                  className="mt-5 bg-red-500 text-white px-5 py-3 rounded-xl"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Admin;