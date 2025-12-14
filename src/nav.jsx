import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/nav.css";

export default function Nav() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const logo = document.querySelector(".logo");

      if (window.scrollY > 10) {
        header.classList.add("scrolled");
        logo.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        logo.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-row">
          <Link to="/" className="logo">SPORTZI</Link>

          <div className="header-buttons">
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/signup" className="btn-signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
