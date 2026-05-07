import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  const heroStyle = {
    backgroundColor: "#16213e",
    backgroundImage: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    padding: "100px 40px",
    textAlign: "center",
    color: "white"
  };

  const headingStyle = {
    fontSize: "52px",
    fontWeight: "bold",
    marginBottom: "20px",
    lineHeight: "1.2"
  };

  const paraStyle = {
    fontSize: "18px",
    color: "#bbb",
    maxWidth: "600px",
    margin: "0 auto 30px auto",
    lineHeight: "1.6"
  };

  const btnContainerStyle = {
    display: "flex",
    gap: "15px",
    justifyContent: "center"
  };

  const primaryBtnStyle = {
    padding: "14px 35px",
    backgroundColor: "#e94560",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  };

  const secondaryBtnStyle = {
    padding: "14px 35px",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid #e94560",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  };

  return (
    <div style={heroStyle}>
      <h1 style={headingStyle}>
        Welcome to <span style={{ color: "#e94560" }}>MyShop</span>
      </h1>
      <p style={paraStyle}>
        Here, you'll find the best quality products at affordable prices. Shopping has now become easier than ever!
      </p>
      <div style={btnContainerStyle}>
        <Link to="/products">
          <button style={primaryBtnStyle}>Shop Now 🛒</button>
        </Link>
        <Link to="/about">
          <button style={secondaryBtnStyle}>Learn More</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;