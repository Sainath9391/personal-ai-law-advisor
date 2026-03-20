import React from "react";
import { Link } from "react-router-dom";
import lawImage from "../assets/law-ai.png";


function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>AI Powered Legal Intelligence</h1>

        <p>
          Understand legal rights, analyze documents, and receive
          intelligent legal guidance with our AI Legal Advisor.
        </p>

        <div className="hero-buttons">
          <Link to="/advisor">
            <button className="primary-btn">Start Consultation</button>
          </Link>

        <Link to="/features">
        <button className="secondary-btn">
        Explore Features
        </button>
        </Link>
        </div>

      </div>

      <div className="hero-image">
        <img src={lawImage} alt="AI Legal Advisor"/>
      </div>

    </section>
  );
}

export default Hero;