import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",      
    email: "",     
    message: ""    
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const inputName = e.target.name;   
    const inputValue = e.target.value; 

    setFormData({
      ...formData,          
      [inputName]: inputValue  
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Sumbited!");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  const pageStyle = {
    padding: "60px 30px",
    maxWidth: "800px",  
    margin: "0 auto"
  };

  const headingStyle = {
    fontSize: "38px",
    fontWeight: "bold",
    color: "#1a1a2e",
    textAlign: "center",
    marginBottom: "10px"
  };

  const paraStyle = {
    textAlign: "center",
    color: "#888",
    marginBottom: "40px"
  };

  const infoGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px"
  };

  const infoCardStyle = {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    color: "#1a1a2e",
    fontSize: "15px"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "15px",
    marginBottom: "22px",
    outline: "none"
  };

  const submitBtnStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#e94560",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "17px",
    fontWeight: "bold",
    cursor: "pointer"
  };

  return (
    <div style={pageStyle}>

      <h1 style={headingStyle}>Contact Us 📞</h1>
      <p style={paraStyle}>
        For any quetion Sent the message below!
      </p>

      <div style={infoGridStyle}>

        <div style={infoCardStyle}>
          <h3 style={{ fontSize: "28px", marginBottom: "8px" }}>📱</h3>
          <h4 style={{ color: "#1a1a2e", marginBottom: "5px" }}>Phone</h4>
          <p style={{ color: "#666", fontSize: "14px" }}>
            +92 3248227557
          </p>
        </div>
        <div style={infoCardStyle}>
          <h3 style={{ fontSize: "28px", marginBottom: "8px" }}>📧</h3>
          <h4 style={{ color: "#1a1a2e", marginBottom: "5px" }}>Email</h4>
          <p style={{ color: "#666", fontSize: "14px" }}>
            fldevstudio@gmail.com
          </p>
        </div>

    
        <div style={infoCardStyle}>
          <h3 style={{ fontSize: "28px", marginBottom: "8px" }}>📍</h3>
          <h4 style={{ color: "#1a1a2e", marginBottom: "5px" }}>Location</h4>
          <p style={{ color: "#666", fontSize: "14px" }}>
            Pakistan
          </p>
        </div>

      </div>

      {submitted && (
        <div style={{
          backgroundColor: "#d4edda",
          color: "#155724",
          padding: "15px",
          borderRadius: "8px",
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "600",
          fontSize: "16px"
        }}>
          ✅ Thanks for your message will be get to you soon!
        </div>
      )}
      <form style={formStyle} onSubmit={handleSubmit}>

        <div>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message here..."
            style={{ ...inputStyle, height: "130px", resize: "vertical" }}
            required
          />
        </div>

        <button type="submit" style={submitBtnStyle}>
          Send Message 🚀
        </button>
      </form>

      <p style={{
        textAlign: "center",
        color: "#bbb",
        fontSize: "13px",
        marginTop: "20px"
      }}>
        💡 "After sumit the form check the console"
      </p>
    </div>
  );
}

export default Contact;