"use client";
import React, { useState } from "react";
import "../../styles/login.css";

const Login = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  const handleSignIn = () => {
    try{
      fetch("https://profbattle.onrender.com/token", {
        method: "POST",
        body: JSON.stringify({ username:email, password:password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
        });
    } catch (error) {
      console.error("Failed to fetch professors:", error);
    }
  };
  const handleSignUp = () => {
    try{
      fetch("https://profbattle.onrender.com/register", {
        method: "POST",
        body: JSON.stringify({ username:email, password:password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
        });
    } catch (error) {
      console.error("Failed to fetch professors:", error);
    }
  };

  return (
      <div
        className={`container ${isRegisterActive ? "active" : ""}`}
        id="container"
      >
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="SignUpBtn">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
       
          <button className="signbtn">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button
              className={isRegisterActive ? "" : "hidden"}
              onClick={handleLoginClick}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button
              className={!isRegisterActive ? "" : "hidden"}
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;