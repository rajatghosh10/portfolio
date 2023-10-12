import React from "react";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "36px",
  color: "#333",
  marginBottom: "10px",
};

const paragraphStyle = {
  fontSize: "18px",
  color: "#666",
  maxWidth: "500px",
  marginBottom: "20px",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  fontSize: "20px",
};

buttonStyle.hover = {
  backgroundColor: "#0056b3",
};

function AboutContent() {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/contact");
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Who Am I?</h1>
      <p style={paragraphStyle}>
        I am a ReactJS Front End Developer. I create responsive, secure websites
        for my clients.
      </p>
      <button style={buttonStyle} onClick={handleSubmit}>
        Contact
      </button>
    </div>
  );
}

export default AboutContent;
