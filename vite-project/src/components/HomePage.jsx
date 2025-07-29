import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="overlay"></div>
      <div className="hero-text">
        <h1>
          Master your <span>money</span> <br /> to get out and stay out of <span>debt</span>
        </h1>
        <p>Start your journey with <strong>EXPENSE TRACKER</strong></p>
        <blockquote>"Budgeting isn't about limiting yourself — it's about making the things that excite you possible."</blockquote>
        <Link to="/signup">
          <button className="cta-button">Create an Account</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
