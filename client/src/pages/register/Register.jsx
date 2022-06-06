import "./register.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label htmlFor="" className="username">
          Username
        </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label htmlFor="" className="email">
          Email
        </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label htmlFor="" className="password">
          Password
        </label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
}
