import "./login.css";
import { Link } from "react-router-dom";
import React, { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
  const { dispatch, isFetching } = useContext(Context);

  const userRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="" className="email">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="loginInput"
          placeholder="Enter your username ..."
          ref={userRef}
        />
        <label htmlFor="" className="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
