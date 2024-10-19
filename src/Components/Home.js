import React from "react";
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <h1>Welcome to Our PB Clothing</h1>
      <p>Your one-stop shop for quality products at unbeatable prices. Explore our exclusive collection, ranging from everyday essentials to unique items you won’t find anywhere else.</p>
      <div className="home-features">
        <div className="feature-card">
          <h3>Quality Products</h3>
          <p>Our products are carefully selected to ensure top-notch quality, so you can shop with confidence.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly with our efficient shipping service. Convenience is our priority.</p>
        </div>
        <div className="feature-card">
          <h3>24/7 Customer Support</h3>
          <p>We’re here to help! Our friendly support team is available around the clock to assist you.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
