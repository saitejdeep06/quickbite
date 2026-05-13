import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import API from "../config/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${API}/api/auth/login`,
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful 🎉");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, orange, #ff4d4d)",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "60px",
          }}
        >
          Login 🔐
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "18px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            background: "#e9eefc",
            fontSize: "18px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "18px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            background: "#e9eefc",
            fontSize: "18px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "18px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          Don’t have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;