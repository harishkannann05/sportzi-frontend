import React, { useEffect } from "react";
import "./css/nav.css";

export default function nav() {

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
          <a className="logo" href="#">Sportzi</a>

          <div className="header-buttons">
            <a className="btn-login" href="http://localhost/DBMS/login.php">Login</a>
            <a className="btn-signup" href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
}
