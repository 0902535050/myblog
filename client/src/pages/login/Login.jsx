import "./login.css";
import { Link, useHistory } from "react-router-dom";
import React, { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const { dispatch, isFetching } = useContext(Context);
  const history = useHistory();
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
      Swal.fire({
        title: "Đăng nhập thành công!",
        text: `Xin chào ${userRef.current.value}`,
        icon: "success",
        confirmButtonText: "Đóng",
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      history.push("/");
    } catch (err) {
      Swal.fire({
        title: "Đăng nhập thất bại!",
        text: "Email hoặc mật khẩu nhập chưa đúng vui lòng nhập lại !!",
        icon: "error",
        confirmButtonText: "Đóng",
      });
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
        <div className="loginAria">
          <p>First time to come ?</p>
          <Link className="link" to="/register">
            <span className="loginRegisterButton">Please Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
