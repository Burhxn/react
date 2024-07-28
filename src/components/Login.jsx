import React, { useState } from "react";
import "../styles/Login.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const formData = { email, password };
  const baseUrl = "http://localhost:3000";

  const LoginHandler = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/login`, formData);

      if (res.data.message === "user loggin success") {
        toast.success("User Logged In succesfully!");
      } else {
        toast.error(res.data.message);
      }

      const { token } = res.data;

      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick() {
    LoginHandler();
  }

  return (
    <>
      <ToastContainer position="top-center" />

      <div className="login">
        <div className="main">
          <h1> Login to your Account</h1>

          <form className="form">
            <input
              placeholder="Enter your Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </form>

          <button onClick={handleClick} className="btn"> Login </button>
          <p>Not a User <Link to ="/signup"> Signup </Link>  </p>

        </div>
      </div>
    </>
  );
};

export default Login;
