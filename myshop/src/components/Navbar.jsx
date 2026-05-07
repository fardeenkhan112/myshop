import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartCount } = useContext(CartContext);

  const navStyle = {
    backgroundColor: "#1a1a2e",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
  };

  const logoStyle = {
    color: "#e94560",
    fontSize: "26px",
    fontWeight: "bold"
  };

  const linksStyle = {
    display: "flex",
    gap: "30px",
    listStyle: "none",
    alignItems: "center"
  };

  const linkStyle = {
    color: "#eee",
    fontSize: "16px",
    fontWeight: "500"
  };

  // cart icon with badge
  const cartBadgeStyle = {
    position: "relative",
    display: "inline-block"
  };

  const countStyle = {
    position: "absolute",
    top: "-10px",
    right: "-12px",
    backgroundColor: "#e94560",
    color: "white",
    fontSize: "11px",
    fontWeight: "bold",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>🛒 MyShop</div>

      <ul style={linksStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/products" style={linkStyle}>Products</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        <li style={cartBadgeStyle}>
          <span style={{ fontSize: "24px" }}>🛒</span>
          {cartCount > 0 && (
            <span style={countStyle}>{cartCount}</span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;