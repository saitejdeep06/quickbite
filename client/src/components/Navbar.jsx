import { Link } from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import { logout } from "../redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector(
    (state) => state.auth
  );

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">

        <Link
          to="/"
          className="text-5xl font-extrabold text-orange-500"
        >
          QuickBite
        </Link>

        <div className="flex gap-8 items-center">

          <Link
            to="/restaurant"
            className="font-bold text-2xl hover:text-orange-500"
          >
            Foods
          </Link>

          <Link
            to="/cart"
            className="font-bold text-2xl hover:text-orange-500"
          >
            Cart ({cartItems.length})
          </Link>

          {userInfo ? (
            <>
              <span className="font-bold text-xl">
                👋 {userInfo.name}
              </span>

              <button
                onClick={logoutHandler}
                className="bg-red-500 text-white px-6 py-3 rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-xl">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-xl">
                  Register
                </button>
              </Link>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;