import React from "react";
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>We are a passionate team dedicated to bringing you the best products at great prices. Our mission is to offer high-quality, unique items that cater to all your needs.</p>
      <div className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>To provide quality products that enhance everyday life. We strive to build trust and deliver the best shopping experience.</p>
        </div>
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>To become a leading provider of unique and essential products, offering the best value and service to our customers worldwide.</p>
        </div>
        <div className="about-card">
          <h3>Our Values</h3>
          <p>Integrity, innovation, and customer satisfaction are the core values that guide our business and decision-making.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
