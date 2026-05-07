import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { productsData } from '../data';

function Home() {
  const featuredProducts = productsData.slice(0, 3);

 
  const sectionStyle = {
    padding: "60px 40px",
    textAlign: "center"
  };

  const sectionHeadingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: "10px"
  };

  const sectionParaStyle = {
    color: "#666",
    marginBottom: "40px",
    fontSize: "16px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover"
  };

  const cardContentStyle = {
    padding: "20px",
    textAlign: "left"
  };

  const seeAllBtnStyle = {
    display: "inline-block",
    marginTop: "30px",
    padding: "12px 30px",
    backgroundColor: "#e94560",
    color: "white",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600"
  };

  return (
    <div>

      <HeroSection />
      <div style={sectionStyle}>
        <h2 style={sectionHeadingStyle}>🔥 Featured Products</h2>
        <p style={sectionParaStyle}>
          Check out some of our best-selling products handpicked just for you!
        </p>

        <div style={gridStyle}>
          {featuredProducts.map((product) => (
            <div style={cardStyle} key={product.id}>
              <img src={product.image} alt={product.name} style={imgStyle} />
              <div style={cardContentStyle}>
                <h3 style={{ fontSize: "18px", color: "#1a1a2e" }}>
                  {product.name}
                </h3>
                <p style={{ color: "#e94560", fontSize: "20px", fontWeight: "bold", marginTop: "8px" }}>
                  Rs.{product.price}
                </p>
                <p style={{ color: "#666", fontSize: "14px", marginTop: "6px" }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/products">
          <button style={seeAllBtnStyle}>See All Products →</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;