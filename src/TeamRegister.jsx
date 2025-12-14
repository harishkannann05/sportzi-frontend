import React from "react";
import { Link } from "react-router-dom";
import "./css/teamRegister.css";   // ✅ use team register css
import Footer2 from "./footer2";

export default function TeamRegister() {
    window.scrollTo(0, 0);
  return (
    <>
    <div className="team-register-page">
      <div className="team-register-card">

        <h2 className="team-register-title">Register Your Team</h2>
        <p className="team-register-sub">
          Create your team and become the team owner.
        </p>

        <form className="team-register-form">

          {/* TEAM INFO */}
          <input type="text" placeholder="Team Name *" />
          <input type="text" placeholder="Team Username (unique) *" />

          {/* SPORT SELECTION */}
          <select>
            <option value="">Select Sport *</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
          </select>

          {/* LOCATION */}
          <input type="text" placeholder="City / Location *" />
          <input type="text" placeholder="Home Ground" />

          {/* OWNER INFO */}
          <input type="text" placeholder="Owner Name *" />
          <input type="email" placeholder="Owner Email *" />
          <input type="tel" placeholder="Contact Number *" />
          <input type="password" placeholder="Password *" />

          <button type="submit">Create Team</button>
        </form>

        <p className="team-register-footer">
          Already have a team?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
    <Footer2 />
    </>
  );
}
