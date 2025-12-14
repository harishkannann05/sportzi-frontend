import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./css/App.css";
import "./css/about.css";
import "./css/bg.css";

import sportsImg from "./assets/sports_game2.png";
import scrollicon from "./assets/scroll.png";
import playerimg from "./assets/player.png";
import ownerimg from "./assets/owner.png";
import coachimg from "./assets/coach.png";


import Footer from "./footer";  // <-- Add this

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollText = document.querySelector(".scroll-down");
      const extraContent = document.querySelector(".extra-content");
      const aboutGrid = document.querySelector(".about-grid");

      if (window.scrollY > 80) {
        scrollText.classList.add("hide");
        extraContent.classList.add("show");
      } else {
        scrollText.classList.remove("hide");
        extraContent.classList.remove("show");
      }

      if (window.scrollY > 300) {
        aboutGrid.classList.add("show");
      } else {
        aboutGrid.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>



      <div className="hero-layout">

        <div className="left-bg">
          <img src={sportsImg} alt="Sports Illustration" className="bg-img" />
        </div>

        <div className="right-content">

          <p className="scroll-down">Scroll Down <img src={scrollicon} alt="" /></p>

          <section className="hero">
            <h1 className="hero-title">Welcome to SPORTZI</h1>
            <p className="hero-sub">Your All-in-One Sports Management System</p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate("/team-register")}>Create Your Team</button>
            </div>
          </section>
          <section className="extra-section">
            <div className="extra-content hidden">
              <p>If you haven’t created a team yet, please create one before choosing your role.</p>

              {/* ROLE SELECTION SECTION */}

              <div className="outer-grid">
                <div className="inner-grid">

                  <h3 className="role-heading">Choose Your Role</h3>

                  <div className="role-boxes">

                    {/* CARD 1 */}
                    <div className="card">
                      <div className="card-inner">

                        {/* FRONT */}
                        <div className="card-front">
                          <img src={playerimg} alt="player" />
                          <p>Player</p>
                        </div>

                        {/* BACK */}
                        <div className="card-back">
                          <h4>Player</h4>
                          <button onClick={() => navigate("/login")}>Login</button>
                          <button onClick={() => navigate("/signup")}>Register</button>
                        </div>

                      </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="card">
                      <div className="card-inner">
                        <div className="card-front">
                          <img src={coachimg} alt="coach" />
                          <p>Coach</p>
                        </div>
                        <div className="card-back">
                          <h4>Coach</h4>
                          <button className="white" onClick={() => navigate("/login")}>Login</button>
                          <button className="black" onClick={() => navigate("/signup")}>Register</button>
                        </div>
                      </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="card">
                      <div className="card-inner">
                        <div className="card-front">
                          <img src={ownerimg} alt="admin" />
                          <p>Admin</p>
                        </div>
                        <div className="card-back">
                          <h4>Admin</h4>
                          <button onClick={() => navigate("/login")}>Login</button>
                          <button onClick={() => navigate("/team-register")}>Register</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>



              {/* ABOUT SECTION */}
              <div className="about-section">
                <div className="about-grid">

                  <h3 className="role-heading">About SPORTZI</h3>

                  <div className="role-boxes">

                    <div className="card about-card">
                      <div className="card-inner">

                        {/* FRONT */}
                        <div className="card-front about-front">
                          {/* <h4>About Us</h4> */}
                          <p>
                            <ul>
                              <li>SPORTZI is an all-in-one sports management platform designed to connect players, coaches, and administrators in one place.
                              </li><li>It simplifies team creation, match scheduling, performance tracking, and communication, making sports management seamless and efficient.<br></br>
                              </li><li>Whether you’re managing a local team or organizing large tournaments, SPORTZI brings everything together with a modern, user-friendly experience.
                              </li>
                            </ul>
                          </p>
                        </div>

                        {/* BACK */}
                        <div className="card-back about-back">
                          <h4>Contact Us</h4>

                          <form className="feedback-form">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit">Send</button>
                          </form>
                        </div>


                      </div>
                    </div>

                  </div>
                </div>
              </div>


            </div>

          </section>
        </div>

      </div>

      <Footer />
    </>
  );
}
