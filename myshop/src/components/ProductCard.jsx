import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard(props) {
 
  const { name, price, description, image, rating } = props.product;

 
  const { addToCart } = useContext(CartContext);

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  };

  const imgStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover"
  };

  const contentStyle = {
    padding: "20px"
  };

  const btnStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#e94560",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "12px"
  };


  function handleAddToCart() {
    addToCart(props.product);
  }

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imgStyle} />
      <div style={contentStyle}>
        <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1a1a2e" }}>
          {name}
        </h3>
        <p style={{ fontSize: "14px", color: "#f5a623", margin: "6px 0" }}>
          ⭐ {rating} / 5
        </p>
        <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
          {description}
        </p>
        <p style={{ fontSize: "22px", fontWeight: "bold", color: "#e94560", marginTop: "10px" }}>
          Rs.{price}
        </p>
        <button style={btnStyle} onClick={handleAddToCart}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

export default ProductCard;