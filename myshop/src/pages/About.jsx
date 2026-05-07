import React from 'react';
import { teamData } from '../data';

function About() {

  const pageStyle = {
    padding: "60px 40px",
    maxWidth: "1100px",
    margin: "0 auto"
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#1a1a2e",
    textAlign: "center",
    marginBottom: "15px"
  };

  const paraStyle = {
    textAlign: "center",
    color: "#555",
    fontSize: "17px",
    lineHeight: "1.8",
    maxWidth: "700px",
    margin: "0 auto 50px auto"
  };

  const teamHeadingStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#1a1a2e",
    textAlign: "center",
    marginBottom: "35px"
  };

  const teamGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px"
  };

  const memberCardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
  };

  const memberImgStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "4px solid #e94560"
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>About Us 🏢</h1>
      <p style={paraStyle}>
        Welcome to MyShop, your one-stop destination for all your shopping needs! We are passionate about providing a seamless and enjoyable shopping experience to our customers. 
      </p>

   
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px",
        marginBottom: "60px"
      }}>
        <div style={{ backgroundColor: "#fff3f5", padding: "25px", borderRadius: "10px", textAlign: "center" }}>
          <h3 style={{ fontSize: "32px", marginBottom: "10px" }}>🚚</h3>
          <h4 style={{ color: "#1a1a2e" }}>Free Delivery</h4>
          <p style={{ color: "#666", fontSize: "14px", marginTop: "6px" }}>Free Delivery charges </p>
        </div>
        <div style={{ backgroundColor: "#f0f8ff", padding: "25px", borderRadius: "10px", textAlign: "center" }}>
          <h3 style={{ fontSize: "32px", marginBottom: "10px" }}>🔄</h3>
          <h4 style={{ color: "#1a1a2e" }}>Easy Returns</h4>
          <p style={{ color: "#666", fontSize: "14px", marginTop: "6px" }}>30 days return policy</p>
        </div>
        <div style={{ backgroundColor: "#f5fff5", padding: "25px", borderRadius: "10px", textAlign: "center" }}>
          <h3 style={{ fontSize: "32px", marginBottom: "10px" }}>💰</h3>
          <h4 style={{ color: "#1a1a2e" }}>Best Prices</h4>
          <p style={{ color: "#666", fontSize: "14px", marginTop: "6px" }}>Low than other market price</p>
        </div>
        <div style={{ backgroundColor: "#fffaf0", padding: "25px", borderRadius: "10px", textAlign: "center" }}>
          <h3 style={{ fontSize: "32px", marginBottom: "10px" }}>🛡️</h3>
          <h4 style={{ color: "#1a1a2e" }}>Secure Payment</h4>
          <p style={{ color: "#666", fontSize: "14px", marginTop: "6px" }}>100% safe payment methods</p>
        </div>
      </div>

      <h2 style={teamHeadingStyle}>Meet Our Team 👥</h2>
      <div style={teamGridStyle}>
        {teamData.map((member) => (
          <div style={memberCardStyle} key={member.id}>
            <img
              src={member.image}
              alt={member.name}
              style={memberImgStyle}
            />
            <h3 style={{ fontSize: "20px", color: "#1a1a2e" }}>
              {member.name}
            </h3>
            <p style={{ color: "#e94560", fontSize: "15px", marginTop: "5px" }}>
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;