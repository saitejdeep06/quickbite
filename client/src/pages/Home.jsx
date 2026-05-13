import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
          
          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              Delicious Food <br /> Delivered Fast 🚀
            </h1>

            <p className="mt-6 text-2xl text-orange-100">
              Order food from your favorite restaurants anytime anywhere.
            </p>

            <div className="mt-10 flex gap-5">
              <Link
                to="/restaurant"
                className="bg-white text-orange-500 px-8 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition"
              >
                Explore Foods
              </Link>

              <Link
                to="/cart"
                className="border-2 border-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white hover:text-orange-500 transition"
              >
                View Cart
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
              alt="food"
              className="w-[500px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Why Choose QuickBite?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-3xl font-bold mb-4">
              Fast Delivery
            </h3>
            <p className="text-gray-500 text-lg">
              Get food delivered within minutes.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <div className="text-6xl mb-6">🍔</div>
            <h3 className="text-3xl font-bold mb-4">
              Best Restaurants
            </h3>
            <p className="text-gray-500 text-lg">
              Top restaurants and premium dishes.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <div className="text-6xl mb-6">💳</div>
            <h3 className="text-3xl font-bold mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-500 text-lg">
              Safe and easy online payments.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;