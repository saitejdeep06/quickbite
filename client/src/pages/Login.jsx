import { useState } from "react";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const loginUser = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      /* SAVE TOKEN */

      localStorage.setItem(
        "token",
        res.data.token
      );

      /* SAVE USER */

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful 🚀");

      navigate("/");
    } catch (err) {
      alert(
        err.response?.data?.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-orange-500 to-red-500">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[450px]">
        <h1 className="text-5xl font-bold text-center mb-10">
          Login 🔐
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-4 rounded-2xl mb-5 text-lg"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-4 rounded-2xl mb-8 text-lg"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={loginUser}
          className="w-full bg-black text-white py-4 rounded-2xl text-xl font-bold"
        >
          {loading
            ? "Loading..."
            : "Login"}
        </button>

        <p className="text-center mt-6 text-lg">
          Don’t have an account?
          <Link
            to="/register"
            className="text-orange-500 font-bold ml-2"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}