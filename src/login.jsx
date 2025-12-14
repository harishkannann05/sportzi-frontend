import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";
import Footer2 from "./footer2";

export default function Login() {
    window.scrollTo(0, 0);
  return (
    <>
      <div className="auth-page">
        <div className="auth-card">

          <h2 className="auth-title">Login to SPORTZI</h2>
          <p className="auth-sub">
            Welcome back! Please login to continue.
          </p>

          <form className="auth-form">
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>

          <p className="auth-footer">
            Don’t have an account?{" "}
            <Link to="/signup" className="auth-link">
              Sign up
            </Link>
          </p>

        </div>
      </div>

      <Footer2 />
    </>
  );
}
