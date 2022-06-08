import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function Register() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const res = await axios.post("/auth/register", {
        username: user.username,
        password: user.password,
        email: user.email,
      });
      Swal.fire({
        title: "Đăng ký thành công!",
        icon: "success",
        confirmButtonText: "Đóng",
      });

      res.data && window.location.replace("/login");
    } catch (e) {
      Swal.fire({
        title: "Đăng ký thất bại!",
        icon: "error",
        confirmButtonText: "Đóng",
      });
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label htmlFor="" className="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={handleChange}
        />
        <label htmlFor="" className="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={handleChange}
        />
        <label htmlFor="" className="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={handleChange}
        />
        <button className="registerButton" onClick={handleSubmit}>
          Register
        </button>
        <div className="registerAria">
          <p>You already have registered ?</p>
          <Link className="link" to="/login">
            <span className="registerLoginButton">Please Login</span>
          </Link>
        </div>
      </form>
      {error && (
        <span
          style={{
            color: "red",
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Something went wrong !
        </span>
      )}
    </div>
  );
}
