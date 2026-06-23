import React, { useState } from "react";
import "./Login.css";
import Footer from "./Footer";
import Admin from "./Admin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Example validation
    if (email === "admin@gmail.com" && password === "admin123") {
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="show-password">
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </div>
          </div>

          <a href="/Admin" type="submit" className="login-btn">Login</a>

          
      
        </form>
      </div>
    </div>

  );
}

export default Login;