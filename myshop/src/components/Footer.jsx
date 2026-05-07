import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: "#1a1a2e",
    color: "#aaa",
    textAlign: "center",
    padding: "25px",
    marginTop: "auto",
    borderTop: "1px solid #333"
  };

  const headingStyle = {
    color: "#e94560",
    marginBottom: "8px",
    fontSize: "18px"
  };

  return (
    <footer style={footerStyle}>
      <h3 style={headingStyle}>MyShop</h3>
      <p>Develop by "Fardeen khan"</p>
      <p style={{ marginTop: "8px", fontSize: "13px" }}>
        © 2026 MyShop. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;