import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import API from "../config/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${API}/api/auth/register`,
        formData
      );

      alert("Registration Successful 🎉");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Register Failed");
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
        onSubmit={handleRegister}
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
          Register 🚀
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
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
          {loading ? "Loading..." : "Register"}
        </button>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;