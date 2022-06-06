import "./login.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="" className="email">
          Email
        </label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label htmlFor="" className="password">
          Password
        </label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
