// client/src/components/Navbar.jsx

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-4xl font-bold"
        >
          QuickBite
        </Link>

        <div className="flex gap-6">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-yellow-200"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="text-white text-lg font-semibold hover:text-yellow-200"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;