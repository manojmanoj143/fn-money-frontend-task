import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure styles are imported
import welcomeImage from '../assets/welcome.jpg'; // Adjust the path to your image

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Assessment Platform</h1>
     
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/assessment">Assessment</Link>
      </nav>
      <img src={welcomeImage} alt="Welcome" className="welcome-image" />
    </div>
  );
};

export default LandingPage;
