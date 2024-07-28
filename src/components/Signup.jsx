import axios from "axios";
import React, { useState } from "react";
import "../styles/Signup.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const formDataArr = new FormData();
  // formDataArr.append("username", username);
  // formDataArr.append("email", email);
  // formDataArr.append("password", password);

  const baseUrl = "http://localhost:3000";

  const handleSignup = async () => {
    try {
      // xml http post request
      const res = await axios.post(`${baseUrl}/user/signup`, {
        username,
        email,
        password,
      });

      if (res.data.message === "User Saved Succesfully") {
        toast.success("User Saved Succesfully!");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  function handleClick() {
    handleSignup();
  }

  return (
    <>
      <ToastContainer  />
      <div className="signup"> 
        <div className="main">
          <h1>Register With Us</h1>
          <form className="form">
            <input
              placeholder="Enter your username "
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <input
              placeholder="Enter your Email "
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              placeholder="Enter your password "
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </form>

          <button onClick={handleClick} className="btn">
            Register
          </button>

          <p>Already have an account <Link to ="/login"> Login </Link>  </p>
           

          
          
        </div>
      </div>
    </>
  );
};

export default Signup;
