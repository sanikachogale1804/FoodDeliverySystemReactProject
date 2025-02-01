
import React from 'react';

import aboutus from '../CSS/AboutUs.css'; // CSS file for custom styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>We are passionate about bringing you delicious food, right to your doorsteps!</p>
      </div>

      <div className="about-content">
       
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            Our goal is to make your food delivery experience as easy,
            quick, and enjoyable as possible. We work with local restaurants to bring you fresh and
            delicious meals from the comfort of your home.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Fast and reliable delivery service</li>
            <li>Wide range of menu options</li>
            <li>Secure and easy online ordering</li>
            <li>Friendly customer support</li>
          </ul>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>

      <div className="about-footer">
        <p>&copy; 2025 MealExpress. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AboutUs;
