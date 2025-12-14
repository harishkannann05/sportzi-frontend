import React, { useState } from "react";
import "./css/signup.css";
import { Link } from "react-router-dom";
import Footer2 from "./footer2";

export default function Signup() {
  const [role, setRole] = useState("");
      window.scrollTo(0, 0);

  return (
    <>
    <div className="signup-page">
      <div className="signup-card">

        <h2 className="signup-title">Join SPORTZI</h2>
        <p className="signup-sub">
          Sign up as a Player or Coach using your team username.
        </p>

        <form className="signup-form">

          {/* COMMON INFO */}
          <input type="text" placeholder="Team Username *" />
          <input type="text" placeholder="Full Name *" />

          <select onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role *</option>
            <option value="player">Player</option>
            <option value="coach">Coach</option>
          </select>

          <input type="email" placeholder="Email *" />
          <input type="tel" placeholder="Phone Number *" />
          <input type="number" placeholder="Age *" />

          {/* ROLE BASED */}
          {role === "player" && (
            <select>
              <option value="">Player Position *</option>
              <option>Goalkeeper</option>
              <option>Defender</option>
              <option>Midfielder</option>
              <option>Forward</option>
            </select>
          )}

          {role === "coach" && (
            <select>
              <option value="">Coach Type *</option>
              <option>Head Coach</option>
              <option>Assistant Coach</option>
              <option>Fitness Coach</option>
            </select>
          )}

          <input type="password" placeholder="Password *" />

          <button type="submit">Create Account</button>
        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
    <Footer2 />
    </>
  );
}
