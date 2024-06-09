"use client";
import React, { useState } from "react";
import "../../styles/login.css";
import { useRouter } from "next/navigation";
const Login = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("https://profbattle.onrender.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      router.push("/rated");
      console.log(data);
    } catch (error) {
      console.error("Failed to sign in:", error);
    }
  };
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      
      const response = await fetch("https://profbattle.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Failed to sign up:", error);
    }
  };

  return (
      <div className={`container ${isRegisterActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <input type="text"
            placeholder="username"
            onChange={(e) => setEmail(e.target.value)}
           />
  
          <input onChange={(e) => setPassword(e.target.value)}
          type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
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
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
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